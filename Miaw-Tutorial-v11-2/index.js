const Discord = require('discord.js');

const  { token, prefix } = require("./config.js");
const uptimerobot = require("./uptimerobot.js");
//nex to go to website https://hetrixtools.com/uptime-monitor/
const client = new Discord.Client();

client.on('ready', () => {
console.log('I am ready to uset');
});



client.on('message', async message => {
 if (message.content ==="hi") {
message.channel.send('hello');
 }
});

client.on('message', async message => {
 if (message.content ==="info") { //info create ad bot
message.channel.send('``saturday, october 12, 2019``');
 }
});

client.login(token); //the bot token is switched in config.json
