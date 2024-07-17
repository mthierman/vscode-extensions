import workbenchColors from "../schema/workbench_colors.json";
import { namedColors } from "./color.mjs";
export declare const modes: readonly ["Light", "Dark"];
export type Mode = (typeof modes)[number];
export type WorkbenchColors = Partial<Record<keyof typeof workbenchColors.properties, string>>;
export type NamedColor = keyof typeof namedColors;
//# sourceMappingURL=type.d.mts.map