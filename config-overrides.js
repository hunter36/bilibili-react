const { injectBabelPlugin } = require('react-app-rewired');
const fs = require('fs');
module.exports = function override(config, env) {
	fs.writeFileSync('before.txt',JSON.stringify(config));
	config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
	fs.writeFileSync('after.txt',JSON.stringify(config));
	return config;
};