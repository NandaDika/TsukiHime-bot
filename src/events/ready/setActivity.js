const { ActivityType } = require("discord.js");

module.exports = (client) => {
    client.user.setActivity({
        name: 'Master Doing Development',
        type: ActivityType.Watching,
        
    
    });
};