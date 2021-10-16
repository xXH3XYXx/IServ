const discord = require('discord.js');
const client = new discord.Client({
    intents: [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
const dotenv = require('dotenv');
dotenv.config();


client.on('ready', () => {
    console.log(`${client.user.tag} Has Logged in`);
});


client.on('messageCreate', (message) => {
   if (message.content === 'ping') {
       message.reply({
           content: 'pong!!',
       });
   }
} )

client.login(process.env.TOKEN);