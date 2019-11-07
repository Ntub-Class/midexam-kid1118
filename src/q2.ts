import * as readlineSync from 'readline-sync';
import * as QRCode from 'qrcode';

function makeqr() {
    let a=readlineSync.question('hi:')
    QRCode.toFile('./QRCODE.png','a')
}

makeqr();

