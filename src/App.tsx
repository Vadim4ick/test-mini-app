import "./style.css";

import TextTask from "./components/TextTask";
import PhotoTask from "./components/PhotoTask";

export default function App() {
  return (
    <div className="app-container">
      <h1>📚 Домашка</h1>

      <TextTask />
      <PhotoTask />

      <p style={{ color: "var(--tg-hint)", fontSize: 14, textAlign: "center" }}>
        Это мини-приложение Telegram
      </p>
    </div>
  );
}
