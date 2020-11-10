import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

interface MDXPost {
    id: string
    excerpt: string
    frontmatter: {
        title: string
        description: string
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
            {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                <>
                    {/* // todo: turn this into a styled component - no inline styles unless necessary */}
                    <Link
                        key={id}
                        to={fields.slug}
                        style={{ textDecoration: 'none' }}
                    >
                        <h2
                            style={{
                                fontWeight: 600,
                                fontSize: '2rem',
                                color: '#a51cad',
                                letterSpacing: '1.4px',
                                marginBottom: '0.15em'
                            }}
                        >
                            {frontmatter.title}
                        </h2>
                    </Link>
                    <p>{frontmatter.description}</p>
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
                frontmatter {
                    title
                    description
                }
                fields {
                    slug
                }
            }
        }
    }
`

export default IndexPage
