import Head from "next/head";
import LYContainer from "../src/components/LYContainer";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { HeroWithBackground } from "../src/components/sections/Hero";
import heroData from "../src/data/home/hero.json";
import Onboarding from "../src/components/sections/Onboarding";
import onboardingData from "../src/data/home/onboarding.json";
import { Text, VStack } from "@chakra-ui/react";
import PortfolioPreview from "../src/components/sections/PortfolioPreview";
import portfolioPreviewData from "../src/data/home/portfolioPreview.json";
import FAQ from "../src/components/sections/FAQ";
import faqData from "../src/data/home/faq.json";
import Banner from "../src/components/Banner";
import bannerData from "../src/data/home/banner.json";
import metaData from "../src/data/home/meta.json"

export default function Home() {
  return (
    <div>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        {/* <meta name="theme-color" content="#FF5621"></meta> */}
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/mask-icon.svg" color="#1D1D1D" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <link rel="manifest" href="/manifest.json"/> */}
      </Head>

      <LYContainer>
        <VStack spacing={0}>
          <Navbar />
          <HeroWithBackground
            data={heroData}
            h={{ base: "fit-content", lg: "calc(100vh - 146px)" }}
          />
        </VStack>
        <Onboarding data={onboardingData} />
        <PortfolioPreview data={portfolioPreviewData} />
        <Banner data={bannerData} />
        <FAQ data={faqData} />
        <Footer />
      </LYContainer>
    </div>
  );
}
