const discord = require('discord.js'); // Importing Discord API
const PREFIX = require('discord-prefix'); // Getting Prefix 
const client = new discord.Client({ // Creating new DisCord Client 
    intents: [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES  // Discord.js v13 Require to list bot intents
    ]
});
const dotenv = require('dotenv'); // Importing Dotenv So we can use .env Files
const { prefix } = require('npm');
let defaultPrefix = '!'; 
dotenv.config();


client.on('ready', () => {
    console.log(`${client.user.tag} Has Logged in`);  // logging to console when Boty has started 
});


client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    let guildPrefix = prefix.guildPrefix(message.guild.id);
    if (!guildPrefix) guildPrefix = defaultPrefix;
    let args = message.content.slice(guildPrefix.length).split(' ');
    if (!message.content.startsWith(guildPrefix))return;
    if (args[0].toLocaleLowerCase() === 'hello') {
        return message.reply('Hello!');
    };
});  // Client message event ping replay with pong Test function
   

client.login(process.env.TOKEN);