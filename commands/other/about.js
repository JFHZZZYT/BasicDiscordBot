var commando = require('discord.js-commando');

class about extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'other',
            memberName: 'about',
            description: 'This is a bot made by YOU!'
        });
    }
async run(message, args){
    message.reply("This bot was made by @YOU made with Visual Studio Code and Node.JS");
}

}
module.exports = about;