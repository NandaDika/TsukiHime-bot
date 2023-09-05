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
        let targetName = interaction.options.get('list-nama').value;
        const dataArray = targetName.split(",");
        let arrayLength = dataArray.length;
        const number = Math.floor((Math.random() * arrayLength));

        const exampleEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('SPINNER NAMA')
        .addFields(
            { name: 'Daftar Nama: ', value: `${targetName}` }
        )
        .setTimestamp()
        .setFooter({ text: 'made by: @nekoking_' });
        interaction.reply({ embeds: [exampleEmbed] });

        interaction.channel.sendTyping();
        setTimeout(async () =>{

            const exampleEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('HASIL SPIN')
            .addFields(
                { name: 'Daftar Nama: ', value: `${dataArray[number]}` }
            )
            .setTimestamp()
            .setFooter({ text: 'made by: @nekoking_' });
            await interaction.channel.send({ embeds: [exampleEmbed] });
        }, 5000)

    },
  
    name: 'spin',
    description: 'Gacha nama',
    options: [
      {
        name: 'list-nama',
        description: 'nama yang akan digacha',
        type: ApplicationCommandOptionType.String,
        required: true,
      }
    ],
  };