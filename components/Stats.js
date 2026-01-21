import { useEffect, useState } from "react";

export default function Stats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const serverId = process.env.NEXT_PUBLIC_DISCORD_SERVER_ID;
        if (!serverId) return;

        const res = await fetch(
          `https://discord.com/api/guilds/${serverId}/widget.json`
        );

        if (!res.ok) return;

        const json = await res.json();
        setData(json);
      } catch (err) {
        console.log("Discord fetch failed");
      }
    }

    fetchStats();
  }, []);

  if (!data) {
    return <p style={{ textAlign: "center" }}>Loading stats...</p>;
  }

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        marginBottom: "40px"
      }}
    >
      <div>🟢 Online: {data.presence_count ?? 0}</div>
      <div>👥 Members: {data.members?.length ?? 0}</div>
      <div>💬 Channels: {data.channels?.length ?? 0}</div>
    </section>
  );
}
