const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Todo okey");
 });

 client.on("message", message => {
  if (message.content.startsWith("beast")) {
    let embed = new Discord.MessageEmbed().setTitle("The Beast dice: ").setDescription("Saludo puto");
    client.channels.send(embed);
  }
});

client.on('message', function(message) {
  if (message.content === 'ping') {
   message.author.send('pong');
  }
 });
 
 client.login("MTA0ODYyMDE4MjU2MzcyMTIyNw.GrPLqJ.-lOuR6LWa8bMe6zFBe4mB2tFoLcTv3xNdZT1XA");