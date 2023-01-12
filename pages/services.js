import Head from "next/head";
import { Container, Text } from "@chakra-ui/react";
import { LYContainer } from "../src/components/Lyne";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

export default function Services() {
  return (
    <div>
      <Head>
        <title>Lyne / Servicios</title>
        <meta name="description" content="Generated by create next app" />
        {/* <meta name="theme-color" content="#FF5621"></meta> */}
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#1D1D1D" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <link rel="manifest" href="/manifest.json"/> */}
      </Head>

      <LYContainer>
        <Navbar />
        <Footer />
      </LYContainer>
    </div>
  );
}
