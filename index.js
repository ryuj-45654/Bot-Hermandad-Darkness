const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!darkness"
client.on("ready", () => {
    console.log("Mi amo Ryuj estoy encendido.");
});
client.on("message", (message) => {
if(message.content.startsWith("hola")){
    message.channel.send("Hola que tal mis panas?")
}
if(message.content.startsWith(prefix+" comandos")){
    const comandosembed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle("COMANDOS DEL BOT")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTimestamp()
    .setFooter("By Comunidad Darkness")
    .addFields(
		{ name: 'Comandos', value: 'Aqui puedes ver lo que hace cada comando' },
		{ name: '\u200B', value: '\u200B' }, 
		{ name: '!darkness familia', value: 'Te muestra la estructura y miembros de la familia y de la Hermandad', inline: true },
        { name: '!darkness creditos', value: 'Te muestra el nombre del creador del Bot', inline: true },
        { name: 'FORO OFICIAL DEL SERVIDOR', value: 'https://ryujdarkness.blogspot.com/p/gremio-darkness.html', inline: true },
    ),
    message.channel.send(comandosembed)
}

if(message.content.startsWith(prefix+" familia")){
    const familiaembed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle("COMUNIDAD DARKNESS")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setFooter("By Comunidad Darkness")
    .setTimestamp()
    .addField("LÍDERES", "LIDER: Ryuj Giraldo/ SUB-LIDERES: Jocker, Van405, Ghost, Mike y Fluna ",true)
    .addField("FAMILIA", "Caroline, Raven, Agus, Paula")
    .addField("HERMANDAD", "Mauro, Kurt, Juan, Draco, Francis, Alba, Sara, Cepeda, Alo, Mukkaw")
    .addField("NUEVOS MIEMBROS", "Yuki, Kid, Raul")
    .addBlankField(true)
    .addBlankField(true)
    .addField("FORO OFICIAL DEL SERVIDOR", "https://comunidadfenix.mistforums.com/",true);
    message.channel.send(familiaembed)
}
if(message.content.startsWith(prefix+" creditos")){
    message.channel.send("Este Bot lo ha hecho Ryuj Darkness y Ron Whiskey, para la Comunidad Darkness")
}
});
client.login(config.BOT_TOKEN);