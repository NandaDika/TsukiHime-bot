const { ActivityType } = require("discord.js");
const { description } = require("../../commands/misc/ping");

module.exports = (client) => {
    console.log(`${client.user.tag} is online`);


    /*client.guilds.cache.forEach(async (guild) => {
        try {
          // Fetch all the slash commands for the guild
          const commands = await guild.commands.fetch();
          
          // Delete each command
          commands.forEach(async (command) => {
            await command.delete();
          });
    
          console.log(`Cleared commands in ${guild.name}`);
        } catch (error) {
          console.error(`Error clearing commands in ${guild.name}: ${error}`);
        }
      });*/
    
};