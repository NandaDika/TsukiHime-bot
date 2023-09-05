const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
    PermissionFlagsBits,
    Message,
  } = require('discord.js');
  
  module.exports = {
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
  
    callback: async (client, interaction) => {
      const targetUserId = interaction.options.get('target-user')?.value || 'null';
      await interaction.deferReply();
  
      // Ban the targetUser
      try {
        await interaction.guild.members.unban(targetUserId);
        await interaction.editReply(
          `User ${targetUserId} was unbanned`
        );
      } catch (error) {
        console.log(`There was an error when banning: ${error}`);
      }
    },
  
    name: 'unban',
    description: 'Unbans a member from this server.',
    options: [
      {
        name: 'target-user',
        description: 'The user you want to unban.',
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],
  };