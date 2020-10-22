/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value
        })
    }
}
