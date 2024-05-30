import { MdTextFields } from "react-icons/md"
import { blocksToText, truncateString } from "./utils"

export default {
    title: "Contributions to Research",
    name: "contributionsToResearch",
    type: "document",
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'List',
            name: 'list',
            type: 'array',
            of: [
                {
                    title: 'field',
                    type: 'object',
                    name: 'field',
                    icon: MdTextFields,
                    fields: [
                        {
                            title: 'Year',
                            name: 'year',
                            type: 'number',
                        },
                        {
                            title: "Content",
                            name: "content",
                            type: "contentEditor",
                        },
                        {
                            title: "External link",
                            name: "externalLink",
                            type: "url",
                        }
                    ],
                    preview: {
                        select: {
                            year: 'year',
                            content: 'content'
                        },
                        prepare(selection) {
                            const { year, content } = selection
                            const truncatedContent = content?.content ? truncateString(blocksToText(content.content), 50) : ""
                            return {
                                title: `(${year}) ${truncatedContent}`
                            }
                        }
                    }
                },
            ],
        },
    ]
}