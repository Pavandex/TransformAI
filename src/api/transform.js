import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { promptText, imagePart, modelName } = req.body;
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: modelName || "gemini-1.5-flash" });

    let payload = [promptText];
    if (imagePart) {
      payload.push(imagePart);
    }

    const result = await model.generateContent(payload);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ text });
  } catch (error) {
    console.error("Backend generation error:", error);
    return res.status(500).json({ error: error.message });
  }
}