import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const text = {
    ru: {
      title: "Мы используем cookie",
      description:
        "Во время посещения сайта Санкт-Петербургского государственного академического театра балета вы соглашаетесь с тем, что мы обрабатываем ваши персональные данные с использованием метрических программ.",
      link: "Подробнее",
      button: "Понятно. Спасибо",
    },
    en: {
      title: "We use cookies",
      description:
        "By visiting the website of the St. Petersburg State Academic Ballet Theater, you agree that we process your personal data using metric programs.",
      link: "Learn more",
      button: "I understand. Thank you",
    },
  };

  const currentLocale = router.locale || "ru";
  const t = text[currentLocale];

  useEffect(() => {
    // Проверяем согласие пользователя при загрузке компонента
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>{t.title}</h3>
          <p className={styles.description}>
            {t.description}{" "}
            <a
              href="https://www.culture.ru/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {t.link}
            </a>
            .
          </p>
        </div>
        <button className={styles.button} onClick={handleAccept}>
          {t.button}
        </button>
      </div>
    </div>
  );
}
