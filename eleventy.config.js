// Code adapted from: https://codeberg.org/vkc/thestopbits-dot-net/src/branch/main/eleventy.config.js

export default async function(eleventyConfig) {
    // Ignore README.md
    eleventyConfig.ignores.add("README.md");


    // Add Passthrough

    eleventyConfig
    .addPassthroughCopy({
        "./public/": "/"
    })
    // TODO: CONFIG ATOM/RSS FEED!!
    //.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl");

    // Run Eleventy when these files change:
    // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

    // Watch CSS files
    eleventyConfig.addWatchTarget("public/**/*.css");
    // Watch images for the image pipeline.
    eleventyConfig.addWatchTarget("public/**/*.{svg,webp,png,jpg,jpeg,gif}");


    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("Junicode.woff2");
};

export const config = {
    dir: {
        input: "pages",          // default: "."
        includes: "../_includes",  // default: "_includes" (`input` relative)
        data: "../_data",          // default: "_data" (`input` relative)
        output: "_site"
    },
};
