# gridsome-plugin-pug
[![GitHub](https://img.shields.io/github/license/gluons/gridsome-plugin-pug.svg?style=flat-square)](./LICENSE)
[![npm](https://img.shields.io/npm/v/gridsome-plugin-pug.svg?style=flat-square)](https://www.npmjs.com/package/gridsome-plugin-pug)
[![npm](https://img.shields.io/npm/dt/gridsome-plugin-pug.svg?style=flat-square)](https://www.npmjs.com/package/gridsome-plugin-pug)

[Pug](https://pugjs.org/) plugin for [Gridsome](https://gridsome.org/).

> This plugin will add [pug-plain-loader](https://github.com/yyx990803/pug-plain-loader) for using Pug in Vue single file component (`.vue`).  
> And add [pug-loader](https://github.com/pugjs/pug-loader) for importing `.pug` file directly.

## Installation

```bash
npm install -D pug gridsome-plugin-pug
# or
yarn add -D pug gridsome-plugin-pug
```

## Usage

```js
module.exports = {
	plugins: [
		use: 'gridsome-plugin-pug',
		options: {
			pug: { /* Options for `pug-plain-loader` */ },
			pugLoader: { /* Options for `pug-loader` */ }
		}
	]
};
```
