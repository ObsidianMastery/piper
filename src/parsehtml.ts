import * as TurndownService from 'turndown'
import * as DOMPurify from 'isomorphic-dompurify';
import * as turndownPluginGfm from '@guyplusplus/turndown-plugin-gfm';

export async function parseHtmlContent(content: string) {
    const gfm = turndownPluginGfm.gfm;
    const turndownService = new TurndownService({
        headingStyle: 'atx',
        hr: '---',
        bulletListMarker: '-',
        codeBlockStyle: 'fenced',
        emDelimiter: '*',
    });
    turndownService.use(gfm);
    return await turndownService.turndown(content);
}
