export default {
    title: "Main Page Top",
    name: "mainPageTop",
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
        }
    ]
}