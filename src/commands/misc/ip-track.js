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
        let targetName = interaction.options.get('ip').value;
        
        fetch(`https://api.techniknews.net/ipgeo/${targetName}`)
        .then(response => {
            if (response.ok) {
            return response.json(); 
            } else {
            throw new Error('API request failed');
            }
        })
        .then(data => {

            const exampleEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('GEO-TRACKER')
                .setDescription(`Status: ${data.status}`)
                .addFields(
                    { name: 'Negara: ', value: `${data.country}` },
                    { name: 'Kota: ', value: `${data.city}`},
                    { name: 'Latitude', value: `${data.lat}`, inline: true},
                    { name: 'Longitude', value: `${data.lon}`, inline: true},
                    { name: 'ISP: ', value: `${data.isp}`},
                )
                .setTimestamp()
                .setFooter({ text: 'made by: @nekoking_' });
                interaction.reply({ embeds: [exampleEmbed] });
        })
        .catch(error => {
            console.error(error); 
        });

    },
  
    name: 'ip-track',
    description: 'Pencarian lokasi alamat ip',
    options: [
      {
        name: 'ip',
        description: 'IP Target',
        type: ApplicationCommandOptionType.String,
        required: true,
      }
    ],
  };