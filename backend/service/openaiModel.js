const openai = require("openai");

const openaiClient = new openai.OpenAI(process.env.OPENAI_API_KEY);

async function getChatResponse(message) {
  try {
    const response = await openaiClient.chat.create({
      model: "text-davinci-002",
      messages: [{ role: "user", content: message }],
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Internal Server Error");
  }
}

module.exports = { getChatResponse };
