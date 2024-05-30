import {
    MdFolder,
    MdHome,
    MdMail,
    MdEditDocument,
    MdSchool,
    MdImage,
    MdStar
} from "react-icons/md"

export default (S: any) =>
    S.list()
        .title("bergendal.dk")
        .items([
            S.listItem()
                .title("Main Page Top")
                .icon(MdStar)
                .child(
                    S.editor()
                        .id("mainPageTop")
                        .title("Main Page Top")
                        .schemaType("mainPageTop")
                        .documentId("mainPageTop")
                ),
            S.divider(),
            S.listItem()
                .title("Works")
                .icon(MdFolder)
                .child(
                    S.documentList()
                        .title('Works')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "work" })
                ),
            S.listItem()
                .title("Documentation")
                .icon(MdImage)
                .child(
                    S.documentList()
                        .title('Documentation')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "documentation" })
                ),
            S.divider(),
            S.listItem()
                .title("About")
                .icon(MdHome)
                .child(
                    S.editor()
                        .id("about")
                        .title("About")
                        .schemaType("about")
                        .documentId("about")
                ),
            S.listItem()
                .title("Text and Archive")
                .icon(MdEditDocument)
                .child(
                    S.editor()
                        .id("textAndArchive")
                        .title("Text and Archive")
                        .schemaType("textAndArchive")
                        .documentId("textAndArchive")
                ),
            S.listItem()
                .title("Contributions to Research")
                .icon(MdSchool)
                .child(
                    S.editor()
                        .id("contributionsToResearch")
                        .title("Contributions to Research")
                        .schemaType("contributionsToResearch")
                        .documentId("contributionsToResearch")
                ),
            S.listItem()
                .title("CV & Contact")
                .icon(MdMail)
                .child(
                    S.editor()
                        .id("cvAndContact")
                        .title("CV & Contact")
                        .schemaType("cvAndContact")
                        .documentId("cvAndContact")
                ),
        ])

