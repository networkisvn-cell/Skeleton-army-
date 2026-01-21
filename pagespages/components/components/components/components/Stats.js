import { useEffect, useState } from "react";
import { getDiscordData } from "@/lib/discordApi";

export default function Stats() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getDiscordData().then(setData);
  }, []);

  if (!data) {
    return <p style={{ textAlign: "center" }}>Loading stats...</p>;
  }

  return (
    <section style={{
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      marginBottom: "40px"
    }}>
      <div>🟢 Online: {data.presence_count ?? 0}</div>
      <div>👥 Members: {data.members?.length ?? 0}</div>
      <div>💬 Channels: {data.channels?.length ?? 0}</div>
    </section>
  );
}
