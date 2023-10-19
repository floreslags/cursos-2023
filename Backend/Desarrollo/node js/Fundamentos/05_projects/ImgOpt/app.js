import fse from 'fs-extra';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';
import imageminGifsicle from 'imagemin-gifsicle';
import sharp from 'sharp';

// Variables globales

let inputFolder = 'src';
let outputFolder = 'opt';
let targetWidth = 1920;

const processImg = async ()=>{
    try {
        const files = await fse.readdir(inputFolder);

        for (const file of files) {
            let inputPath = `${inputFolder}/${file}`;
            let outputPath = `${outputFolder}/${file}`;

            await sharp(inputPath).resize(targetWidth).toFile(outputPath);

            await imagemin([outputPath],{
                destination:outputFolder,
                plugins:[
                    imageminJpegtran({quality:80}), // Comprime la IMG formato JPG con calidad de 80%
                    imageminPngquant(), // Comprime IMG formato PNG
                    imageminSvgo(), // Comprime IMG formato SVG
                    imageminWebp({quality:80}), // Comprime IMG formato WEBP calidad 80%
                    imageminGifsicle() // Comprime IMG formato GIF
                ]
            });

            console.log('The images optimization process has finished successfully');
            
        }
        
    } catch (err) {
        console.error(err);
        
    }
}

processImg();