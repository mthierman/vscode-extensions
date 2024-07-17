import { ColorSpace, parse, serialize, sRGB } from "colorjs.io/fn";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { namedColors } from "./color.mjs";
const parseColor = (color) => {
    const parsed = parse(color.color);
    if (color.alpha) {
        parsed.alpha = color.alpha;
    }
    return parsed;
};
const parseInit = (colors) => {
    return Object.fromEntries(Object.entries(colors).map(([key, value]) => [key, parseColor(value)]));
};
const colorsToHex = (colors) => {
    return Object.fromEntries(Object.entries(colors).map(([key, value]) => [key, serialize(value, { format: "hex" })]));
};
export class Theme {
    constructor(name, colors, semanticHighlighting = true) {
        ColorSpace.register(sRGB);
        this.#name = name;
        this.#outfile = `${this.#name.replace(" ", "-").toLowerCase()}-color-theme.json`;
        this.#semanticHighlighting = semanticHighlighting;
        this.#colors = parseInit(colors);
        this.#workbenchColors = {};
        this.#tokenColors = [];
        this.#semanticTokenColors = {};
    }
    #name;
    #outfile;
    #semanticHighlighting;
    #colors;
    #workbenchColors;
    #tokenColors;
    #semanticTokenColors;
    get = () => {
        return colorsToHex(this.#colors);
    };
    set = (key, color) => {
        this.#colors[key] = parseColor(color);
        return this.#colors[key];
    };
    #alpha = (key, alpha) => {
        this.#colors[key].alpha = alpha;
        return this.#colors[key];
    };
    workbench = (workbenchColors) => {
        this.#workbenchColors = workbenchColors;
    };
    tokenColors = (tokenColors) => {
        this.#tokenColors = tokenColors;
    };
    semanticTokenColors = (semanticTokenColors) => {
        this.#semanticTokenColors = semanticTokenColors;
    };
    #serialize = {
        color: (key) => {
            return this.#colors[key];
        },
        colorAsHex: (key) => {
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
    save = async (outdir = resolve(".", "themes")) => {
        await mkdir(outdir, { recursive: true });
        await writeFile(resolve(outdir, this.#outfile), this.#generate());
    };
}
const generateManifest = () => { };
export { namedColors };
//# sourceMappingURL=theme.mjs.map