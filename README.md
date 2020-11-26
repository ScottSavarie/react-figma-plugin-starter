![Screenshot of App](https://github.com/ScottSavarie/react-figma-plugin-starter/blob/main/src/assets/youShouldDeleteThis.jpg?raw=true)

# React Figma Plugin Starter

Boilerplate setup for developing React based Figma plugins. Demonstrates a basic example of publishing / subscribing to messages between `App.tsx` and `code.ts`. Additionally has some sensible defaults included such as 
- webpack loaders for CSS Modules and SVGs
- eslint config

## Requirements

- Node 14+

## Reference the Plugin in Figma

1. From the menu go to: Plugins / Development / New Plugin...
1. Select the manifest.json

## Building the Plugin:

```
    $ npm install
    $ npx webpack
```

### Related

[Figma Docs](https://www.figma.com/plugin-docs)

### Credit

Used [Figma's example webpack.config](https://github.com/figma/plugin-samples/tree/master/react) as a starter
