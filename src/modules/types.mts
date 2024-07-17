import workbenchColors from "../../schema/workbench_colors.json" with { type: "json" };
import { namedColors } from "./color.mjs";

export const modes = ["Light", "Dark"] as const;

export type Mode = (typeof modes)[number];

export type WorkbenchColors = Partial<Record<keyof typeof workbenchColors.properties, string>>;

export type NamedColor = keyof typeof namedColors;
