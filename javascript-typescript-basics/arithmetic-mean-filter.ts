/*------------------------------------------- IMPORTS --------------------------------------------*/
import Jimp from 'jimp';
import path from 'path';
import {path as rootPath} from 'app-root-path';

/*---------------------------------------- READ IN IMAGE -----------------------------------------*/
/**
 * Get the arithmetic mean of the pixels in a 7x7 square centred on the given pixel.
 */
const findAverage = (
    {image, width, height}: {image: Jimp; width: number; height: number},
    curW: number,
    curH: number
) => {
    let total = 0;
    let count = 0;

    for (let avIdxW = -3; avIdxW < 3; avIdxW++) {
        const curLoopPosW = curW + avIdxW;
        if (curLoopPosW < 0) continue;
        if (curLoopPosW > width - 1) continue;

        for (let avIdxH = -3; avIdxH < 3; avIdxH++) {
            const curLoopPosH = curH + avIdxH;
            if (curLoopPosH < 0) continue;
            if (curLoopPosH > height - 1) continue;

            const pixelColour = image.getPixelColor(curLoopPosW, curLoopPosH);
            total += pixelColour;

            count++;
        }
    }

    const average = Math.round(total / count);
    // console.log(`average:`, average);

    return average;
};

/**
 * Main function
 */
const main = async () => {
    // Read in image
    const image = await Jimp.read(path.join(rootPath, './data/beach.bmp'));
    console.log(`image:`, image);

    // Get width and height
    const width = image.getWidth();
    const height = image.getHeight();
    console.log(`width:`, width, `height:`, height);

    // Bundle common data for average calculation
    const img = {image, width, height};

    const averagedImg = [];

    // Loop through pixels
    // Results in array of averaged pixel value rows like:
    // [
    //  [1, 10, 44, 12, 634, 38281, ...],
    //  [22, 11, 65, 24, 238, 18237, ...],
    //  ...
    // ]
    // Length and width should match length and width of image.
    for (let wIdx = 0; wIdx < width; wIdx++) {
        averagedImg.push([]);

        for (let hIdx = 0; hIdx < height; hIdx++) {
            averagedImg[wIdx].push(findAverage(img, wIdx, hIdx));
        }
    }

    console.log(`averagedImg:`, averagedImg);

    // Write to BeachgreenMA.dat here.
};

main();

// Mechanism to read in an image

// Convert image into array of arrays, containing numbers, representating each pixel

// Loop through outer arrays, starting at pixel 0, ending at pixel len - 1:
// Loop through inner arrays, starting at pixel 0, ending at pixel len - 1:
// For each pixel in this loop:
// Add up (pixelXPos - 3, pixelYPos - 3) -> (pixelXPos + 3 , pixelYPos + 3)
// For each pixel, if it's outside the bounds, don't include it
// Divide result by number of pixels (49)

// Recode results into bmp file

// Write to BeachgreenMA.dat
