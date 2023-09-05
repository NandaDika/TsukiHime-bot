module.exports = {
    name: 'ping',
    description: 'Answer with pong!',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //options: Object[],

    callback: (client, interaction) => {
        interaction.reply(`pong! ${client.ws.ping}ms`);
    }
};