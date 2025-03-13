import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/TextArea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Spotlight } from "../components/Spotlight-New";
import { useState } from "react";
import axios from "axios";

export default function ConvertedPage() {
  // State for the input code and API response
  const [codeInput, setCodeInput] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Function to handle API call
  const handleGenerateDocumentation = async () => {
    if (!codeInput.trim()) {
      alert("Please enter some code to generate documentation.");
      return;
    }

    setIsLoading(true); // Start loading
    try {
      // Make the API call using axios
      const response = await axios.post(
        "http://localhost:8000/genai/documate",
        { prompt: codeInput },
        
      );

      // Set the API response
      setApiResponse(response.data.message); // Use response.data.message
      console.log(response);
      //console.log(response.data);
      
      
    } catch (error) {
      console.error("Error:", error);
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific errors
        setApiResponse(error.response?.data?.message || "An error occurred while generating documentation.");
      } else {
        // Handle generic errors
        setApiResponse("An error occurred while generating documentation.");
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Spotlight />
      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Generate Documentation</h1>
            <p className="text-slate-300 mb-8 text-center">
              Paste your code below and let DocuMate generate comprehensive documentation for you.
            </p>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Code Input</CardTitle>
                <CardDescription>Paste your code here or upload a file to generate documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="// Paste your code here..."
                  className="min-h-[300px] bg-slate-900 border-slate-700 font-mono"
                  value={codeInput}
                  onChange={(e) => setCodeInput(e.target.value)}
                  disabled={isLoading} // Disable input during loading
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" disabled={isLoading}>
                  Upload File
                </Button>
                <Button onClick={handleGenerateDocumentation} disabled={isLoading}>
                  {isLoading ? "Generating..." : "Generate Documentation"}
                </Button>
              </CardFooter>
            </Card>

            {/* Display API Response */}
            {apiResponse && (
              <Card className="bg-slate-800 border-slate-700 mt-8">
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

            <div className="mt-12 text-center text-slate-400">
              <p>DocuMate supports JavaScript, TypeScript, Python, Java, C#, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}