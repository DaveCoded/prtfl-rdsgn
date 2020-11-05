/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

interface BetterCommentsProps {
    codeString: string
}

const BetterComments: React.FC<BetterCommentsProps> = (): JSX.Element => (
    <pre
        style={{
            backgroundColor: '#011627',
            textAlign: 'left',
            margin: '1rem 0',
            padding: '1.5rem',
            overflowX: 'auto',
            borderRadius: '3px',
            fontFamily: 'Courier New, Courier, monospace',
            fontWeight: 'bold'
        }}
    >
        <p style={{ color: '#FF8C00' }}>
            // todo: replace hardcoded arrays when api is available
        </p>
        <p style={{ color: '#FF2D00' }}>
            // ! Never delete this or our api key will be exposed
        </p>
        <p style={{ color: '#98C379' }}>
            // * Used to convert the weird strings in notActuallyJson.js
        </p>
        <p style={{ color: '#3498DB' }}>
            // ? This works for now but doesn't fit too well with our functional
            paradigm
        </p>
        <p
            style={{
                color: '#474747',
                marginBottom: 0,
                textDecoration: 'line-through'
            }}
        >
            // // Necessary polyfill for intersectionObserver
        </p>
    </pre>
)

export default BetterComments
