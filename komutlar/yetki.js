const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let guild = message.guild
  let yetki = guild.channels.find('name', 'yetki');
  if (!yetki) return message.reply('`yetki` kanalını bulamıyorum.');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Yetki sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.reply('Kimi yetki etceğini yazmalısın.').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
	.setThumbnail("https://i.hizliresim.com/mJ20o2.jpg")
    .setTimestamp()
    .addField('Eylesm:', 'Terfi Ettirildi')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yes:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Sebeps', reason);
	
	return guild.channels.get(terfiler.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 2
};

exports.help = {
  name: 'yetki',
  description: 'Kullanıcıyı terfi ettirir.',
  usage: 'yetki [kullanıcı]'
};