import React from 'react'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import Header from './header'
import './layout.css'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { title } = useSiteMetadata()

    return (
        <>
            <Header siteTitle={title || `Title`} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`
                }}
            >
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: `2rem`
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </div>
        </>
    )
}

export default Layout
