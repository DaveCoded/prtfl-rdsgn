/* eslint-disable react/display-name */
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import Code from './src/components/mdx/Code'
import BetterComments from './src/posts/better-comments/BetterCommentsExample'

const components = {
    h2: ({ children }) => <h2 style={{ color: '#a51cad' }}>{children}</h2>,
    'p.inlineCode': props => (
        <code style={{ backgroundColor: 'yellow' }} {...props} />
    ),
    pre: ({ children: { props } }) => {
        if (props.mdxType === 'code') {
            return (
                <Code
                    codeString={props.children.trim()}
                    language={
                        props.className &&
                        props.className.replace('language-', '')
                    }
                    {...props}
                />
            )
        }
    },
    BetterComments
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
)
