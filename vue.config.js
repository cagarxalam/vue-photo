const {ProvidePlugin} = require("webpack")

module.exports = {
	configureWebpack: {
		plugins: [
			new ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				bootstrap: 'bootstrap',
				jQueryBridget: 'jquery-bridget/jquery-bridget',
				'window.$': 'jquery',
				'window.jQuery': 'jquery',
				'window.bootstrap': 'bootstrap',
				'window.jQueryBridget': 'jquery-bridget/jquery-bridget'
			})
		]
	}
}