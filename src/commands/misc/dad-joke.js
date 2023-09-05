const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
    EmbedBuilder,
  } = require('discord.js');
const consoleLog = require('../../events/ready/consoleLog');
  
  module.exports = {
    /**
     * @param {EmbedBuilder} embed
     * @param {Client} client
     * @param {Interaction} interaction
     */
  
    callback: async (client, interaction) => {
        
        
        fetch(`https://official-joke-api.appspot.com/random_joke`)
        .then(response => {
            if (response.ok) {
            return response.json(); 
            } else {
            throw new Error('API request failed');
            }
        })
        .then(data => {
            // Extract the page ID of the first result
           interaction.reply(`${data.setup} ${data.punchline}`);
            

        })
        .catch(error => {
            console.error(error); 
        });

    },
  
    name: 'dad-jokes',
    description: 'Auto-Generated jokes bapak bapak',
  };