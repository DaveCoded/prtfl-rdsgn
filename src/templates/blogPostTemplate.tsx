import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React, { ReactElement } from "react"
import Layout from "../components/layout"

interface Data {
    data: {
        mdx: {
            frontmatter: {
                title: string
                date: string
            }
            // TODO: type this when you know what it is
            body: any
        }
    }
}

const BlogTemplate = ({ data }: Data): ReactElement => {
    const { frontmatter, body } = data.mdx
    return (
        <Layout>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
    query PostsBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                date(formatString: "YYYY MMMM Do")
            }
        }
    }
`

export default BlogTemplate
