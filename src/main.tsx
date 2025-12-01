/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

if (!window.Telegram) {
  // локальный режим
  window.Telegram = {
    WebApp: {
      initData: "",
      initDataUnsafe: {},
      expand: () => console.log("[MOCK] expand()"),
      ready: () => console.log("[MOCK] ready()"),
      colorScheme: "light",
      // @ts-ignore
      MainButton: {
        text: "",
        isVisible: false,
        show: () => console.log("[MOCK] MainButton.show()"),
        hide: () => console.log("[MOCK] MainButton.hide()"),
        setText: (t: string) => console.log("[MOCK] setText:", t),
        showProgress: () => console.log("[MOCK] MainButton.progress"),
        hideProgress: () => console.log("[MOCK] hideProgress"),
        onClick: () => {},
      },
      showAlert: (msg: string) => alert("[MOCK] " + msg),
      showConfirm: (msg: string) => Promise.resolve(confirm("[MOCK] " + msg)),
    },
  };
}

window.Telegram.WebApp.expand();
window.Telegram.WebApp.ready();

createRoot(document.getElementById("root")!).render(<App />);
