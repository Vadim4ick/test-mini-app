import { useState } from "react";
import { sendText } from "../api";

export default function TextTask() {
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (!text.trim()) return;

    const tg = window.Telegram.WebApp;
    tg.MainButton.text = "⏳ Решаю...";
    tg.MainButton.show();
    tg.MainButton.showProgress();

    const res = await sendText(text);

    tg.MainButton.hide();

    const reply = res?.data?.reply;
    tg.showAlert(reply ? reply : "⚠️ Пустой ответ от сервера");

    setText("");
  };

  return (
    <div className="card">
      <h3>📝 Текст задания</h3>

      <textarea
        placeholder="Введите текст задания..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="btn" onClick={handleSend}>
        Отправить
      </button>
    </div>
  );
}
