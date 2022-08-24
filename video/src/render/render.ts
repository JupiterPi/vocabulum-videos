// See https://www.remotion.dev/docs/ssr

import path from "path";
import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia } from "@remotion/renderer";

const render = async () => {
    const compositionId = "vertical";
    const inputProps = {
        foo: "bar",
    };

    const entry = "src/index.tsx";
    console.log("Creating a Webpack bundle of the video");
    const bundleLocation = await bundle(path.resolve(entry), () => undefined);
    const comps = await getCompositions(bundleLocation, { inputProps });
    const composition = comps.find((c) => c.id === compositionId);

    if (!composition) {
        throw new Error(`No composition with the ID ${compositionId} found. Review "${entry}" for the correct ID.`);
    }

    const outputLocation = `render/${compositionId}.mp4`;
    console.log("Attempting to render:", outputLocation);
    await renderMedia({
        composition,
        serveUrl: bundleLocation,
        codec: "h264",
        outputLocation,
        inputProps,
    });
    console.log("Render done!");
};

render();