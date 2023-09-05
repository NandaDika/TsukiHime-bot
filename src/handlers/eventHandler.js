const getAllFile = require("../utils/getAllFile");
const path = require('path');
module.exports = (client) =>{
    const eventFolder = getAllFile(path.join(__dirname, '..', 'events'), true);

    for(const eventFolderF of eventFolder){
        const eventFiles = getAllFile(eventFolderF);
        eventFiles.sort((a, b) => a > b);
        
        const eventName = eventFolderF.replace(/\\/g, '/').split('/').pop();

        client.on(eventName, async (arg) => {
            for (const eventFile of eventFiles){
                const eventFunction = require(eventFile);
                await eventFunction(client, arg)
            }
        })
    }
};