import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/TextArea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Spotlight } from "../components/Spotlight-New";
import { useState } from "react";
import axios from "axios";

export default function ConvertedPage() {

  const [codeInput, setCodeInput] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false); 


  const handleGenerateDocumentation = async () => {
    if (!codeInput.trim()) {
      alert("Please enter some code to generate documentation.");
      return;
    }

    setIsLoading(true); 
    try {
    
      const response = await axios.post(
        "http://localhost:8000/genai/documate",
        { prompt: codeInput },
        
      );

      
      setApiResponse(response.data.message); // Use response.data.message
      //console.log(response);
      //console.log(response.data);
      
      
    } catch (error) {
      console.error("Error:", error);
      if (axios.isAxiosError(error)) {
        setApiResponse(error.response?.data?.message || "An error occurred while generating documentation.");
      } else {
       setApiResponse("An error occurred while generating documentation.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Spotlight />
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 ">
            <Link to="/">
              <Button variant="ghost" size="sm" className="group text-white !bg-black boder-white !bg-black !border !border-gray-900 !rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-6xl mb-12 font-bold mr-12 bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-green-900">
          Generate Documentation
          </h1>
            <p className="text-slate-300 mb-8 text-center text-xl">
              Paste your code below and let DocuMate <br /><span>generate comprehensive documentation for you.</span>
            </p>

            <Card className=" border-slate-900">
              <CardHeader>
                <CardTitle>Code Input</CardTitle>
                
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="// Paste your code here..."
                  className="min-h-[300px] bg-slate-900 border-slate-700 font-mono"
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  disabled={isLoading}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
              <Button className="!bg-black" variant="outline" onClick={() => setCodeInput ("")}>
            Clear Code
          </Button>
          <Button onClick={handleGenerateDocumentation} disabled={isLoading} className="flex items-center gap-2 !bg-black ">
  {isLoading ? (
    <>Generating...</>) : (<>Generate Documentation <Sparkles className="animate-glow" /></>)}
</Button>

              </CardFooter>
            </Card>

            {/* to display the Api response */}
            {apiResponse && (
              <Card className=" border-slate-900 mt-8">
                <CardHeader>
                  <CardTitle>Generated Documentation</CardTitle>
                  <CardDescription>Your documentation is ready!</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="whitespace-pre-wrap bg-slate-900 p-4 rounded-md">
                    {apiResponse}
                  </pre>
                </CardContent>
              </Card>
            )}

            <div className="mt-12 text-center text-slate-300">
              <p>DocuMate supports JavaScript, TypeScript, Python, Java, C#, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}