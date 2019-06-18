const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Kişisel komutlar | Not:Komutlar vt! ile baslar	
• mcödül  :: Istediniz Yaziyi Minecraft Basarisina Dondurur.	
• hastebin :: Yazdin Yaziyi hastebin cevirir.		
• ailemiz  :: Bot Kac Sunucuda Oldunu Gosterir.		
• randomşifre :: Kafadan Sifre Verir		
• komutlar :: Tüm komutları listeler.
• ping     :: Botun pingini gösterir.
• duyuru   :: Sunucunuzda duyuru yapmanızı sağlar.
• avatarım :: Avatarini Gosterir
• istatistik :: Bot Istatistik Gosterir.
• randomşifre :: Rondom Sifre Verir.
• seviye-sistemi :: Seviyeni Gosterir.
    Sayfa 1 / 3 | Yapımcım: ! ๖̶̶̶ۣۣۜۜ͜ζ͜͡xChairs#4713`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ekstra',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'ekstra'
};