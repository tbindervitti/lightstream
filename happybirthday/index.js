module.exports = () => {
    const minimist = require('minimist');
    const fs = require('fs');

    function printSong(name) {
        const songLyrics = `Happy Birthday to you!\nHappy Birthday to you!\nHappy Birthday dear ${name},\nHappy Birthday to you!`;
        console.log(songLyrics);
    }

    function parseFile(filename) {
        const data = fs.readFileSync(filename, 'utf8');
        console.log(data);
        data.split("\n").forEach(x => {
            if( x && x.length > 0 ) {
               printSong(x);
            }
        });
    }

    const args = minimist(process.argv.slice(2));
    if(args["name"]) {
        printSong(args["name"]);
    } else if(args["file"]) {
        console.log("file passed");
        parseFile(args["file"]);
    } else {
        console.log("Please use happybirthday --name <name> or happybirthday --file <file> to pass a list of names");
    }


}