const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Yetkili komutlar | Not:Komutlar vt! ile baslar	
  • istatistik      :: Bot Istatistiligini Gosterir.
  • anket :: Anket Acar		
  • ban   :: İstediğiniz kişiyi sunucudan yasaklar.
  • kick    :: İstediğiniz kişiyi sunucudan atar.
  • sustur  :: İstediğiniz kişiyi susturur.
  • temizle :: Mesajları siler.
  • uyar    :: İstediğiniz kişiye uyarı verir.
  • duyuruyap   :: Sunucunuzda duyuru yapmanızı sağlar.
  • kilit :: Unuttum :(
  • unload :: Yetkili Bilir
  • unban  :: Ban Kaldirir.
  • terfi  :: Kullaniciyi Terfi Eder
    Sayfa 4 / 4 | Yapımcım: ! ๖̶̶̶ۣۣۜۜ͜ζ͜͡xChairs#4713`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};