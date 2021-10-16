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

const isValidCMD = (message, cmdName) => message.content.toLocaleLowerCase().startsWith(PREFIX + cmdName);
const roll = () => Math.floor(Math.random() * 6) + 1 - 1 + 1;

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(isValidCMD(message, 'hello')) {
        message.reply('Hello!');
    };
    if(isValidCMD(message, "rolldice")) {
       message.reply("rolled a " + roll());
    }
});  // Client message event ping replay with pong Test function
   

client.login(process.env.TOKEN);