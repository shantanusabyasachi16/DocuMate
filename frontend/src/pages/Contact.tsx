import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageCircle, Phone } from "lucide-react";

import Navbar from "./Navbar";
import { Spotlight } from "../components/Spotlight-New";
import { Button } from "../components/ui/button";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Spotlight />
      <div className="min-h-screen bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto text-center">
            Have questions or feedback? We'd love to hear from you! Reach out to
            us via email, phone, or our social media channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-3">Email Us</h2>
              <p className="text-slate-300">
                <a
                  href="mailto:support@documate.com"
                  className="hover:text-primary"
                >
                  Shantanu.swain23@gmail.com
                </a>
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <Phone className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-3">Call Us</h2>
              <p className="text-slate-300">
                <a href="tel:+1234567890" className="hover:text-primary">
                  9861996332
                </a>
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <MessageCircle className="h-10 w-10 text-primary mb-4" />
              <h2 className="text-xl font-semibold mb-3">Social Media</h2>
              <p className="text-slate-300">
                Follow us on:
                <br />
                <a href="https://x.com/home" className="hover:text-primary">
                  Twitter
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/feed/?trk=404_page"
                  className="hover:text-primary"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/">
              <Button
                size="lg"
                className="group text-white !bg-black !border !border-gray-900 !rounded-full"
              >
                <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
