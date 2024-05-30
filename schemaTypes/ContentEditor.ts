import { MdImage } from 'react-icons/md';

export default {
    title: 'Content editor',
    type: 'object',
    name: 'contentEditor',
    options: { collapsible: false, collapsed: false },
    fields: [
        {
            title: 'Content editor',
            name: 'content',
            description: 'To make a single line-break within a paragraph, press SHIFT + ENTER',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        // { title: 'Quote', value: 'blockquote' },
                        // { title: 'H1', value: 'h1' },
                        // { title: 'H2', value: 'h2' },
                        // { title: 'H3', value: 'h3' },
                    ],
                    lists: [],
                    marks: {
                        decorators: [
                            {
                                title: 'Italic',
                                value: 'em'
                            },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'string'
                                    }
                                ]
                            },

                        ]
                    },
                },
                {
                    type: 'image',
                    icon: MdImage
                },
                // {
                //     name: 'embedBlock',
                //     title: 'Embed code',
                //     type: 'object',
                //     icon: MdPictureInPicture,
                //     fields: [
                //         {
                //             name: 'url',
                //             description: 'Link to Youtube or Vimeo video or soundcloud track',
                //             type: 'url',
                //             title: 'URL'
                //         },
                //         {
                //             title: 'Caption',
                //             name: 'caption',
                //             type: 'text',
                //         },
                //     ],
                // }
            ]
        }
    ]
}