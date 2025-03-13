import { Link } from "react-router-dom";
import { ArrowRight, Code, FileText, Zap } from "lucide-react";
import "../App.css";
import { Spotlight } from "../components/Spotlight-New";
import { Button } from "../components/ui/button";
import { ReactNode } from "react"; 
//which is a type used in TypeScript to represent anything that can be rendered inside a React component.
//TypeScript doesn't know the type automatically. Without ReactNode, it assumes any, which is unsafe.
interface FeatureCardProps {
  icon: ReactNode; //allows valid react element
  title: string;
  description: string;
}

const LandingPage = () => {
  return (
    <>
      <Spotlight />
      <div className="landing-container">
        <div className="hero-section">
          <h1 className="text-6xl md:text-6xl mb-12 font-bold mr-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
            💬 DocuMate
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            AI-Powered Documentation Generator
          </h2>
          <p className="text-lg md:text-xl text-slate-200 mb-15 max-w-2xl mx-auto text-center">
            Transform your code into comprehensive documentation in seconds.
            DocuMate uses advanced AI to analyze your code and generate clear,
            detailed documentation automatically.
          </p>
          <div className="mb-35 text-center">
            <Link to="/converter">
              <Button size="lg" className="group  ">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How DocuMate Works
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
          <div className="mt-16 text-center">
            <Link to="/converter">
              <Button size="lg" variant="secondary" className="group">
                Try DocuMate Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
        <footer className="border-t mt-15 border-slate-800 py-10">
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
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 transition-all hover:bg-slate-900 hover:border-primary/50">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

export default LandingPage;