import ColorThief from 'color-thief-browser';

const checkIconBorderTransparency = image => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const sizeWidth = 512;
    const sizeHeight = 512;

    const top = ctx.getImageData(0, 0, sizeWidth, 1);
    const left = ctx.getImageData(0, 0, 1, sizeHeight);
    const right = ctx.getImageData(sizeWidth - 1, 0, 1, sizeHeight);
    const bottom = ctx.getImageData(0, sizeHeight - 1, sizeWidth, 1);

    const res = [top, left, right, bottom].some(containsFullTransparentPixels);
    return res;
};


const containsFullTransparentPixels = ({ data }) => {
    for (let i = 3; i < data.length; i += 4) {
        if (data[i] === 0) return true;
    }
    return false;
}

export const createImage = ({ canvas, url, firstLetter, shape }) => new Promise((resolve, reject) => {
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.onload = () => {

        if (shape !== 'square' && shape !== 'round' && shape !== 'rounded') {
            const iconBorderTransparent = checkIconBorderTransparency(image);
            console.log('asdfasdfasdf');
            shape = iconBorderTransparent ? 'square' : 'rounded';
        }
        const colorThief = new ColorThief();
        const pallete = colorThief.getPalette(image, 3);
        const dominantColor = pallete[0];

        const radius = 25;

        // ctx.shadowColor = "#000000";
        // ctx.shadowBlur = 10;
        // ctx.shadowOffsetX = 0;
        // ctx.shadowOffsetY = 0;
        {
            const width = 256
            const height = 256
            const x = 0;
            const y = (canvas.height - height) / 2;
            const step = 15;

            const paint = canvas.cloneNode(true);
            const paintCtx = paint.getContext('2d');

            {
                const x = 80;
                const y = 40;
                const width = canvas.width - 80;
                const height = canvas.height - 80;

                paintCtx.drawImage(image, 0, 0, image.width, image.height,
                    x, y, width, height);
            }

            paintCtx.save();
            paintCtx.globalAlpha = 0.2;

            // ring 1
            paintCtx.fillStyle = '#000000';
            roundRect(paintCtx, x, y + step, width, height, radius, true, false);

            // ring 2
            paintCtx.fillStyle = '#000000';
            roundRect(paintCtx, x + step, y, width, height + step, radius, true, false);

            // ring 3
            paintCtx.fillStyle = '#000000';
            roundRect(paintCtx, x + step, y, width, height + step * 3, radius, true, false);

            // ring 4
            paintCtx.fillStyle = '#000000';
            roundRect(paintCtx, x + step * 2, y - step, width, height + step * 3, radius, true, false);

            paintCtx.globalAlpha = 1;
            paintCtx.restore();


            {
                const x = 80;
                const y = 40;
                const width = canvas.width - 80;
                const height = canvas.height - 80;

                ctx.save();
                if (shape === 'rounded') {
                    roundedImage(ctx, x, y, width, height, width / 2);
                } else if (shape === 'round') {
                    ctx.arc(x + width / 2, y + height / 2, width / 2, 0, Math.PI * 2, true);
                } else if (shape === 'square') {
                    roundedImage(ctx, x, y, width, height, radius);
                }
                ctx.clip();
                ctx.drawImage(image, 0, 0, image.width, image.height,
                    x, y, width, height);
            }

            ctx.globalCompositeOperation = "source-in";
            // draw the user paintings
            ctx.drawImage(paint, 0, 0);
            // always reset the default gCO
            ctx.globalCompositeOperation = "source-over";

            ctx.restore();

            ctx.fillStyle = `rgb(${dominantColor.join(',')})`;
            roundRect(ctx, x, (512 - 256) / 2, 256, 256, radius, true, false);

            ctx.font = "206px 'Segoe UI'";
            const sum = dominantColor.reduce((a,b) => a + b, 0);
            ctx.fillStyle = sum > 600 ? '#000000' : '#ffffff';
            ctx.textAlign = "center";
            ctx.fillText(firstLetter.toUpperCase(), x + width / 2, 512 / 2 + 256 / 3.5);
        }

        resolve(canvas);
    }
    image.crossOrigin = 'anonymous';
    image.src = url;
});

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
        var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.stroke();
    }

}

function roundedImage(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}