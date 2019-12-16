const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client({ disableEveryone: true });
const config = require('./config.json');
const token = config.token;
const prefix = config.prefix;
const staffRole = config.staffrole;
const adminRole = config.adminrole
const supportId = config.supportid

var map = new Map();

client.on('ready', () => {
    console.log(`Ik ben klaar voor gebruik!`);

    client.user.setActivity("Orders", { type: "WATCHING" }).catch(console.log)
});


client.on('message', msg => {
    if (msg.content === 'help') {
    msg.reply('Wat is er?');
    }
});
client.on('message', msg => {
    if (msg.content === 'oof') {
		msg.channel.send("╭━━━╮╭━━━╮╭━━━╮\n┃╭━╮┃┃╭━╮┃┃╭━━╯\n┃┃╱┃┃┃┃╱┃┃┃╰━━╮\n┃┃╱┃┃┃┃╱┃┃┃╭━━╯\n┃╰━╯┃┃╰━╯┃┃┃\n╰━━━╯╰━━━╯╰╯");
    }
});

client.on('message', msg => {
    var messageArray = msg.content.split(" ");
    if(messageArray[0] === '!ticket') {
            var text = "ticket-" +  msg.author.username;
            var user = msg.author.username
            var user2 = msg.author
            if(messageArray.length > 1) {
                var ond = msg.content.slice(7);
            } else { 
                var ond = msg.content;
            }
            var ticketcreated = new Discord.RichEmbed()
            .addField("#" + text, msg.author + ", we hebben een ticket voor u aangemaakt!")
            .addField("Onderwerp", ond);
            msg.guild.createChannel(text, 'text',[{
                type: "role",
                id: msg.author,
                allow:0x400
            },
            {
                type: "role",
                id: msg.guild.roles.find("name", "@everyone"),
                deny: 0x400
            },
            {
                type: "role",
                id: supportId,
                allow: 0x400
            }])
            .then(channelcrea => channelcrea.send(ticketcreated))
            .catch(console.error);
            msg.channel.send("**Uw ticket (#" + text + ") is aangemaakt! :wink:**");
            user2.sendMessage("**Beste " + user + " **\nWe hebben gezien dat je een ticket hebt gemaakt je hebt ***24 uur*** om iets in de ticket achter te laten.\n\nGebeurt dit niet zullen we u ticket automatisch sluiten. \n\n**Free designs** ")
    console.log(user + ` Heeft een ticket gemaakt!`);
    }
    if(messageArray[0] === '!close') {
    if (!msg.channel.name.startsWith(`ticket-`)) return message.channel.send(`Je kan niet een niet ticket channel sluiten`);

    msg.channel.send(`Weet je het zeker, dit kan niet ongedaan worden!\nom te bevestigen, typ \`!confirm\`. Doe dit binnen 20 seconden.`)
    .then((m) => {
    msg.channel.awaitMessages(response => response.content === '!confirm', {
        max: 1,
        time: 20000,
        errors: ['time'],
    })
    .then((collected) => {
                msg.channel.delete();
                let closeEmbed = new Discord.RichEmbed()
        .setDescription("Er is een ticket geclosed")
        .addField("Gekickd door:", message.author)
        var tlogChannel = msg.guild.channels.find(`name`, "🗝ticketlogs");
        if (!tlogChannel) return msg.channel.send("We kunnen het channel niet vinden probeer het later opnieuw!");
        tlogChannel.send("er is een ticket geclosed door: " + message.author);;

        })
        .catch(() => {
        m.edit('Je wachtte te lang, je ticket is niet gesloten').then(m2 => {
        }, 3000);
        });
    });
}

}); 

