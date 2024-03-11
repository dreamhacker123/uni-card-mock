import React from "react";
import { NavaBar } from "../../components/NavBar";
import { ContentBox } from "../../components/ContentBox";
import { CONTENT_SLIDES, MAIN_SLIDE } from "../../constants/contentTexts";
import { MainBox } from "../../components/MainBox";
import { TextBox } from "../../components/TextBox";
import { DarkContentBox } from "../../components/DarkContentBox";
import { BubbleBanner } from "../../components/BubbleBanner";
import { TextBox2 } from "../../components/TextBox2";
import { TextBox3 } from "../../components/TextBox3";
import { TextBox4 } from "../../components/TextBox4";
import { DownloadSection } from "../../components/DownloadSection";
import { CertificateSection } from "../../components/CertificateSection";
import { FooterSection } from "../../components/FooterSection";

const DashboardPage = (): JSX.Element => {
  return (
    <div className="container w-full">
      <NavaBar />
      <MainBox {...MAIN_SLIDE} />
      <TextBox />
      {CONTENT_SLIDES.light.map((eachSlideProperties) => {
        return <ContentBox {...eachSlideProperties} />;
      })}

      <TextBox2 />
      {CONTENT_SLIDES.dark.map((eachDarkSlideProperties) => {
        return <DarkContentBox {...eachDarkSlideProperties} />;
      })}

      <BubbleBanner />
      <TextBox3 />
      <TextBox4 />
      <DownloadSection />
      <CertificateSection />
      <FooterSection />
    </div>
  );
};

export default DashboardPage;
