import S from "@sanity/desk-tool/structure-builder";

import {
  FaPhoneAlt,
  FaEdit,
  FaHome,
  FaGlobeEurope,
  FaFlag,
  FaDatabase,
  FaGavel,
} from "react-icons/fa";

const FILTER_OUT_LIST = [
  "global",
  "contactPage",
  "homePage",
  "goalPage",
  "rulesPage",
];

const filterOutItems = (filterList = []) =>
  S.documentTypeListItems().filter(
    (listItem) =>
      ![...FILTER_OUT_LIST, ...filterList].includes(listItem.getId())
  );

export default () =>
  S.list()
    .id("root")
    .title("DESK")
    .items([
      S.listItem()
        .id("pages")
        .title("PAGES")
        .icon(FaEdit)
        .child(
          S.list()
            .id("pagesList")
            .title("PAGES")
            .items([
              S.listItem()
                .title("HOMEPAGE")
                .icon(FaHome)
                .id("homePage")
                .child(
                  S.editor().schemaType("homePage").documentId("homePage")
                ),
              S.listItem()
                .title("GOAL")
                .icon(FaFlag)
                .id("goalPage")
                .child(
                  S.editor().schemaType("goalPage").documentId("goalPage")
                ),
              S.listItem()
                .title("CONTACT")
                .icon(FaPhoneAlt)
                .id("contactPage")
                .child(
                  S.editor().schemaType("contactPage").documentId("contactPage")
                ),
              S.listItem()
                .title("RULES")
                .icon(FaGavel)
                .id("rulesPage")
                .child(
                  S.editor().schemaType("rulesPage").documentId("rulesPage")
                ),
            ])
        ),
      S.listItem()
        .title("GLOBAL")
        .icon(FaGlobeEurope)
        .id("global")
        .child(S.editor().schemaType("global").documentId("global")),
      S.divider(),
      S.listItem()
        .id("database")
        .title("DATABASE")
        .icon(FaDatabase)
        .child(
          S.list()
            .title("DATABASE")
            .items([...filterOutItems()])
        ),
    ]);
