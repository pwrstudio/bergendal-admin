import { MdFolder } from "react-icons/md"

export default {
    title: "Work",
    name: "work",
    icon: MdFolder,
    type: "document",
    fields: [
        {
            title: "Titel",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: "Start year",
            name: "startYear",
            type: "number",
        },
        {
            title: "End year",
            name: "endYear",
            type: "number",
        },
        {
            title: "Participants",
            name: "participants",
            type: "string"
        },
        {
            name: 'content',
            title: 'Content',
            type: 'contentEditor',
        },
        {
            name: 'documentation',
            title: 'Documentation',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'documentation' }] }]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        }
    ]
}