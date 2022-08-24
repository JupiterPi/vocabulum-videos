import {Vocabulary} from "./db_service";

const bulkRendering = require("./bulk_rendering");

export const render = async () => {
    const db = require("./db_service");
    await db.connectToDatabase();

    /* console.log("bulk-rendering portion 1a");
    await bulkRendering.renderPortion("1a"); */

    console.log("rendering one vocabulary");
    const vocabulary = await db.collections.wordbaseCollection.findOne({base_form: "silentium"}) as Vocabulary;
    await bulkRendering.renderVocabulary(vocabulary);
};

render();