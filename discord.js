const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'DEIN_TOKEN_HIER'; // Ersetze mit deinem Token

client.on('ready', () => {
  console.log('Bot ist online!');
});

client.on('message', (message) => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login(token);
