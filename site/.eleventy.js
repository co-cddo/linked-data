module.exports = function (eleventyConfig) { 
    const govukEleventyPlugin = require('govuk-eleventy-plugin');

    eleventyConfig.addPlugin(govukEleventyPlugin, {
    // Options
    });

    return {
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        dir: {
            output: "public",
            layouts: "node_modules/govuk-eleventy-plugin/layouts"
        },
    };
};