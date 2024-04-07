import styles from "./style.module.scss";
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
          <Image src={logoRu} alt="Логотип" className={styles.logo__img} />
        ) : (
          <Image src={logoEn} alt="Logo" />
        )}
      </Link>
    </div>
  );
};

export default Logo;
