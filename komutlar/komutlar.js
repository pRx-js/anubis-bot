const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");


exports.run = (client, msg) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    msg.channel.sendCode("asciidoc", `⇝ Tum Komutlar
[1] eglence :: Eğlence komutlarını gösterir.
[2] kullanıcı :: Kullanıcı komutlarını gösterir.
[3] ekstra :: Ekstra komutları gösterir.
[4] yetkili :: Yetkili komutlarını gösterir.

# örn: vt!eglence
`);
};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komutlar', 'help', 'yardim', 'yardım', 'kullanımlar', 'komutyardım', 'hp', 'ytr', 'sd', 'kd'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'komutlar',
    description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
    usage: 'komutlar'
  };