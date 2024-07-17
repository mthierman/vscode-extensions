import { ColorConstructor } from "colorjs.io/fn";
import type { NamedColor, WorkbenchColors } from "./type.mjs";
type HexColor = string & {
    hexish?: unknown;
};
type Color = {
    color: NamedColor | HexColor;
    alpha?: number;
};
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