const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Kişisel komutlar | Not:Komutlar vt! ile baslar
        • Eglence Komutlari		
• Atatürk	:: Atatürk ile ilgili mesaj verir.		
• değişiklikler   :: Sunucuda Yapilan değişiklikleri gosterir.
• istatistik      :: Bot Istatistiligini Gosterir.
• afk             :: Afk Olursun
• unafk             :: Afkliktan Cikarsin. 
• kullanıcıbilgim :: kullanıcı bilgini gosterir.
• sunucuicon     :: Sunucu İcon Gösterir.
• sunucubilgi     :: Sunucu Bilgisini Gosterir.
• yapimcim         :: Bot Yapimcisini Gosterir.
• davet           :: Davet Link Verir.
• sponsor         :: Sponsorlarimizi Gosterir.		
• ailemiz  :: Bot Kac Sunucuda Oldunu Gosterir.		
• randomşifre :: Kafadan Sifre Verir		
• ping     :: Botun pingini gösterir.
• avatarım :: Avatarini Gosterir
• hastebin :: Yazdin Komudu Hastebin Donusturur
• değişiklikler :: Bota Yapilan Degisikler.
• sor :: Istedini Bota Sorar
• yaz :: Bota Yazdirir.
    Sayfa 1 / 2 | Yapımcım: ! ๖̶̶̶ۣۣۜۜ͜ζ͜͡xChairs#4713`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'kullanıcı'
};