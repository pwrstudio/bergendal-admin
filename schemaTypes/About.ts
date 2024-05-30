export default {
    title: "About",
    name: "about",
    type: "document",
    fields: [
        {
            title: "Featured Image",
            name: "featuredImage",
            type: "image",
        },
        {
            title: "Start year",
            name: "startYear",
            type: "number",
        },
        {
            title: "End year",
            description: "If left empty current year will be used",
            name: "endYear",
            type: "number",
        },
        {
            name: 'content',
            title: 'Content',
            type: 'contentEditor',
        },
    ]
}