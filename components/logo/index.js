import styles from "./style.module.css";
import Image from "next/image";
import logoRu from "/images/logo-ru.svg";
import logoEn from "/images/logo-en.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const Logo = () => {
  const { locale } = useRouter();

  return (
    <div className={styles.logo}>
      <Link href="/">
        {locale === "ru" ? (
          <Image src={logoRu} alt="Логотип" />
        ) : (
          <Image src={logoEn} alt="Logo" />
        )}
      </Link>
    </div>
  );
};

export default Logo;
