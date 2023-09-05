const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

eventHandler(client);

client.login('NjU3MjIxOTcxODEzMjAzOTc4.Gpym9R.gIbJ5Vd0-uSgiznE5JRUjFS9Zqdsy8gTJUaPJY');


