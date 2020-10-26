/**
 * Hook that queries for site metaData
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'

export interface Metadata {
    title: string
    description: string
    author: string
}

export const useSiteMetadata = (): Metadata => {
    const { site } = useStaticQuery(
        graphql`
            query SITE_METADATA_QUERY {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    )
    return site.siteMetadata
}
