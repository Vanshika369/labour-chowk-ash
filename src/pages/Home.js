import React from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import WhyUs from '../components/WhyUs'
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section id="home">
        <header>
          <Navbar />
        </header>
        <div className="header-text">
          <h1>
            <span>LabourChowk.com</span>
            <p>A Digital Platform to fill the gap between Workers and Customers</p>
          </h1>
        </div>
      </section>

      <Services />
      <WhyUs />
      <Testimonials />
      <ContactUs />

      <section id="call-to-action">
        <div className="container">
          <h2 className="get-started">Get Started</h2>
          <p className="eager-to-transform-your-business">Eager to Transform Your Business with Labour Chowk? Sign up
            now and take the first step into the Digital platform 
          </p>
          <a href="index6.html" class="button" id="button">Get Started</a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;