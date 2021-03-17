const Fs = require('fs');
const path = require('path');

// LÄSA FILER
// (filvägen, encoding "vilken typ av data", sen vad jag vill göra med svaret.)
// Fs.readFile('./mapp/text.txt', 'utf8', (err, data) => {
//   if(err)
//   console.log(err);
//   else
//   console.log(data);
// })


// SKRIVA FILER 
//(filvägen, vad vi vill skriva till filen, vad som ska hända när det är klart.)
// Fs.writeFile('./mapp/text.txt', 'Ny text', (err) => {
//   console.log('Ändrade på texten');
// })


// LÄGGA TILL I EN FIL
//(filväg, vad vi vill lägga till, sen vad vi ska göra när det är färdigt.)
// Fs.appendFile('./mapp/text.txt', ' Det här är en text som vi har lagt till.', (err) => {
//   console.log('Lade till text');
// })


// SKAPA EN NY FIL
//(fiväg finns inte filen så skapar node en ny fil och skriver i den, vad för innehåll filen ska ha, vad jag vill göra när det är klart.)
// Fs.writeFile('./mapp/text3.txt', 'En ny fil', (err) => {
//   console.log('Ändrade på texten');
// })


// DÖPA OM EN FIL 
// (filvägen, filvägen med önskat namn som man vill ändra till, sen vad som händer när det är klart)
// Fs.rename('./mapp/text3.txt', './mapp/text2.txt', (err) => {
//   if(err)
//   console.log(err);
//   else
//   console.log('Bytte namn på filen');
// })

// MAPPAR
//(filväg dit vi vill skata den nya mappen samt den nya mappen, callback vad som ska hända efter det är klart)
// Fs.mkdir('./NyMapp', (err) => {
//   if(err)
//   console.log(err);
//   else
//   console.log('Skapade ny mapp')
// })


// if(!Fs.existsSync('./NyMapp')) {
//   Fs.mkdir('./NyMapp', (err) => {
//     if(err)
//     console.log(err);
//     else
//     console.log('Mappen finns inte.. Skapar den')
//   })
// } else {
//   Fs.rmdir('./NyMapp', (err) => {
//     if(err)
//     console.log(err);
//     else
//     console.log('Mappen finns redan.. Tar bort den');
//   })
// }

// TA BORT FILER

// if(Fs.existsSync('./mapp/text2.txt')) {
//   (tar in filvägen till filen vi vill ta bort, sen callback vad vi vill göra efter.)
//   Fs.unlink('./mapp/text2.txt', (err) => {
//     if(err)
//     console.log(err);
//     else
//     console.log('tar bort filen')
//   })
// }


// Fs.appendFile(path.join(__dirname, 'mapp','text.txt'), ' Nu lägger vi till text igen...', (err) => {
//   if(err)
//     console.log(err);
//   else
//     console.log('lade till text igen');
// })


// LÄSA STORA FILER / STREAM
const readStream = Fs.createReadStream('./mapp/stor.txt', {encoding: 'utf8'});
const writeStream = Fs.createWriteStream('./mapp/stor2.txt')

// readStream.on('data', (buffer) => {
  // console.log('---------------------------------------------------------------------Ny Buffer--------------------------------------------------------------')
  // console.log(buffer);
//   console.log('Streamar')
//   writeStream.write('\n------------------------------------------------------------ NY DATA ------------------------------------------------------------ \n');
//   writeStream.write(buffer);
// })

readStream.pipe(writeStream);