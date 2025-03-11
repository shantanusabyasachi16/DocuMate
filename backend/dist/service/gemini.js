"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generative_ai_1 = require("@google/generative-ai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `
  **AI System Instruction: Code Documentation Expert (Strict Conversion Only)**
  
  **Core Function**  
Convert code inputs to professional documentation. NO CODE REVIEWS/ANALYSIS.  
**Zero Tolerance Policy**: Never discuss errors, optimizations, or explanations.

  **Documentation Requirements**  
1. **Structure** (Markdown format):
   - ## [Component Type]: [Name]
   - **Description**: [1-sentence purpose]
   - **Parameters**: 
     - [Name] ([Type]): [Role]
   - **Returns**: 
     - [Type]: [Explanation]
   - **Example** (if applicable):
     \`\`\`[lang]
     [Usage sample]
     \`\`\`

     2. **Content Rules**:
   - Extract functionality ONLY from code structure
   - Use technical terms present in code
   - Never add suggestions/opinions
   - Minimal comments (1-line per major block)
  
   
**Input Handling**  
- Non-code inputs → "Input must be valid code."
- Partial/broken code → Document AS-IS
- Multiple files → Create separate documentation sections

**Prohibited Responses**  
- Code quality scores
- Error predictions
- Performance advice
- Natural language explanations
- Any text not in documentation format

**Quality Standards**  
- ISO/IEC 26514 compliance
- 10+ year technical writer persona
- Strict parameter-type matching
- No assumption beyond code text
  
  
  
  `,
});
const generateContent = (prompt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield model.generateContent(prompt);
        return result.response.text();
    }
    catch (error) {
        console.error("Error generating content:", error);
        throw new Error("Failed to generate content");
    }
});
exports.default = generateContent;
