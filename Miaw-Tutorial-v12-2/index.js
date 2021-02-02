const fs = require('fs'); //npm fs packpage versi  "fs": "^0.0.2"
const Discord = require('discord.js'); //"discord.js": "^12.1.1",

const client = new Discord.Client();
client.commands = new Discord.Collection();
const uptimerobot = require("./uptimerobot.js"); //uptime robot

const { prefix, token } = require('./config.json'); //simpan / save token prefix in config.json/ di config.json

let m = require('moment-duration-format'), //npm version "moment-duration-format": "^2.2.2",
    os = require('os'),//npm version "os": "^0.1.1",
    ms = require('ms'),//npm version "ms": "^2.1.2",
    moment = require('moment')//npm version "moment": "^2.24.0",

client.on("ready", () => {
  console.log('Online bot is online / bot telah aktif')
})

//packpage npm usage in terminal npm i <namanpm> or <namenpm>
// "express": "^4.17.1",
//   "discord.js": "^12.1.1",
  //  "moment-duration-format": "^2.2.2",
 // /  "os": "^0.1.1",
 //   "cpu-stat": "^2.0.1",
 //   "ms": "^2.1.2",
 //   "moment": "^2.24.0",
  //  "fs": "^0.0.2"

client.on('message', async message => {
  if (message.author.bot) return;
 // let prefix = 'ts'; // customized. you can change it whatever you want.
  if (!message.content.startsWith(prefix)) return; // use this. so your bot will be only executed with prefix.
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();


  if (message.content === `${prefix}user-info`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}

  if (message.content === `${prefix}server`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
}


	//message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);


   if (msg.startsWith(prefix + 'ping')) { //type prefix ping usage tsping
    message.channel.send('pong.'); // results.
 } // easy way.  

  if (msg.startsWith(prefix + 'hello')) {//type prefix hello usagetshello
    message.channel.send('hewwo'); // results.
  }
});

client.on('message', async message => {
if (message.content.startsWith(`${prefix}dmall`)) {
let msg = message.content.split(" ").slice(1).join(" ");
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:tickred:781575891704217650> You can use this commands!");
message.guild.members.cache.forEach(member => {
member.send(msg)
});
}
});
client.login(token)//token bot don't distribute dangerous bot tokens private okay
