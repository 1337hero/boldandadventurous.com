const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const path = require("path");
const sass = require("sass");
const fs = require("fs");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
  eleventyConfig.ignores.add("z_archive/**");

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  
  // Add buildTime shortcode
  eleventyConfig.addShortcode("buildTime", function() {
    return new Date().toISOString();
  });
  
  // HTML Minification for production
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Only minify HTML
    if(outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
      });
      return minified;
    }
    return content;
  });

  // Copy assets that don't need processing
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy("assets/js");
  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("CNAME");

  // Date formatting filter (similar to Jekyll's date filter)
  eleventyConfig.addFilter("dateFormat", function(date, format) {
    return DateTime.fromJSDate(date).toFormat(format || "LLLL d, yyyy");
  });
  
  // Get the first `n` elements of a collection
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });
  
  // Add permalink filter for Jekyll-style permalinks
  eleventyConfig.addFilter("permalinkPath", function(fileSlug) {
    // Use the same permalink pattern as in Jekyll
    return `/${fileSlug}/`;
  });
  
  // Set default permalink pattern
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: data => {
      // Use permalink from frontmatter if it exists
      if (data.permalink) {
        return data.permalink;
      }
      
      // Otherwise, use the Jekyll-style permalink
      return `/${data.page.fileSlug}/`;
    }
  });
  
  // Create a collection for all posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md");
  });
  
  // Create a collection for paginated posts
  eleventyConfig.addCollection("paginatedPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md");
  });
  
  // Return the configuration object
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid"
  };
};
