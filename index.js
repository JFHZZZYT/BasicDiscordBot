var commando = require("discord.js-commando");
var yourbot = new commando.Client();

yourbot.login('YOUR_BOT_TOKEN_HERE');

yourbot.registry.registerGroup('other', 'Other');
yourbot.registry.registerCommandsIn(__dirname + "/commands")
yourbot.registry.registerDefaults();
