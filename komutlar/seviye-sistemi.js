const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
 message.channel.send({embed: {
      color: 0xD97634,
      description: "**Devre dışı bırakıldı .....**"
    }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'seviye-sistemi',
  description: 'seviye-sistemi kullanım',
  usage: 'seviye-sistemi'
};
