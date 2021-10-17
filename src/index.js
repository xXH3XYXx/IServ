const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

client.on("ready", () => {
    console.log("bot is ready");
});

client.on("messageCreate", (message) => {
    console.log("message sent");
});


client.login(process.env.TOKEN);
