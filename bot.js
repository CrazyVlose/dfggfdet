const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const prefix = "#";

const devs = ["485380710656507914"]
 


 





//كود يدخل البوت الروم
client.on('message', msg => {

    if (msg.content == prefix + '1join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
});

client.login("NTExMjc3MTYzNjczMDI2NTYx.DsokCA.hsPkTpa36y3bXc7pUXjvsolzzxk");