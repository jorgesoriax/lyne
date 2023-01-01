import Head from "next/head";
import { Container } from "@chakra-ui/react";
import Navbar from "../src/components/sections/Navbar";
import Hero from "../src/components/sections/Hero";
import Onboarding from "../src/components/sections/Onboarding";
import Gallery from "../src/components/sections/Gallery";
import ReadyTo from "../src/components/sections/ReadyTo";
import Faq from "../src/components/sections/Faq";
import Footer from "../src/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lyne / Diseño gráfico</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="theme-color" content="#FF5621"></meta> */}
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#1D1D1D" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <link rel="manifest" href="/manifest.json"/> */}
      </Head>

      <Container maxW={{ base: "90%", lg: "70%" }} p={0}>
        <Navbar />
        <Hero />
        <Onboarding />
        <Gallery />
        <ReadyTo />
        <Faq />
        <Footer />
      </Container>
    </div>
  );
}
