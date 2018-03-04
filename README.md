# contacts-manager

Contacts Manager app by Todd Motto rewritten to use *NPM* and *TypeScript* as the main tools.

## Differences

These are the main differences to origin version:

- no *Webpack*, *Gulp*, *Babel*
- bundling by using *NPM* scripts
- source files transformation and bundling all done using *TypeScript* `tsc` cli tool
- explicit dependency injection without using deprecated `ngAnnotate`
- unit tests updated
- no `templates.js` cache file. All templates loaded at runtime and cached

## Development

```sh
npm install
npm run build
npm start
```

## Author

@peterblazejewicz
