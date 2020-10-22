import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import * as styles from "./index.module.scss"

interface MDXPost {
    excerpt: string
    frontmatter: {
        title: string
        date: string
    }
}

interface IndexProps {
    data: {
        allMdx: {
            nodes: MDXPost[]
        }
    }
}

const IndexPage = ({ data }: IndexProps): React.ReactNode => (
    <Layout>
        <SEO title="Home" />
        <div className={styles.App}>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
                <>
                    <h1>{frontmatter.title}</h1>
                    <p>{frontmatter.date}</p>
                    <p>{excerpt}</p>
                </>
            ))}
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to Using TypeScript</Link>
        </div>
    </Layout>
)

export const query = graphql`
    query SITE_INDEX_QUERY {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date
                }
            }
        }
    }
`

export default IndexPage
