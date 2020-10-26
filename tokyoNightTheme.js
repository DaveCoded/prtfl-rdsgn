const theme = {
    plain: {
        color: '#a9b1d6',
        backgroundColor: '#24283b'
    },
    styles: [
        {
            types: ['comment'],
            style: {
                fontStyle: 'italic',
                color: '#565f89'
            }
        },
        {
            types: ['keyword', 'operator'],
            style: {
                color: 'rgb(137, 221, 255)'
            }
        },
        {
            types: ['punctuation'],
            style: {
                color: 'rgb(86, 95, 137)'
            }
        },
        {
            types: ['builtin', 'number'],
            style: {
                color: 'rgb(255, 158, 100)'
            }
        },
        {
            types: ['string', 'symbol', 'constant', 'attr-name'],
            style: {
                color: 'rgb(158, 206, 106)'
            }
        },
        {
            types: ['function'],
            style: {
                color: 'rgb(42, 195, 222)'
            }
        },
        {
            types: ['tag'],
            style: {
                color: 'rgb(247, 118, 142)'
            }
        },
        {
            types: ['variable'],
            style: {
                color: 'rgb(224, 175, 104)'
            }
        },
        {
            types: ['parameter'],
            style: {
                color: '#e0af68'
            }
        },
        {
            types: ['char'],
            style: {
                color: 'rgb(187, 154, 247)'
            }
        },
        {
            types: ['property'],
            style: {
                color: 'rgb(154, 189, 245)'
            }
        },
        {
            types: ['inserted'],
            style: {
                color: 'rgb(68, 157, 171)'
            }
        },
        {
            types: ['deleted'],
            style: {
                color: 'rgb(145, 76, 84)'
            }
        },
        {
            types: ['changed'],
            style: {
                color: 'rgb(97, 131, 187)'
            }
        }
    ]
}

module.exports = theme
