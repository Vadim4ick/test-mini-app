import { useState } from "react";
import { sendText } from "../api";

export default function TextTask() {
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (!text.trim()) return;

    window.Telegram.WebApp.MainButton.text = "⏳ Решаю...";
    window.Telegram.WebApp.MainButton.show();
    window.Telegram.WebApp.MainButton.showProgress();

    const res = await sendText(text);

    window.Telegram.WebApp.MainButton.hide();

    window.Telegram.WebApp.showAlert(res.reply || "Готово!");
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
