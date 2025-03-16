import { Link } from "react-router-dom";
import { ArrowRight, Code, FileText, Zap } from "lucide-react";
import "../App.css";
import { Spotlight } from "../components/Spotlight-New";
import { Button } from "../components/ui/button";
import { ReactNode } from "react";
import Navbar from "./Navbar";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Spotlight />
      <div className="landing-container pt-25">
        <div className="hero-section">
          <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            AI-Powered <br />
            <span className="text-6xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-purple-900/90 to-teal-900/80 ">
              Documentation Generator
            </span>{" "}
            <br />
            <span className="text-5xl font-bold">Made Simple</span>
          </h2>

          <p className="text-lg  text-slate-300 mb-15 max-w-2xl mx-auto text-center">
            Transform your code into comprehensive documentation in seconds.
            DocuMate uses advanced AI to analyze your code and generate clear,
            detailed documentation automatically.
          </p>
          <div className="mb-35 text-center">
            <Link to="/converter">
              <Button
                size="lg"
                className="group text-white !bg-black !border !border-gray-900 !rounded-full"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How DocuMate Works ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Code className="h-10 w-10 text-primary" />}
                title="Paste Your Code"
                description="Simply paste your code or upload a file, and DocuMate will analyze it instantly."
              />

              <FeatureCard
                icon={<Zap className="h-10 w-10 text-primary" />}
                title="AI Processing"
                description="Our advanced AI engine understands your code structure, functions, and logic."
              />

              <FeatureCard
                icon={<FileText className="h-10 w-10 text-primary" />}
                title="Get Documentation"
                description="Receive comprehensive, well-structured documentation ready to use in your projects."
              />
            </div>
          </div>
          <div className="mt-16 text-center pb-15">
            <Link to="/converter">
              <Button
                size="lg"
                variant="secondary"
                className="group text-white !bg-black boder-white !bg-black !border !border-gray-900 !rounded-full"
              >
                Try DocuMate Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        <footer className="border-t mt-25 border-slate-800 py-10">
          <div className="container mx-auto px-4 text-center text-slate-400">
            <p>© {new Date().getFullYear()} DocuMate. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-black-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 transition-all hover:bg-gradient-to-r from-black-600/50 to-teal-900/50 hover:border-primary/50">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-100">{description}</p>
    </div>
  );
}

export default LandingPage;
