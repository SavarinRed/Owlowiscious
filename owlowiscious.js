const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const fs = require("fs")

client.login(config.token);

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {

	if (!message.content.startsWith(config.prefix)) return;
	if (message.author.bot) return;

	if(message.author.id == config.ownerID) console.log('Acceso de creador');

    if (message.content.startsWith(config.prefix + "ping"))
        message.channel.sendMessage("pong!");
   	if (message.content.startsWith(config.prefix + "foo"))
   		message.channel.sendMessage("bar!");
    if (message.content.startsWith(config.prefix + "Quiza"))
    	message.channel.sendMessage("Maybe!");
    if(message.content.startsWith(config.prefix + "prefix")){
    	
		let args = message.content.split(" ").slice(1);
		config.prefix = args[0];
		fs.writeFile('./config.json', JSON.stringify(config), (err) => {if(err) console.error(err)});
		message.channel.sendMessage("Prefijo cambiado a \""+config.prefix+"\"");
	}
});