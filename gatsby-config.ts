import type { GatsbyConfig } from "gatsby";


const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dovah Tech`,
    description:'Sua privacidade em primeiro lugar',
    siteUrl: `https://www.dovahtech.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
     "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/DOVAH-TECH_oficial.png"
    }
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-module-resolver',
    options: {
      root: './src', // <- will be used as a root dir
      aliases: {
        '@components': './components', // <- will become ./src/components
        '@parts':'./parts',
        '@services':'./services',
        '@images':'./images',
        helpers: './helpers', // <- will become ./src/helpers
        static: {
          root: './public', // <- will used as this alias' root dir
          alias: './static' // <- will become ./public/static
           }
        }
    }
  },
  {
    resolve: `gatsby-plugin-typescript`,
    options: {
      isTSX: true, // defaults to false
      jsxPragma: `jsx`, // defaults to "React"
      allExtensions: true, // defaults to false
    },
  },

  // {
  //   resolve: `gatsby-source-supabase`,
  //   options: {
  //     supabaseUrl: "https://xyfqgpewpuooioljnmss.supabase.co",
  //     supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5ZnFncGV3cHVvb2lvbGpubXNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2ODE0NzksImV4cCI6MjA0NDI1NzQ3OX0.LfSXOFRpa-PJw93KwSzaDxLe3iiORKk0vgtAIEvIu5Q-anon-key",
  //     types:[
  //       {
  //        type:"clients",
  //       }
  //     ]
  //     }
  //   }
  ]

      
};

export default config;