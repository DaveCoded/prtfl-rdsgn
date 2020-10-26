/* eslint-disable react/jsx-key */
import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

import { copyToClipboard } from '../../utils/copyToClipboard'
import CopyCodeButton from '../CopyCodeButton'

import styles from './Code.module.scss'

interface CodeProps {
    codeString: string
    language: Language
}

const Code: React.FC<CodeProps> = ({ codeString, language }): JSX.Element => {
    const handleClick = () => {
        copyToClipboard(codeString)
    }

    return (
        <Highlight
            {...defaultProps}
            code={codeString}
            language={language}
            theme={theme}
        >
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre className={styles.MDXCode} style={style}>
                    <CopyCodeButton onClick={handleClick}>Copy</CopyCodeButton>
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
