// Renders the app to static HTML at build time and injects it into dist/index.html
// so crawlers and link previews see the real content without running JavaScript.
import { readFileSync, writeFileSync } from 'node:fs'
import { render } from './dist-ssr/entry-server.js'

const template = readFileSync('dist/index.html', 'utf8')
const html = render()
const output = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)

if (output === template) {
  throw new Error('prerender: could not find the root element placeholder in dist/index.html')
}

writeFileSync('dist/index.html', output)
console.log(`prerender: injected ${html.length} bytes of HTML`)
