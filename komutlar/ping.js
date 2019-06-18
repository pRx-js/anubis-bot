const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Buyur kardeşim : **' + client.ping + '** gayet hızlı ttnet kullanıyorsan cin çarpsın');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Pingi gösterir.',
  usage: 'ping'
};
