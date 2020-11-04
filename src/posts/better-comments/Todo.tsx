import React from 'react'
import { Pre } from '../../components/mdx/Code'

interface TodoProps {
    codeString: string
}

const Todo: React.FC<TodoProps> = ({ codeString }): JSX.Element => {
    return (
        <Pre style={{ backgroundColor: '#011627' }}>
            <code style={{ color: '#FF8C00' }}>{codeString}</code>
        </Pre>
    )
}

export default Todo
