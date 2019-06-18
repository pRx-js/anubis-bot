const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    message.guild.İconURL
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)   
    .addField('❯Ismı:', message.guild.name , true)
    .addField('❯Id:', message.guild.id, true)
    .addField('❯Bölge:', message.guild.region, true)
    .addField('❯Sahibi:', message.guild.owner, true)
    .addField('❯Kanal Sayısı:', message.guild.channels.size, true)
    .addField('❯Üye Sayısı:', message.guild.memberCount)
    .addField('❯Röl Sayısı:', message.guild.roles.size)
    .addField('❯Oluşturulma tarihi:', message.guild.createdAt)
    .addField('❯Sunucu Logo URL:', message.guild.iconURL)

    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu', 'sunucu bilgi', 'sbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi'
};
