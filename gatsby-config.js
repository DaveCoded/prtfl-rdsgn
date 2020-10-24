const siteMetadata = {
    title: `Dave's web presence`,
    description: `This is the place the things from Dave's head spill out into. Tread carefully.`,
    author: `Dave Bernhard`
}

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        // TODO: Fix this so that you can source images and post with gatsby-source-filesystem
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `images`,
        //         path: `${__dirname}/src/images`
        //     }
        // },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/posts`,
                name: `posts`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-ts`,
        `gatsby-plugin-scss-typescript`
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
}
