const { Client, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

eventHandler(client);

client.login(token);


