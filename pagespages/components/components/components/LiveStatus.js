export default function LiveStatus({ isLive }) {
  return (
    <div style={{
      textAlign: "center",
      marginBottom: "30px",
      fontWeight: "bold",
      color: isLive ? "red" : "gray"
    }}>
      {isLive ? "🔴 LIVE SHOW ON AIR" : "⚫ Currently Offline"}
    </div>
  );
}
