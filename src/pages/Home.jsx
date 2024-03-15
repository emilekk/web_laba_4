import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Woman from "../components/Woman";
import BottomBar from "../components/BottomBar";
import Blog from "../components/Blog"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section woman">
        <Woman />
      </section>
      <section className="section bottomBar">
        <BottomBar />
      </section>
      <section className="section blog">
        <Blog />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;
