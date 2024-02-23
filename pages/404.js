import Link from "next/link";

export default function Custom404() {
  return (
    <section
      style={{ maxWidth: "960px", margin: "200px auto", textAlign: "center" }}
    >
      <h1>404 - Page Not Found</h1>
      <Link href="/">Main Page</Link>
    </section>
  );
}
