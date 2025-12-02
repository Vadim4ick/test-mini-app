/* eslint-disable react-hooks/set-state-in-effect */
import "./style.css";

import TextTask from "./components/TextTask";
import PhotoTask from "./components/PhotoTask";
import { useEffect, useState } from "react";

export default function App() {
  const tg = window.Telegram.WebApp;

  const user = tg.initDataUnsafe?.user;
  const tgId = user?.id;

  const [allowed, setAllowed] = useState<null | boolean>(null); // null = нет ответа пока

  useEffect(() => {
    if (!tgId) {
      setAllowed(false);
      return;
    }

    const check = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/check-tg`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ tg_id: tgId }),
        });

        const data = await res.json();

        // твоя utils.JSON возвращает: { message: "...", data: {...} }
        setAllowed(data.data.allowed);
      } catch {
        setAllowed(false);
      }
    };

    check();
  }, [tgId]);

  // Пока ждём ответ — показываем загрузку
  if (allowed === null) {
    return (
      <div className="app-container">
        <h2>⏳ Проверяем доступ…</h2>
      </div>
    );
  }

  // Если Telegram НЕ привязан — показываем заглушку
  if (!allowed) {
    return (
      <div className="app-container" style={{ textAlign: "center" }}>
        <h2>🚫 Telegram не привязан</h2>
        <p>Чтобы пользоваться мини-приложением:</p>
        <p>🔗 Зайдите на сайт и привяжите Telegram в профиле.</p>
      </div>
    );
  }

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
