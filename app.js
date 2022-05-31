const sharp = require("sharp");

const mappings = [
    {name: "icon.png", size: 57},
    {name: "icon@2x.png", size: 114},
    {name: "icon-20.png", size: 20},
    {name: "icon-20@2x.png", size: 40},
    {name: "icon-20@3x.png", size: 60},
    {name: "icon-24@2x.png", size: 48},
    {name: "icon-27.5@2x.png", size: 55},
    {name: "icon-29.png", size: 29},
    {name: "icon-29@2x.png", size: 58},
    {name: "icon-29@3x.png", size: 87},
    {name: "icon-40.png", size: 40},
    {name: "icon-40@2x.png", size: 80},
    {name: "icon-40@3x.png", size: 120},
    {name: "icon-60.png", size: 60},
    {name: "icon-60@2x.png", size: 120},
    {name: "icon-60@3x.png", size: 180},
    {name: "icon-72.png", size: 72},
    {name: "icon-72@2x.png", size: 144},
    {name: "icon-76.png", size: 76},
    {name: "icon-76@2x.png", size: 152},
    {name: "icon-83.5@2x.png", size: 167},
    {name: "icon-86@2x.png", size: 172},
    {name: "icon-98@2x.png", size: 196},
    {name: "icon-108@2x.png", size: 216},
    {name: "icon-1024.png", size: 1024},
]

const run = async () => {
    const input = "icon.png";
    const output = './icon';

    for (let i = 0; i < mappings.length; i++) {
        const {size, name} = mappings[i];
        try {
            await sharp(input).resize({height: size, width: size}).toFile(`${output}/${name}`);
        } catch(e) {
            console.log("error", e);
        }
    }
}

(async () => {
    await run();
    console.log("done");
})();



