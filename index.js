const discord = require('discord.js'); // Importing Discord API
const PREFIX = process.env.PREFIX; // Getting Prefix From .env File.
const client = new discord.Client({ // Creating new DisCord Client 
    intents: [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES  // Discord.js v13 Require to list bot intents
    ]
});
const dotenv = require('dotenv'); // Importing Dotenv So we can use .env Files 
dotenv.config();


client.on('ready', () => {
    console.log(`${client.user.tag} Has Logged in`);  // logging to console when Boty has started 
});


client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (message.content.toLocaleLowerCase().startsWith(PREFIX + "Hello")) {
        message.reply("hello");
    };
};  // Client message event ping replay with pong Test function
   

client.login(process.env.TOKEN);