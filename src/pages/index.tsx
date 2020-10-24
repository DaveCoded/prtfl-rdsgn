import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Dump from "../components/dump"

import * as styles from "./index.module.scss"

interface MDXPost {
    id: string
    excerpt: string
    frontmatter: {
        title: string
        date: string
    }
    fields: {
        slug: string
    }
}

interface IndexProps {
    data: {
        allMdx: {
            nodes: MDXPost[]
        }
    }
}

/**
 ** Gatsby graphql runs the query (SITE_INDEX_QUERY) at runtime and gives
 ** us the results as props to your component via the data prop
 */
const IndexPage = ({ data }: IndexProps): JSX.Element => (
    <Layout>
        <SEO title="Home" />
        <div className={styles.App}>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
                <Link key={id} to={fields.slug}>
                    <h1>{frontmatter.title}</h1>
                    <p>{frontmatter.date}</p>
                    <p>{excerpt}</p>
                </Link>
            ))}
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to Using TypeScript</Link>
            <Dump data={data} />
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
                fields {
                    slug
                }
            }
        }
    }
`

export default IndexPage
