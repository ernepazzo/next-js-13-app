// import { Counter } from "./Counter";

export default function Layout({ children }) {
  return (
    <div>
      {/* <Counter /> */}
      <marquee style={{ background: '#fff', color: "purple" }}>
        El mejor canal de Twitch de programación: @midudev
      </marquee>
      {children}
    </div>
  );
}
