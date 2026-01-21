export async function getDiscordData() {
  const serverId = process.env.NEXT_PUBLIC_DISCORD_SERVER_ID;

  const res = await fetch(
    `https://discord.com/api/guilds/${serverId}/widget.json`
  );

  if (!res.ok) return null;
  return res.json();
}
