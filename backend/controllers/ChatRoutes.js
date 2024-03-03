
// const OpenAI = require ("openai");
// const sendAllChatController = async (req, res) => {

//     const {prompt} = req.body;
//     console.log(prompt)

//     try{
//     const response = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [ {role : "assistant" , content: prompt}],    // role -->assistance ,content --->prompt
//         temperature: 1,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,

       


//     })
  
//     res.send(response.data.choices[0].message.content);
//     console.log("abc")
    
//     } catch(err){
//        console.log(err)
//       res.status(500).send(err)
//     }
// }

// module.exports = {sendAllChatController};



const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const sendAllChatController = async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "assistant", content: prompt }],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log("this is response--------")
    console.log(response.choices[0].message.content)
    res.send(response.choices[0].message.content);
    console.log("abc");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};



module.exports = { sendAllChatController };



