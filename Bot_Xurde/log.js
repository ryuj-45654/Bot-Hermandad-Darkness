const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const prefix = "!darkness"

client.on("ready", () => {
    console.log("Mi amo Ryuj estoy encendido.");
});

client.login(config.BOT_TOKEN);