import Hero from "@/components/Home/Hero/Hero";
import Services from "@/components/Home/Services/Services";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kota Application</title>
      </Head>
      <Hero />
      <Services />
      <div className="h-screen"></div>
    </>
  );
}
