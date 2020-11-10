import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Dump from '../components/dump'

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
const IndexPage = ({ data }: IndexProps): React.ReactNode => (
    <Layout>
        <SEO title="Home" />
        <div>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
                <>
                    <Link key={id} to={fields.slug}>
                        <h2>{frontmatter.title}</h2>
                    </Link>
                    <p>{frontmatter.date}</p>
                    <p>{excerpt}</p>
                </>
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
                    date(formatString: "DD/MM/YY")
                }
                fields {
                    slug
                }
            }
        }
    }
`

export default IndexPage
