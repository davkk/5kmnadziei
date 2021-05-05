// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import sponsor from "./sponsor";
import patron from "./patron";

import { richText, img } from "./types";
import {
  signUp,
  hero,
  patronage,
  organizer,
  donateMessage,
  community,
  contactUs,
} from "./fields";
import { homePage, contactPage, goalPage, rulesPage } from "./pages";
import { global } from "./single";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    sponsor,
    patron,
    // types
    richText,
    img,
    // fields
    signUp,
    hero,
    patronage,
    community,
    contactUs,
    organizer,
    donateMessage,
    // pages
    homePage,
    contactPage,
    //single
    global,
  ]),
});
