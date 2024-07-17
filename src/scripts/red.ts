import { mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const outdir = resolve(import.meta.dirname, "..", "..", "themes");

await mkdir(outdir, { recursive: true });

const makeTheme = () => {
    const theme = {
        $schema: "vscode://schemas/color-theme",
        name: "Custom Red",
        colors: {
            "activityBar.background": "#580000",
            "badge.background": "#cc3333",
            "button.background": "#833",
            "debugToolBar.background": "#660000",
            "dropdown.background": "#580000",
            "editor.background": "#110000",
            "editor.foreground": "#CCCCCC",
            "editor.hoverHighlightBackground": "#ff000044",
            "editor.lineHighlightBackground": "#ff000033",
            "editor.selectionBackground": "#750000",
            "editor.selectionHighlightBackground": "#f5500039",
            "editorCursor.foreground": "#970000",
            "editorGroup.border": "#ff666633",
            "editorGroupHeader.tabsBackground": "#1a0000",
            "editorHoverWidget.background": "#300000",
            "editorLineNumber.activeForeground": "#ffbbbb88",
            "editorLineNumber.foreground": "#ff777788",
            "editorLink.activeForeground": "#FFD0AA",
            "editorSuggestWidget.background": "#300000",
            "editorSuggestWidget.border": "#220000",
            "editorWhitespace.foreground": "#c10000",
            "editorWidget.background": "#300000",
            "errorForeground": "#ffeaea",
            "extensionButton.prominentBackground": "#cc3333",
            "extensionButton.prominentHoverBackground": "#cc333388",
            "focusBorder": "#ff6666aa",
            "foreground": "#CCCCCC",
            "input.background": "#580000",
            "inputOption.activeBorder": "#cc0000",
            "inputValidation.infoBackground": "#550000",
            "inputValidation.infoBorder": "#DB7E58",
            "list.activeSelectionBackground": "#880000",
            "list.dropBackground": "#662222",
            "list.highlightForeground": "#ff4444",
            "list.hoverBackground": "#800000",
            "list.inactiveSelectionBackground": "#770000",
            "minimap.selectionHighlight": "#750000",
            "peekView.border": "#ff000044",
            "peekViewEditor.background": "#300000",
            "peekViewResult.background": "#400000",
            "peekViewTitle.background": "#550000",
            "pickerGroup.border": "#ff000033",
            "pickerGroup.foreground": "#cc9999",
            "ports.iconRunningProcessForeground": "#DB7E58",
            "progressBar.background": "#cc3333",
            "quickInputList.focusBackground": "#660000",
            "selection.background": "#ff777788",
            "sideBar.background": "#1a0000",
            "statusBar.background": "#700000",
            "statusBar.noFolderBackground": "#700000",
            "statusBarItem.remoteBackground": "#c33",
            "tab.activeBackground": "#490000",
            "tab.inactiveBackground": "#300a0a",
            "tab.lastPinnedBorder": "#ff000044",
            "titleBar.activeBackground": "#1a0000",
            "titleBar.inactiveBackground": "#110000",
        },
        tokenColors: [
            { settings: { foreground: "#F8F8F8" } },
            {
                scope: [
                    "meta.embedded",
                    "source.groovy.embedded",
                    "string meta.image.inline.markdown",
                    "variable.legacy.builtin.python",
                ],
                settings: { foreground: "#F8F8F8" },
            },
            {
                name: "Comment",
                scope: "comment",
                settings: { fontStyle: "italic", foreground: "#e7c0c0ff" },
            },
            {
                name: "Constant",
                scope: "constant",
                settings: { fontStyle: "", foreground: "#994646ff" },
            },
            {
                name: "Keyword",
                scope: "keyword",
                settings: { fontStyle: "", foreground: "#f12727ff" },
            },
            {
                name: "Entity",
                scope: "entity",
                settings: { fontStyle: "", foreground: "#fec758ff" },
            },
            {
                name: "Storage",
                scope: "storage",
                settings: { fontStyle: "bold", foreground: "#ff6262ff" },
            },
            {
                name: "String",
                scope: "string",
                settings: { fontStyle: "", foreground: "#cd8d8dff" },
            },
            {
                name: "Support",
                scope: "support",
                settings: { fontStyle: "", foreground: "#9df39fff" },
            },
            {
                name: "Variable",
                scope: "variable",
                settings: { fontStyle: "italic", foreground: "#fb9a4bff" },
            },
            { name: "Invalid", scope: "invalid", settings: { foreground: "#ffffffff" } },
            {
                name: "Entity inherited-class",
                scope: "entity.other.inherited-class",
                settings: { fontStyle: "underline", foreground: "#aa5507ff" },
            },
            { scope: "constant.character", settings: { foreground: "#ec0d1e" } },
            {
                scope: ["string constant", "constant.character.escape"],
                settings: { fontStyle: "", foreground: "#ffe862ff" },
            },
            {
                name: "String.regexp",
                scope: "string.regexp",
                settings: { foreground: "#ffb454ff" },
            },
            {
                name: "String variable",
                scope: "string variable",
                settings: { foreground: "#edef7dff" },
            },
            {
                name: "Support.function",
                scope: "support.function",
                settings: { fontStyle: "", foreground: "#ffb454ff" },
            },
            {
                name: "Support.constant",
                scope: ["support.constant", "support.variable"],
                settings: { fontStyle: "", foreground: "#eb939aff" },
            },
            {
                name: "Doctype/XML Processing",
                scope: [
                    "declaration.sgml.html declaration.doctype",
                    "declaration.sgml.html declaration.doctype entity",
                    "declaration.sgml.html declaration.doctype string",
                    "declaration.xml-processing",
                    "declaration.xml-processing entity",
                    "declaration.xml-processing string",
                ],
                settings: { fontStyle: "", foreground: "#73817dff" },
            },
            {
                name: "Meta.tag.A",
                scope: ["declaration.tag", "declaration.tag entity", "meta.tag", "meta.tag entity"],
                settings: { fontStyle: "", foreground: "#ec0d1eff" },
            },
            {
                name: "css tag-name",
                scope: "meta.selector.css entity.name.tag",
                settings: { fontStyle: "", foreground: "#aa5507ff" },
            },
            {
                name: "css#id",
                scope: "meta.selector.css entity.other.attribute-name.id",
                settings: { foreground: "#fec758ff" },
            },
            {
                name: "css.class",
                scope: "meta.selector.css entity.other.attribute-name.class",
                settings: { fontStyle: "", foreground: "#41a83eff" },
            },
            {
                name: "css property-name:",
                scope: "support.type.property-name.css",
                settings: { fontStyle: "", foreground: "#96dd3bff" },
            },
            {
                name: "css property-value;",
                scope: [
                    "meta.property-group support.constant.property-value.css",
                    "meta.property-value support.constant.property-value.css",
                ],
                settings: { fontStyle: "italic", foreground: "#ffe862ff" },
            },
            {
                name: "css additional-constants",
                scope: [
                    "meta.property-value support.constant.named-color.css",
                    "meta.property-value constant",
                ],
                settings: { fontStyle: "", foreground: "#ffe862ff" },
            },
            {
                name: "css @at-rule",
                scope: "meta.preprocessor.at-rule keyword.control.at-rule",
                settings: { foreground: "#fd6209ff" },
            },
            {
                name: "css constructor.argument",
                scope: "meta.constructor.argument.css",
                settings: { fontStyle: "", foreground: "#ec9799ff" },
            },
            {
                name: "diff.header",
                scope: ["meta.diff", "meta.diff.header"],
                settings: { fontStyle: "italic", foreground: "#f8f8f8ff" },
            },
            {
                name: "diff.deleted",
                scope: "markup.deleted",
                settings: { foreground: "#ec9799ff" },
            },
            {
                name: "diff.changed",
                scope: "markup.changed",
                settings: { foreground: "#f8f8f8ff" },
            },
            {
                name: "diff.inserted",
                scope: "markup.inserted",
                settings: { foreground: "#41a83eff" },
            },
            {
                name: "Markup Quote",
                scope: "markup.quote",
                settings: { foreground: "#f12727ff" },
            },
            {
                name: "Markup Lists",
                scope: "markup.list",
                settings: { foreground: "#ff6262ff" },
            },
            {
                name: "Markup Styling",
                scope: ["markup.bold", "markup.italic"],
                settings: { foreground: "#fb9a4bff" },
            },
            { name: "Markup: Strong", scope: "markup.bold", settings: { fontStyle: "bold" } },
            {
                name: "Markup: Emphasis",
                scope: "markup.italic",
                settings: { fontStyle: "italic" },
            },
            { scope: "markup.strikethrough", settings: { fontStyle: "strikethrough" } },
            {
                name: "Markup Inline",
                scope: "markup.inline.raw",
                settings: { fontStyle: "", foreground: "#cd8d8dff" },
            },
            {
                name: "Headings",
                scope: [
                    "markup.heading",
                    "markup.heading.setext",
                    "punctuation.definition.heading",
                    "entity.name.section",
                ],
                settings: { fontStyle: "bold", foreground: "#fec758ff" },
            },
            {
                name: "String interpolation",
                scope: [
                    "punctuation.definition.template-expression.begin",
                    "punctuation.definition.template-expression.end",
                    "punctuation.section.embedded",
                    ".format.placeholder",
                ],
                settings: { foreground: "#ec0d1e" },
            },
        ],
        semanticHighlighting: true,
    };

    return JSON.stringify(theme, null, 4);
};

await writeFile(resolve(outdir, "red-color-theme.json"), makeTheme());
