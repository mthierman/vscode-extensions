import { ColorConstructor, ColorSpace, parse, serialize, sRGB } from "colorjs.io/fn";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import workbenchColors from "../schema/workbench_colors.json" with { type: "json" };
import type { Color } from "./colors.mjs";

const modes = ["Light", "Dark"] as const;
export type Mode = (typeof modes)[number];
export type WorkbenchColors = Partial<Record<keyof typeof workbenchColors.properties, string>>;

const parseColor = (color: Color) => {
    const parsed = parse(color.color);

    if (color.alpha) {
        parsed.alpha = color.alpha;
    }

    return parsed;
};

const parseInit = <T extends Record<string, Color>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, parseColor(value)]),
    ) as Record<keyof T, ColorConstructor>;
};

const colorsToHex = <T extends Record<string, ColorConstructor>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, serialize(value, { format: "hex" })]),
    ) as Record<keyof T, string>;
};

export class Theme<T extends Record<string, Color>> {
    constructor(name: string, colors: T, semanticHighlighting: boolean = true) {
        ColorSpace.register(sRGB);
        this.#name = name;
        this.#outfile = `${this.#name.replace(" ", "-").toLowerCase()}-color-theme.json`;
        this.#semanticHighlighting = semanticHighlighting;
        this.#colors = parseInit(colors);
        this.#workbenchColors = {};
        this.#tokenColors = [];
        this.#semanticTokenColors = {};
    }

    #name: string;
    #outfile: string;
    #semanticHighlighting: boolean;
    #colors: Record<keyof T, ColorConstructor>;
    #workbenchColors: WorkbenchColors;
    #tokenColors: unknown[];
    #semanticTokenColors: Record<string, string>;

    get = () => {
        return colorsToHex(this.#colors);
    };

    set = (key: keyof T, color: Color) => {
        this.#colors[key] = parseColor(color);

        return this.#colors[key];
    };

    #alpha = (key: keyof T, alpha: number) => {
        this.#colors[key].alpha = alpha;

        return this.#colors[key];
    };

    workbench = (workbenchColors: WorkbenchColors) => {
        this.#workbenchColors = workbenchColors;
    };

    tokenColors = (tokenColors: unknown[]) => {
        this.#tokenColors = tokenColors;
    };

    semanticTokenColors = (semanticTokenColors: Record<string, string>) => {
        this.#semanticTokenColors = semanticTokenColors;
    };

    #serialize = {
        color: (key: keyof T) => {
            return this.#colors[key];
        },
        colorAsHex: (key: keyof T) => {
            return serialize(this.#colors[key], { format: "hex" });
        },
        colors: () => {
            return this.#colors;
        },
        colorsAsHex: () => {
            return colorsToHex(this.#colors);
        },
        json: () => {
            return JSON.stringify(this.#serialize.colorsAsHex(), null, 4);
        },
    };

    #generate = () => {
        const theme = {
            $schema: "vscode://schemas/color-theme",
            name: this.#name,
            colors: this.#workbenchColors,
            tokenColors: this.#tokenColors,
            semanticHighlighting: this.#semanticHighlighting,
            semanticTokenColors: this.#semanticTokenColors,
        };

        return JSON.stringify(theme, null, 4);
    };

    save = async (outdir: string = resolve(".", "themes")) => {
        await mkdir(outdir, { recursive: true });
        await writeFile(resolve(outdir, this.#outfile), this.#generate());
    };
}

const generateManifest = () => {};
