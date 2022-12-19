const c = require('./config.json')
const ds = require('discord.js')
const cl = new ds.Client()
const prefix = "!"

cl.on("ready", () => {
    console.log("BotListo")
})

cl.on("messageCreate", async(message) => {
    if(message.content.startsWith(prefix+"ping")) {
        message.channel.send(`Pong!`)
    }
})

cl.login(c.token)