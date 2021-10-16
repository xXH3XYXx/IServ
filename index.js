const discord = require('discord.js');  // Importing Discord API

  // Getting Prefix 
const client = new discord.Client({ // Creating new DisCord Client 
    intents: [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES  // Discord.js v13 Require to list bot intents
    ]
});
const dotenv = require('dotenv'); // Importing Dotenv So we can use .env Files 
dotenv.config();
const PREFIX = process.env.PREFIX; 



client.on('ready', () => {
    console.log(`${client.user.tag} Has Logged in`);  // logging to console when Boty has started 
});


client.on('messageCreate', (message) => {
    if(!message.content.startsWith(PREFIX)) return;
    if (message.content.startsWith(`${PREFIX}ping`)) {
        message.reply('hello').catch(err => {
            throw err
        }).catch(err => console.log(err));
    };
});  // Client message event ping replay with pong Test function
   

client.login(process.env.TOKEN);