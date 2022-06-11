import { Client, Intents } from "discord.js";
import { onReady } from "./events/ready";
import { onInteraction } from "./events/interaction";
import { IntentOptions } from "./config/intentOptions";
require("dotenv").config();

(async () => {
  // if (!validateEnv()) return;
  const client = new Client({ intents: IntentOptions });

  client.on("ready", async () => await onReady(client));

  client.on(
    "interactionCreate",
    async (interaction) => await onInteraction(interaction, client)
  );

  await client.login(process.env.TOKEN);
})();
