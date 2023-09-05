const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
    Message,
    Attachment, 
  } = require('discord.js');
  
  module.exports = {
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
  
    callback: async (client, interaction) => {
       
      
        fetch('https://meme-api.com/gimme')
        .then(response => {
            if (response.ok) {
            return response.json(); 
            } else {
            throw new Error('API request failed');
            }
        })
        .then(data => {

            interaction.reply(`Author: ${data.author}`);
            interaction.channel.send(data.url);
        })
        .catch(error => {
            console.error(error); 
        });

    },
  
    name: 'meme',
    description: 'Send random meme',
  };