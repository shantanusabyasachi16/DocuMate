import { ArrowLeft, Sparkles, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Spotlight } from "../components/Spotlight-New";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import removeMarkdown from "remove-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ConvertedPage() {
  const [codeInput, setCodeInput] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateDocumentation = async () => {
    if (!codeInput.trim()) {
      toast.error("Please enter some code to generate documentation.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/genai/documate",
        { prompt: codeInput }
      );

      const cleanCode = removeMarkdown(response.data.message);
      setApiResponse(cleanCode);
      toast.success("Documentation generated successfully!");
    } catch (error) {
      console.error("Error:", error);
      if (axios.isAxiosError(error)) {
        setApiResponse(
          error.response?.data?.message ||
            "An error occurred while generating documentation."
        );
      } else {
        setApiResponse("An error occurred while generating documentation.");
      }
      toast.error("Failed to generate documentation. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Spotlight />
      {/* Add the Toaster component */}
      <Toaster position="bottom-right" />

      <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="group text-white !bg-black boder-white !bg-black !border !border-gray-900 !rounded-full"
              >
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
              Paste your code below and let DocuMate <br />
              <span>generate comprehensive documentation for you.</span>
            </p>

            <Card className="border-black-900">
              <CardHeader>
                <CardTitle>Code Input</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Syntax Highlighter */}
                  <SyntaxHighlighter
                    language="javascript"
                    style={dracula}
                    customStyle={{
                      minHeight: "300px",
                      borderRadius: "8px",
                      padding: "16px",
                      fontSize: "14px",
                      fontFamily: "monospace",
                      backgroundColor: "#1e293b",
                    }}
                  >
                    {codeInput}
                  </SyntaxHighlighter>

                  {/* Transparent Textarea Overlay */}
                  <textarea
                    placeholder="// Paste your code here..."
                    className="absolute inset-0 w-full h-full p-4 bg-transparent text-transparent caret-white resize-none font-mono"
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  className="!bg-black"
                  variant="outline"
                  onClick={() => {
                    setCodeInput("");
                    toast.success("Code cleared!");
                  }}
                >
                  Clear Code
                </Button>
                <Button
                  onClick={handleGenerateDocumentation}
                  disabled={isLoading}
                  className="flex items-center gap-2 !bg-black"
                >
                  {isLoading ? (
                    <>Generating...</>
                  ) : (
                    <>
                      Generate Documentation{" "}
                      <Sparkles className="animate-glow" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>

            {/* Display the API response */}
            {apiResponse && (
              <Card className="border-slate-900 mt-8">
                <CardHeader>
                  <CardTitle>Generated Documentation</CardTitle>
                  <CardDescription>
                    Your documentation is ready!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="text-slate-100 font-bold whitespace-pre-wrap bg-slate-900 p-4 rounded-md">
                    {apiResponse}
                  </pre>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button
                    className="!bg-black"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(apiResponse);
                      toast.success("Copied to clipboard!");
                    }}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Documentation
                  </Button>
                </CardFooter>
              </Card>
            )}

            <div className="mt-12 text-center text-slate-300">
              <p>
                DocuMate supports JavaScript, TypeScript, Python, Java, C#, and
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}