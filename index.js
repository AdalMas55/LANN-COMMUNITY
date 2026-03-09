const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === 'pzda') {
    message.reply('btisha');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'psda') {
    message.reply('btisha');
  }
});

client.on('messageCreate', message => {
  if (message.content === 'sda') {
    message.reply('btisha');
  }
});

client.login(process.env.MTQ4MDYyMzc4MzYyNTc1MjcwOA.GkzDXL.qvR1WCNNRuKmLRT50mTrrBrwMeCzLorY-Ki4_Q);