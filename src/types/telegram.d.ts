/* eslint-disable @typescript-eslint/no-explicit-any */
interface TelegramWebApp {
  initData: string;
  initDataUnsafe: any;
  colorScheme: string;

  expand(): void;
  ready(): void;

  MainButton: {
    text: string;
    color: string;
    textColor: string;
    isVisible: boolean;
    isProgressVisible: boolean;
    setText(text: string): void;
    show(): void;
    hide(): void;
    showProgress(leaveActive?: boolean): void;
    hideProgress(): void;
    onClick(cb: () => void): void;
  };

  showAlert(message: string): void;
  showConfirm(message: string): Promise<boolean>;
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
