import React from 'react'

import styles from './CopyCodeButton.module.scss'

interface CopyButtonProps {
    onClick: () => void
    children: string
}

const CopyCodeButton = ({
    onClick,
    children
}: CopyButtonProps): JSX.Element => (
    <button className={styles.CopyCodeButton} onClick={onClick}>
        {children}
    </button>
)

export default CopyCodeButton
