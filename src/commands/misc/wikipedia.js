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
        let targetName = interaction.options.get('search').value;
        
        
        fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=&list=search&formatversion=2&srsearch=${encodeURIComponent(targetName)}&srnamespace=0&srlimit=5`)
        .then(response => {
            if (response.ok) {
            return response.json(); 
            } else {
            throw new Error('API request failed');
            }
        })
        .then(data => {
            // Extract the page ID of the first result
            const title = data.query.search[0].title;
            const rawData = data.query.search[0].snippet;
            const firstClear = rawData.replace(/<\/?[^>]+(>|$)/g, "");
            const secondClear = firstClear.replace(/&quot;/g, "");
            // Access the extracted content (introductory text and plain text)
            

            const exampleEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(title)
                .setDescription(secondClear)
                .setTimestamp()
                .setFooter({ text: 'made by: @nekoking_' });
                interaction.reply({ embeds: [exampleEmbed] });

        })
        .catch(error => {
            console.error(error); 
        });

    },
  
    name: 'wiki',
    description: 'Pencarian dalam wikipedia',
    options: [
      {
        name: 'search',
        description: 'Search',
        type: ApplicationCommandOptionType.String,
        required: true,
      }
    ],
  };