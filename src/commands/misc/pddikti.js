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
        let targetName = interaction.options.get('target-user').value;
        const unLoweredCaseName = targetName.replaceAll(' ', '%20');
        const name = unLoweredCaseName.toLowerCase();
        
        fetch(`https://api-frontend.kemdikbud.go.id/hit_mhs/${name}`)
        .then(response => {
            if (response.ok) {
            return response.json(); 
            } else {
            throw new Error('API request failed');
            }
        })
        .then(data => {
            const dataString = data.mahasiswa[0].text;
            let dataArray = dataString.split(",");
            const exampleEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle('DATA MAHASISWA')
                .setDescription('Sumber data: kemendikbud.go.id')
                .addFields(
                    { name: 'Nama Mahasiswa', value: `${dataArray[0]}` },
                    { name: 'Universitas', value: `${dataArray[1]}`, inline: true },
                    { name: 'Prodi', value: `${dataArray[2]}`, inline: true },
                )
                .setTimestamp()
                .setFooter({ text: 'made by: @nekoking_' });
                interaction.reply({ embeds: [exampleEmbed] });
        })
        .catch(error => {
            console.error(error); 
        });

    },
  
    name: 'data-mahasiswa',
    description: 'Pencarian data mahasiswa',
    options: [
      {
        name: 'target-user',
        description: 'Nama Mahasiswa',
        type: ApplicationCommandOptionType.String,
        required: true,
      }
    ],
  };