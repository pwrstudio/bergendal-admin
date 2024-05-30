import { MdTextFields } from "react-icons/md"
import { blocksToText, truncateString } from "./utils"

export default {
    title: "CV & Contact",
    name: "cvAndContact",
    type: "document",
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: 'CV',
            name: 'cv',
            type: 'array',
            of: [
                {
                    title: 'CV field',
                    type: 'object',
                    name: 'field',
                    icon: MdTextFields,
                    fields: [
                        {
                            title: 'title',
                            name: 'title',
                            type: 'string',
                        },
                        {
                            title: "Content",
                            name: "content",
                            type: "contentEditor",
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            content: 'content'
                        },
                        prepare(selection) {
                            const { title, content } = selection
                            const truncatedContent = content?.content ? truncateString(blocksToText(content.content), 50) : ""
                            return {
                                title: `(${title.toUpperCase()}) ${truncatedContent}`
                            }
                        }
                    }
                },
            ],
        },
        {
            title: "Full CV (pdf)",
            name: "fullCV",
            type: "file",
            options: {
                accept: ".pdf"
            }
        },
    ],
}