import { ColorConstructor } from "colorjs.io/fn";
import { namedColors } from "./color.d.mts";
import type { NamedColor, WorkbenchColors } from "./types.d.mts";
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
export { namedColors };
//# sourceMappingURL=theme.d.mts.map
