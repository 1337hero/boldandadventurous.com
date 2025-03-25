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

  // Ignore Sass partials
  eleventyConfig.ignores.add("src/assets/styles/_*.scss");

  // Process main Sass file
  eleventyConfig.addPassthroughCopy({
    "src/assets/styles/styles.css": "assets/styles/styles.css"
  });

  // Custom Sass processing
  eleventyConfig.on("beforeBuild", () => {
    const result = sass.compile("src/assets/styles/styles.scss", {
      style: "compressed",
      loadPaths: ["src/assets/styles"]
    });
    
    // Ensure the directory exists
    if (!fs.existsSync("src/assets/styles")) {
      fs.mkdirSync("src/assets/styles", { recursive: true });
    }
    
    // Write the compiled CSS
    fs.writeFileSync("src/assets/styles/styles.css", result.css);
  });

  // Watch Sass files for changes
  eleventyConfig.addWatchTarget("./src/assets/styles/");

  // Copy assets that don't need processing
  eleventyConfig.addPassthroughCopy({"src/assets/img": "assets/img"});
  eleventyConfig.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
  eleventyConfig.addPassthroughCopy({"src/assets/js": "assets/js"});
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
  
  // Create a collection for all posts, sorted by date descending (newest first)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md").sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });
  
  // Create a collection for paginated posts, sorted by date descending
  eleventyConfig.addCollection("paginatedPosts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md").sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });
  
  // Return the configuration object
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "src/_includes",
      layouts: "src/_layouts",
      data: "src/_data",
      pages: "src/pages"
    },
    templateFormats: ["md", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid"
  };
};
