import Config from 'webpack-chain';

interface Options {
	pug?: Record<string, any>;
	pugLoader?: Record<string, any>;
}

/**
 * Infuse Pug loaders into `webpack-chain` instance.
 *
 * @param {Config} config `webpack-chain` instance
 * @param {Record<string, any>} pugOptions Options for `pug-plain-loader`
 * @param {Record<string, any>} pugLoaderOptions Options for `pug-loader`
 */
function infusePug(
	config: Config,
	pugOptions: Record<string, any>,
	pugLoaderOptions: Record<string, any>
) {
	const pugRule = config.module.rule('pug').test(/\.pug$/);

	pugRule.oneOf('pug-vue').resourceQuery(/^\?vue/)
		.use('pug-vue')
			.loader('pug-plain-loader')
			.options(pugOptions);

	pugRule.oneOf('pug')
		.use('pug')
			.loader('pug-loader')
			.options(pugLoaderOptions);
}

/**
 * Pug plugin for Gridsome.
 *
 * @exports
 * @param {any} api Gridsome API
 * @param {Options} options Plugin options
 */
function PugPlugin(api: any, options: Options) {
	const { pug, pugLoader } = options;

	api.chainWebpack((config: Config) => infusePug(config, pug, pugLoader));
}

/**
 *  Default options
 */
PugPlugin.defaultOptions = (): Options => ({
	pug: undefined,
	pugLoader: undefined
});

export = PugPlugin;
