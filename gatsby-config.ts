import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Galactic Matket Cats`,
        siteUrl: `https://www.gmcats.xyz/`,
        description: `GALACTIC MARKET CATS is more than just a pfp collection. It is a character
        for the free universe, the world, the story we
        build together.`,
        twitterUsername: '@GMCatsNFT',
        image: './src/images/icon.webp',
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'G-KHV9YJ3MPC',
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Galactic Matket Cats`,
                short_name: `Galactic Matket Cats`,
                start_url: `https://www.gmcats.xyz/`,
                background_color: `#0DB7E8`,
                theme_color: `#FFB774`,
                display: `standalone`,
                icon: 'src/images/icon.webp',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
};

export default config;
