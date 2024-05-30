export function blocksToText(blocks: any, opts = {}) {
    const options = Object.assign({}, { nonTextBehavior: 'remove' }, opts)
    return blocks
        .map(block => {
            if (block._type !== 'block' || !block.children) {
                return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
            }

            return block.children.map(child => child.text).join('')
        })
        .join('\n\n')
}

export function truncateString(str: string, num: number): string {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
}