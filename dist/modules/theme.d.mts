import { ColorConstructor } from "colorjs.io/fn";
import workbenchColors from "../schema/workbench_colors.json";
import type { Color } from "./colors.mjs";
declare const modes: readonly ["Light", "Dark"];
export type Mode = (typeof modes)[number];
export type WorkbenchColors = Partial<Record<keyof typeof workbenchColors.properties, string>>;
export declare class Theme<T extends Record<string, Color>> {
    #private;
    constructor(name: string, colors: T, semanticHighlighting?: boolean);
    get: () => Record<keyof T, string>;
    set: (key: keyof T, color: Color) => Record<keyof T, ColorConstructor>[keyof T];
    workbench: (workbenchColors: WorkbenchColors) => void;
    tokenColors: (tokenColors: unknown[]) => void;
    semanticTokenColors: (semanticTokenColors: Record<string, string>) => void;
    save: (outdir?: string) => Promise<void>;
}
export {};
//# sourceMappingURL=theme.d.mts.map