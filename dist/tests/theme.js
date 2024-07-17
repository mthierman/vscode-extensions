import { resolve } from "node:path";
import { Theme } from "vscode-extensions";
const theme = new Theme("Test", {
    background: { color: "black" },
    background2: { color: "black" },
    foreground: { color: "white" },
    border: { color: "gray" },
    test: { color: "pink" },
}, true);
const colors = theme.get();
theme.workbench({
    "editor.background": colors.background,
    "editor.foreground": colors.foreground,
    "foreground": colors.foreground,
    "sideBar.background": colors.background2,
    "panel.background": colors.background2,
    "titleBar.activeBackground": colors.background,
    "statusBar.background": colors.background,
    "menu.background": colors.background2,
    "menu.border": colors.border,
});
theme.tokenColors([
    {
        scope: [
            "meta.embedded",
            "source.groovy.embedded",
            "string meta.image.inline.markdown",
            "variable.legacy.builtin.python",
        ],
        settings: { foreground: "#D4D4D4" },
    },
    { scope: "emphasis", settings: { fontStyle: "italic" } },
    { scope: "strong", settings: { fontStyle: "bold" } },
    { scope: "header", settings: { foreground: "#000080" } },
    { scope: "comment", settings: { foreground: "#6A9955" } },
    {
        scope: "constant.language",
        settings: { foreground: "#569cd6" },
    },
    {
        scope: [
            "constant.numeric",
            "variable.other.enummember",
            "keyword.operator.plus.exponent",
            "keyword.operator.minus.exponent",
        ],
        settings: { foreground: "#b5cea8" },
    },
    { scope: "constant.regexp", settings: { foreground: "#646695" } },
    { scope: "entity.name.tag", settings: { foreground: "#569cd6" } },
    {
        scope: ["entity.name.tag.css", "entity.name.tag.less"],
        settings: { foreground: "#d7ba7d" },
    },
    {
        scope: "entity.other.attribute-name",
        settings: { foreground: "#9cdcfe" },
    },
    {
        scope: [
            "entity.other.attribute-name.class.css",
            "source.css entity.other.attribute-name.class",
            "entity.other.attribute-name.id.css",
            "entity.other.attribute-name.parent-selector.css",
            "entity.other.attribute-name.parent.less",
            "source.css entity.other.attribute-name.pseudo-class",
            "entity.other.attribute-name.pseudo-element.css",
            "source.css.less entity.other.attribute-name.id",
            "entity.other.attribute-name.scss",
        ],
        settings: { foreground: "#d7ba7d" },
    },
    { scope: "invalid", settings: { foreground: "#f44747" } },
    {
        scope: "markup.underline",
        settings: { fontStyle: "underline" },
    },
    {
        scope: "markup.bold",
        settings: { fontStyle: "bold", foreground: "#569cd6" },
    },
    {
        scope: "markup.heading",
        settings: { fontStyle: "bold", foreground: "#569cd6" },
    },
    { scope: "markup.italic", settings: { fontStyle: "italic" } },
    {
        scope: "markup.strikethrough",
        settings: { fontStyle: "strikethrough" },
    },
    { scope: "markup.inserted", settings: { foreground: "#b5cea8" } },
    { scope: "markup.deleted", settings: { foreground: "#ce9178" } },
    { scope: "markup.changed", settings: { foreground: "#569cd6" } },
    {
        scope: "punctuation.definition.quote.begin.markdown",
        settings: { foreground: "#6A9955" },
    },
    {
        scope: "punctuation.definition.list.begin.markdown",
        settings: { foreground: "#6796e6" },
    },
    {
        scope: "markup.inline.raw",
        settings: { foreground: "#ce9178" },
    },
    {
        name: "brackets of XML/HTML tags",
        scope: "punctuation.definition.tag",
        settings: { foreground: "#808080" },
    },
    {
        scope: ["meta.preprocessor", "entity.name.function.preprocessor"],
        settings: { foreground: "#569cd6" },
    },
    {
        scope: "meta.preprocessor.string",
        settings: { foreground: "#ce9178" },
    },
    {
        scope: "meta.preprocessor.numeric",
        settings: { foreground: "#b5cea8" },
    },
    {
        scope: "meta.structure.dictionary.key.python",
        settings: { foreground: "#9cdcfe" },
    },
    {
        scope: "meta.diff.header",
        settings: { foreground: "#569cd6" },
    },
    { scope: "storage", settings: { foreground: "#569cd6" } },
    { scope: "storage.type", settings: { foreground: "#569cd6" } },
    {
        scope: ["storage.modifier", "keyword.operator.noexcept"],
        settings: { foreground: "#569cd6" },
    },
    {
        scope: ["string", "meta.embedded.assembly"],
        settings: { foreground: "#ce9178" },
    },
    { scope: "string.tag", settings: { foreground: "#ce9178" } },
    { scope: "string.value", settings: { foreground: "#ce9178" } },
    { scope: "string.regexp", settings: { foreground: "#d16969" } },
    {
        name: "String interpolation",
        scope: [
            "punctuation.definition.template-expression.begin",
            "punctuation.definition.template-expression.end",
            "punctuation.section.embedded",
        ],
        settings: { foreground: "#569cd6" },
    },
    {
        name: "Reset JavaScript string interpolation expression",
        scope: ["meta.template.expression"],
        settings: { foreground: "#d4d4d4" },
    },
    {
        scope: [
            "support.type.vendored.property-name",
            "support.type.property-name",
            "source.css variable",
            "source.coffee.embedded",
        ],
        settings: { foreground: "#9cdcfe" },
    },
    { scope: "keyword", settings: { foreground: "#569cd6" } },
    { scope: "keyword.control", settings: { foreground: "#569cd6" } },
    {
        scope: "keyword.operator",
        settings: { foreground: "#d4d4d4" },
    },
    {
        scope: [
            "keyword.operator.new",
            "keyword.operator.expression",
            "keyword.operator.cast",
            "keyword.operator.sizeof",
            "keyword.operator.alignof",
            "keyword.operator.typeid",
            "keyword.operator.alignas",
            "keyword.operator.instanceof",
            "keyword.operator.logical.python",
            "keyword.operator.wordlike",
        ],
        settings: { foreground: "#569cd6" },
    },
    {
        scope: "keyword.other.unit",
        settings: { foreground: "#b5cea8" },
    },
    {
        scope: ["punctuation.section.embedded.begin.php", "punctuation.section.embedded.end.php"],
        settings: { foreground: "#569cd6" },
    },
    {
        scope: "support.function.git-rebase",
        settings: { foreground: "#9cdcfe" },
    },
    {
        scope: "constant.sha.git-rebase",
        settings: { foreground: "#b5cea8" },
    },
    {
        name: "coloring of the Java import and package identifiers",
        scope: [
            "storage.modifier.import.java",
            "variable.language.wildcard.java",
            "storage.modifier.package.java",
        ],
        settings: { foreground: "#d4d4d4" },
    },
    {
        name: "this.self",
        scope: "variable.language",
        settings: { foreground: "#569cd6" },
    },
]);
theme.semanticTokenColors({
    newOperator: "#d4d4d4",
    stringLiteral: "#ce9178",
    customLiteral: "#D4D4D4",
    numberLiteral: "#b5cea8",
});
const outdir = resolve(import.meta.dirname, "..", "..", "themes");
await theme.save(outdir);
//# sourceMappingURL=theme.js.map