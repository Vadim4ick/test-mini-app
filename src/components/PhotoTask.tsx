/* eslint-disable @typescript-eslint/no-explicit-any */
import { sendPhoto } from "../api";

export default function PhotoTask() {
  const handlePhoto = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    window.Telegram.WebApp.MainButton.text = "⏳ Анализирую фото...";
    window.Telegram.WebApp.MainButton.show();
    window.Telegram.WebApp.MainButton.showProgress();

    const res = await sendPhoto(file);

    window.Telegram.WebApp.MainButton.hide();

    window.Telegram.WebApp.showAlert(res.reply || "Готово!");
  };

  return (
    <div className="card">
      <h3>📸 Фото задания</h3>

      <input
        type="file"
        accept="image/*"
        className="file-input"
        onChange={handlePhoto}
      />
    </div>
  );
}
