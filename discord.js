const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'MTQ1MzkxMTc5ODc1ODUxMDY0NA.GjCylm.-7_llLVu03vPCt1fJXX8I_iavWDbpyDKIyuHdc'; // Ersetze mit deinem Token

client.on('ready', () => {
  console.log('Bot ist online!');
});

client.on('message', (message) => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});

client.login(token);
