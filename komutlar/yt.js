const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00ffff)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Komutlari Gonderdim. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00ffff)
    .setTimestamp()
    .addField("**Eğlence ve Kullanıcı Komutları:**", `gh!banned = Dene ve Gör! \ngh!youtube = Youtube kanalımın linkini bulabilir siniz. \ngh!website = Web Sitemizin linki bulabilirsiniz. \ngh!avatarım = Avatarınınızı Gösterir. \ngh!herkesebendençay = Herkese Çay Alırsınız. \ngh!koş = Koşarsınız.\ngh!çayiç = Çay İçersiniz. \ngh!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \ngh!çayaşekerat = Çaya Şeker Atarsınız. \ngh!yumruh-at = Yumruk Atarsınız. \ngh!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \ngh!sunucuresmi = BOT Sunucunun Resmini Atar. \ngh!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \ngh!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
    .addField("**Yetkilisi Komutlar**", `gh!ban = İstediğiniz Kişiyi Sunucudan Banlar. \ngh!kick  = İstediğiniz Kişiyi Sunucudan Atar. \ngh!unban = İstediğiniz Kişinin Yasağını Açar. \ngh!sustur = İstediğiniz Kişiyi Susturur. \ngh!oylama = Oylama Açar. \ngh!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
    .addField("**Ana Komutlar**", "gh!yardım = BOT Komutlarını Atar. \ngh!bilgi = BOT Kendisi Hakkında Bilgi Verir. \ngh!ping = BOT Gecikme Süresini Söyler. \ngh!davet = BOT Davet Linkini Atar. \ngh!istatistik = BOT İstatistiklerini Atar.")
    .addField("**Yapımcı**", " **Yasinylmz#5008** ")
    .setFooter('**--------------------------**')
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};

exports.help = {
  name: 'sq',
  description: 'Botun davet linkini gönderir.',
  usage: 'sq'
};
