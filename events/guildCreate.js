const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**ANUBIS BOT sunucunuza eklendi!**',
  '**ANUBIS BOT** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot pRx tarafından geliştirilmektedir (https://twitch.tv/prxcstwitch)',
  'Botumuzun özelliklerini öğrenmek için +yardım komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için mod-log kanalı açın ve deneme için',
  '+uyarı komutunu kullanın.',
  '',
  ]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})