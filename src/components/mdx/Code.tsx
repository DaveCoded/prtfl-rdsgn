/* eslint-disable react/jsx-key */
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'

interface CodeProps {
    codeString: string
    language: Language
}

const Code: React.FC<CodeProps> = ({ codeString, language }): JSX.Element => {
    return (
        <Highlight
            {...defaultProps}
            code={codeString}
            language={language}
            theme={theme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}

export default Code
