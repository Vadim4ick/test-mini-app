const API_URL = import.meta.env.VITE_API_URL;

export async function sendText(text: string) {
  const tg = window.Telegram.WebApp;

  const res = await fetch(`${API_URL}/solve-text`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Telegram-Init-Data": tg.initData,
    },
    body: JSON.stringify({ text }),
  });

  return res.json();
}

export async function sendPhoto(file: File) {
  const tg = window.Telegram.WebApp;

  const form = new FormData();
  form.append("photo", file);

  const res = await fetch(`${API_URL}/solve-photo`, {
    method: "POST",
    headers: {
      "X-Telegram-Init-Data": tg.initData,
    },
    body: form,
  });

  return res.json();
}
