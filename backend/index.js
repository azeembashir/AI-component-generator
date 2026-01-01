import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("AI Component Generator API Running");
});


app.post("/generate-component", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const aiPrompt = `
You are a frontend expert.
Generate ONLY a clean, reusable React functional component
using Tailwind CSS.

Rules:
- No explanations
- No markdown
- Only JSX code
- Component must be responsive
- Use semantic HTML

User request:
${prompt}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: aiPrompt }],
      temperature: 0.3,
    });

    const generatedCode =
      response.choices[0].message.content;

    res.json({ code: generatedCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI generation failed" });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