client.on("message", function(message) {
    if (message.author.bot) return;

    if (message.channel.type === "dm")  return;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ")
    
    var kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    var bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    var wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    var dmUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    switch (args[0].toLowerCase()) {

        

//help
        case "prijslijst":
        var botIcon = bot.user.displayAvatarURL;

        var data =                {
          "embed": {
            "color": 12390624,
            "description": "**Free - Designs** werkt met een token systeem! De tokens staan hieronder!",
            "image": {
              "url": "https://images-ext-1.discordapp.net/external/VOt8WhKMJIW3DwPWeksYEttLYzc4MPZTkBLxRiAoNVQ/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/561820253630365707/dd910c1287c2c0d070d3fdb5b0ad7ea6.png"
            },
            "fields": [
              {
                "name": "**Designs**",
                "value": " â€¢ Simpele logo\n â€¢ Normale logo\n â€¢ Aangepast logo\n â€¢ Simpele banner\n â€¢ Normale banner\n â€¢ Aangepast banner\n â€¢ Normale thumbnail\n â€¢ Aangepast thumbnail\n â€¢ Cartoon (In je design)\n â€¢ Simpele GIF\n â€¢ Streamoverlay\n â€¢ Start/Stop/Pauze screen\n â€¢ Cam overlay\n â€¢ Informatie bar\n â€¢ Forum signature banner\n â€¢ Custom design",
                "inline": true
              },
              {
                "name": "<:DC:569153386545414154><:DC:569153386545414154><:DC:569153386545414154><:DC:569153386545414154><:DC:569153386545414154><:DC:569153386545414154><:DC:569153386545414154><:DC:569153386545414154><:DC:569153386545414154><:DC:569153386545414154>",
                "value": "03\n06\n09Â±\n03\n06\n12Â±\n06\n12Â±\n+3\n12Â±\n15Â±\n09Â±\n09Â±\n05Â±\n09Â±\nOverleggen",
                "inline": true
              },
              {
                "name": "Video's",
                "value": "*(bij video's moeten we altijd overleggen voor een eerlijke prijs. Er zit altijd een drempel van 10 eurocent op om de klant te laten beseffen dat dit wel iets serieus is.)*\n â€¢ Intro - Â± 10/20  â€¢ Outro - Â± 10/20\n â€¢ Trailer - Â± 40/60\n â€¢ Video bewerken -Â± 40/60\n â€¢ Anders - Overleggen",
                "inline": true
              },
              {
                "name": "Websites",
                "value": "â€¢ Simpele website (sites.google.com of de HTML code) - 10Â±\nâ€¢ Homepage (HTML) - 8Â±\nâ€¢ Subdomein - 15Â±\nâ€¢ Anders - Overleggen"
              },
              {
                "name": "Minecraft",
                "value": "â€¢ Skin render (in je design, of niet)- 5\nâ€¢ Minecraft maps (landscaping, geen gebouwen) - 2/ minuut werkÂ±\nâ€¢ Minecraft server hulp - 2 / minuut werkÂ±\nâ€¢ Minecraft ander hulp - Overleggen"
              },
              {
                "name": "Discord servers",
                "value": "â€¢ Normale server - 15Â± \n   (10 channels, roles, perms) \nâ€¢ Moeilijke server - 20Â±\n   (20 channels, alles erop en eraan)"
              },
              {
                "name": "Advertenties",
                "value": "â€¢ Reclame bericht (Wordt niet altijd goedgekeurd) - 15\nâ€¢ @everyone tag -  +15\nâ€¢ @here tag - +9\nâ€¢ @Klant tag - +9\nâ€¢ Discord invite 24u - +9\nâ€¢ Discord unlimited invite - +15"
              },
              {
                "name": "Pakketten",
                "value": "â€¢ Minecraft pakket, 1 minecraft banner, 1 mc logo - 9Â±\nâ€¢ Intro en outro - 12Â±\nâ€¢ Discord server en logo - 12Â±\nâ€¢ Website, discord en logo - 30Â±\nâ€¢ Thumbnail pakket, 10 thumbnails - 40\nâ€¢ Youtube pakket, logo en banner - 9Â±\nâ€¢ Youtube + pakket, logo, banner en  5 thumbnails - 20Â±\nâ€¢ Youtube ++ pakket logo, banner, 5 thumbnails, intro en outro - 36Â±\nâ€¢ Website en plaatjes - 18Â±\nâ€¢ Streamer pakket +, start screen, stop screen, pauze screen, logo, banner en stream overlay - 35Â±\nâ€¢ Streamer pakket, start screen, stop screen, pauze screen - 12Â±\nâ€¢ Custom - Overleggen"
              },
              {
                "name": "Overig",
                "value": "â€¢ Discord bots, Overleggen"
              }
            ]
          }
        };
        return message.channel.send(data);

        case "help":
            let bots = new Discord.RichEmbed()
                .setTitle("Kijk hieronder voor alle commands!")
                .addField("Ticket!", "De ticket commands")
                .addField("Doe !ticket", "Voor een ticket")
                .addField("Doe !close", " om een ticket te sluiten")
                .addField("Moderation", " Moderators only" )
                .addField("Doe !ban <user> <reason>", " om te bannen")
                .addField("Doe !kick <user> <reason>", " om te kicken")
                .addField("Doe !warn <user> <reason>", " om te warnen")
                .addField("Doe !clear <aantal>", " om de chat te clearen")
                .addField("Admin commands", " (Admin only)")
                .addField("Doe !say <bericht>", " om de bot iets te laten zeggen")
                .addField("Doe !alert <bericht>", " om iets te alerten")
                .addField("Doe !dm <user> <bericht>", " om iemand via de bot te dmen")
                .addField("Veel plezier ", "- Free designs")
                .setColor(0x004EFF);
            message.channel.send(bots);
            break;
//admin
case '8ball':
    if(!args[2]) return message.reply("He loempia, ik kan toch geen bericht van 1 of 2 letters beantwoorden?")
    let replies = ["Ja.", "Nee.", "Weet ik veel", "Vraag het aan je moeder!"];
    
    let result = Math.floor((Math.random() * replies.length));
    let question = arguments.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(0x004EFF)
    .addField("Vraag:", question)
    .addField("Antwoord", replies[result]);

    message.channel.send(ballembed)
    break;
case 'clear':
    if(message.member.roles.find("name", staffRole)) {
try {

    // Geen perm return.
    // Geen param megegeven dan return.
    if (!args[0]) return message.reply("Geef een aantal op dat je weg wilt halen");

    // Nakijken als je een nummer meegeeft. We doen parseInt omdat we een tekst aankrijgen en een int willen hebben.
    if (Number.isInteger(parseInt(arguments[0]))) {

        // Als we niet +1 doen dan delete je enkel je pas geplaatste bericht.
        var aantal = parseInt(arguments[0]) + 1;

        // We gaan in bulk verwijderen. We geven het aantal mee dat verwijderd moet worden en dan verwijderen we.
        // Na dat het verwijderd is gaan we een bericht zenden.
        message.channel.bulkDelete(aantal).then(() => {

            if (arguments[0] == 0) {

                message.channel.send(`Ben je loemp ik kan toch niet 0 berichten verwijderen?`).then(msg => msg.delete(3000));

            } else if (arguments[0] == 1) {

                // Verzenden van het bericht en na 3 seconden dit bericht verwijderen na dat het geplaatst is.
                message.channel.send(`Ik heb 1 bericht verwijderd.`).then(msg => msg.delete(3000));

            } else {

                // Verzenden van het bericht en na 3 seconden dit bericht verwijderen na dat het geplaatst is.
                message.channel.send(`Ik heb ${arguments[0]} berichten verwijderd.`).then(msg => msg.delete(3000));

            }

        });

        // Als het geen getal is dan zenden we een bericht naar de gebruiker.
    } else {
        return message.channel.send("Geef een getal op.");
    }

} catch (err) {
    message.channel.send("Er is iets fout gelopen");
}
}
break; 
    case "kick":
    if(message.member.roles.find("name", staffRole)) {
if(!kUser) return message.channel.send("Doe !kick @(user) (reden)")
        let kReason = args.join(" ").slice(22);

        let kickEmbed = new Discord.RichEmbed()
        .setDescription("Er is iemand gekicked")
        .addField("Gekickd:", kUser)
        .addField("Gekickd door:", message.author)
        .addField("Reden:", kReason);
        var kickChannel = message.guild.channels.find(`name`, "【⛔】straffen");
        if (!kickChannel) return message.channel.send("We kunnen het channel niet vinden probeer het later opnieuw!");
        message.guild.member(kUser).kick(kReason)
        kickChannel.send(kickEmbed);;
        break;
      } else {
// hier als de persoon de role niet heeft
        message.channel.send("Geen perm!");
        break;
      }
    case "dm":
        if(message.member.roles.find("name", adminRole)) {
if(!bUser) return message.channel.send("Doe !dm (@user) (bericht)");
       var dmmsg = args.join(" ").slice(22);
       dmUser.sendMessage(dmmsg);
       break;}
        
    case "ban":
    if(message.member.roles.find("name", staffRole)) {
if(!bUser) return message.channel.send("Doe !ban (@user) (reden)");
        var bReason = args.join(" ").slice(22);

        var banEmbed = new Discord.RichEmbed()
        .setDescription("Er is iemand gebanned")
        .addField("Gebanned:", bUser)
        .addField("Geband door:", message.author)
        .addField("Reden:", bReason);     
        var incidentChannel = message.guild.channels.find(`name`, "【⛔】straffen");
        if (!incidentChannel) return message.channel.send("Ik kan het channel niet vinden!");
        message.guild.member(bUser).ban(bReason)
        incidentChannel.send(banEmbed);
        break;
      } else {
// hier als de persoon de role niet heeft
        message.channel.send("Geen perm!");
        break;
      }
        
    case "warn":
    if(message.member.roles.find("name", staffRole)) {
if(!wUser) return message.channel.send("Doe !warn (@user) (reden)");
        
        var wReason = args.join(" ").slice(22);
        var warnEmbed = new Discord.RichEmbed()
        .setDescription("Er is iemand gewarnt")
        .addField("Gewarnt:", wUser)
        .addField("Gewarnt door:", message.author)
        .addField("Reden:", wReason);       
        var incidentChannel = message.guild.channels.find(`name`, "【⛔】straffen");
        if (!incidentChannel) return message.channel.send("Ik kan het channel niet vinden!");
        incidentChannel.send(warnEmbed);
        message.delete().catch(O_o=>{});
        break;
      } else {
// hier als de persoon de role niet heeft
        message.channel.send("Geen perm!");
        break;
      }
    case "report":
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Doe !report @(user) (reden)!");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor(0x004EFF)
        .addField("Gereport", rUser)
        .addField("Gereport door", msg.author)
        .addField("Reden:", reason)
        .addField("Channel", message.channel)

        let reportschannel = message.guild.channels.find(`name`, "reports")
        if(!reportschannel) return message.channel.send("Je moet het channel reports nog aanmaken!")


        message.delete().catch(O_o=>{}) ;
        reportschannel.send(reportEmbed)
        break;
    case "alert":
    if(message.member.roles.find("name", adminRole)) {
        let botmessage = arguments.join(" ");
        var alertEmbed = new Discord.RichEmbed()
        .setDescription("MT Marktplaats Alert")
        .addField("Melding:", botmessage)      
        message.channel.send(alertEmbed);
        message.delete().catch(O_o=>{});
        break;
      } else {
// hier als de persoon de role niet heeft
        message.channel.send("Geen perm!");
        break;
      }
case "say":
      if(message.member.roles.find("name", adminRole)) {
        let botmessage = arguments.join(" ");
        message.delete().catch();
        message.channel.send(botmessage)
        break;
} else {
// hier als de persoon de role niet heeft
        message.channel.send("Geen perm!");
        break;
      }
            // message.channel.send(help);
            
        default:

    }
});

client.login(token).catch(console.error);
