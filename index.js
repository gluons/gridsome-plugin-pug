/**
 * @typedef {{ pug?: Record<string, any>, pugLoader?: Record<string, any> }} Options
 */

/* eslint-disable indent */
/**
 * Infuse Pug loaders into `webpack-chain` instance.
 *
 * @param { import('webpack-chain') } config `webpack-chain` instance
 * @param {Record<string, any>} pugOptions Options for `pug-plain-loader`
 * @param {Record<string, any>} pugLoaderOptions Options for `pug-loader`
 */
function infusePug(config, pugOptions, pugLoaderOptions) {
	config.module
		.rule('pug')
			.test(/\.pug$/)
			.oneOf('pug-vue')
				.resourceQuery(/^\?vue/)
				.use('pug-vue')
					.loader('pug-plain-loader')
					.options(pugOptions)
					.end()
				.end()
			.oneOf('pug')
				.use('pug')
					.loader('pug-loader')
					.options(pugLoaderOptions);
}
/* eslint-enable indent */

/**
 * Gridsome's Pug plugin.
 *
 * @class PugPlugin
 * @exports
 */
class PugPlugin {
	/**
	 * Default options.
	 *
	 * @static
	 * @returns {Options}
	 * @memberof PugPlugin
	 */
	static defaultOptions() {
		return {
			pug: undefined,
			pugLoader: undefined
		};
	}

	/**
	 * Creates an instance of `PugPlugin`.
	 * @param {any} api Gridsome API
	 * @param {Options} options Plugin options
	 * @memberof PugPlugin
	 */
	constructor(api, options) {
		const { pug, pugLoader } = options;

		api.chainWebpack(config => infusePug(config, pug, pugLoader));
	}
}

module.exports = PugPlugin;
