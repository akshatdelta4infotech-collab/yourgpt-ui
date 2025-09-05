import { createHighlighter } from "shiki";

let highlighter: Awaited<ReturnType<typeof createHighlighter>> | null = null;

const THEME = "vitesse-dark";

const escapeHtml = (s: string) =>
    s.replace(/[&<>"']/g, m => (
        {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        }[m] as string
    ));

export async function highlight(code: string, lang: string = "tsx") {
    if (!highlighter) {
        highlighter = await createHighlighter({
            themes: [THEME],
            langs: ["tsx", "ts", "js", "jsx", "html", "css", "bash", "json"],
        });
    }

    await highlighter.loadLanguage(lang as any).catch(() => { });

    // Preprocess code to remove empty lines
    const cleanedCode = code
        .split('\n')
        .filter(line => line.trim() !== '') // Remove completely empty lines
        .join('\n')
        .trim(); // Remove leading/trailing whitespace

    const { tokens } = await highlighter.codeToTokens(cleanedCode, {
        lang: lang as any,
        theme: THEME,
    });

    let lineNumber = 1;
    const body = tokens
        .map((line: any) => {
            const inner = line
                .map(
                    (t: any) =>
                        `<span style="color:${t.color ?? "inherit"}">${escapeHtml(
                            t.content
                        )}</span>`
                )
                .join("");

            return `<div class="line"><span class="line-number">${lineNumber++}</span><span class="line-content">${inner}</span></div>`;
        })
        .join("");

    return `
<pre class="shiki bg-transparent text-card-foreground border-0 rounded-none overflow-visible p-0 m-0">
  <code class="font-mono text-sm bg-transparent p-0 m-0 block">
    ${body}
    <div class="line" style="height: 2rem;">&nbsp;</div>
  </code>
</pre>`;
}
