import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Rohit",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    baseUrl: "dat-rohit.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "JetBrains Mono",
        body: "JetBrains Mono",
        code: "JetBrains Mono",
      },
      colors: {
        // lightMode: {
        //   light: "#dce0e8",     // background
        //   lightgray: "#ccd0da", // dashed lines
        //   gray: "#eff1f5",
        //   darkgray: "#7c7f93",  // regular text
        //   dark: "#4c4f69",      // bold text
        //   secondary: "#f38ba8", // hyperlinks and site header
        //   tertiary: "#9ca0b0",  // cursor highlight
        //   highlight: "rgba(0, 0, 0, 0)",
        // },
        darkMode: { // deep ocean theme
          light: "#0f1419",      // dark navy background
          lightgray: "#1f2937",  // slightly lighter navy for borders
          gray: "#374151",       // mid-tone navy for subtle elements
          darkgray: "#e6fffa",   // light cyan for main text
          dark: "#ffffff",       // pure white for emphasis text
          secondary: "#64ffda",  // cyan accents for links
          tertiary: "#4fd1c7",   // muted cyan for hover states
          highlight: "rgba(100, 255, 218, 0.1)", // subtle cyan highlight
        },
        lightMode: { // rosepine dawn 
          light: "#faf4ed",
          lightgray: "#cecacd",
          gray: "#575279",
          darkgray: "#575279",
          dark: "#797593",
          secondary: "#b4637a",
          tertiary: "#dfdad9",
          highlight: "rgba(0, 0, 0, 0)",
        },
        // darkMode: { // catpuccin mocha
        //   light: "black",
        //   lightgray: "grey",
        //   gray: "white",
        //   darkgray: "white",
        //   dark: "white",
        //   secondary: "grey",
        //   tertiary: "grey",
        //   highlight: "rgba(0, 0, 0, 0)",
        // },
        // lightMode: { // rosepine dawn 
        //   light: "white",
        //   lightgray: "grey",
        //   gray: "black",
        //   darkgray: "black",
        //   dark: "black",
        //   secondary: "grey",
        //   tertiary: "grey",
        //   highlight: "rgba(0, 0, 0, 0)",
        // },




      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      // Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }), // Temporarily disabled
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      // Plugin.Latex({ renderEngine: "katex" }), // Temporarily disabled due to Node.js compatibility
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        rssFullHtml: true,
        includeEmptyFiles: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
