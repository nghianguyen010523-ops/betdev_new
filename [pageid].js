import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1>Trang chính</h1>
        <p>Đã xóa redirect sang Google 404.</p>
      </main>
    </div>
  );
}
