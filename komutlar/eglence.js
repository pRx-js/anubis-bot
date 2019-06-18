const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Eglence komutlar | Not:Komutlar vt! ile baslar
        • Eglence Komutlari		
• Arkadasin :: Arkadasini Bilir.
• Atatürk	  :: Atatürk ile ilgili mesaj verir.	
• kaçcm    :: Kac Cm Oldunu Yazar.
• kedi      :: Kedi Fotografi Gosterir.
• köpek     :: Kopek Resmi Cikarir.
• twerk     :: Dene Gor :D
• sins-aga     :: Dene Gor :D
• anime     :: anime Karekteri Gosterir.
• coolresim :: Cool Resim Gosterir.
• mcödül    :: Istediniz Yaziyi Minecraft Basarisina Dondurur.
• hayvan    :: Lan Dene Iste Gor Ben nie solim surda 2 saatdir yaziyorum
    Sayfa 1 / 1 | Yapımcım: ! ๖̶̶̶ۣۣۜۜ͜ζ͜͡xChairs#4713`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eglence',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'eglence'
};