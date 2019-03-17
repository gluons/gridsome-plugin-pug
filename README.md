# gridsome-plugin-pug

[Pug](https://pugjs.org/) plugin for [Gridsome](https://gridsome.org/).

> This plugin will add [pug-plain-loader](https://github.com/yyx990803/pug-plain-loader) for using Pug in Vue single file component (`.vue`).  
> And add [pug-loader](https://github.com/pugjs/pug-loader) for importing `.pug` file directly.

## Installation

```bash
npm install -D gridsome-plugin-pug
# or
yarn add -D gridsome-plugin-pug
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
