const Discord = require("discord.js")
const config = require("./config.json")
const client = new Discord.Client()
client.on("ready", ()=> {
    console.log("Santo anjo do Senhor, se ative confiou, a piedade divina, sempre me reze, me guarde, governe, me ilumine. Amém")
    console.log("Acessando banco de dados")
    console.log("1\n2\n3\n4\n5\n Banco de Dados acessados")
    client.user.setActivity(`Hospedando Banco de Dados em meu Servidor`)
})
client.on("message", async message => {
    if(message.author.bot) return; //ignorar mensagem de bots
    if(message.channel.type === "dm") return; //ignorar mensagem de dm
    if(!message.content.startsWith(config.prefix)) return; //ignorar mensagem que não sejam iniciadas pelo prefixo 'p!'
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    try {
      const comandoFile = require(`./comandos/${comando}.js`);
      return comandoFile.run(client, message, args);

    } catch (err) {console.error("Erro" + err)
  message.channel.send("Ops, Não tenho esse comando. Tem certeza que era isso que você queria?")} //comadno handler
})
client.login(config.token)