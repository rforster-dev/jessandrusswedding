import Image from "next/image";
import styles from "./page.module.css";

import Gifts from "./components/Gifts";
import Header from "./components/Header";

import Story from "./components/Story";
import Timings from "./components/Timings";
import GettingMarried from "./components/GettingMarried";
import Venue from "./components/Venue";
import RSVP from "./components/RSVP";
import Transport from "./components/Transport";
import Stay from "./components/Stay";
import ThingsToDo from "./components/ThingsToDo";
import FAQs from "./components/Faqs";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Header />

      <main id="oliven-main">
        <GettingMarried />
        <Story />
        <Venue />
        <Timings />
        <Transport />
        <Stay />
        <Gifts />
        <ThingsToDo />
        <RSVP />
        <FAQs />
        <Footer />
      </main>
    </div>
  );
}
