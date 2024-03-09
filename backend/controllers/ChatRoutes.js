
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



// const OpenAI = require("openai")------old---;
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const sendAllChatController = async (req, res) => {
//   const { prompt } = req.body;
//   console.log(prompt);

//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "assistant", content: prompt }],
//       temperature: 1,
//       max_tokens: 256,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
    
//     });

//     console.log("this is response--------")
//     console.log(response.choices[0].message.content)
//     res.send(response.choices[0].message.content);
//     console.log("abc");
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err);
//   }
// };



// module.exports = { sendAllChatController };



const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



const sendAllChatController = async (req, res) => {
  const { prompt } = req.body;
  console.log(prompt);

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: "a cat", 
      n: 1,
      size: "1024x1024",
      quality: "hd" // Optional: Use this line if you want HD quality images
    });
    
    // Assuming the API response structure includes a `data` object with an array of generated images
    const image_url = response.data[0].url; // Adjust according to the actual API response structure
    console.log("Generated Image URL:", image_url);
    
    // Sending back the URL of the generated image
    res.json({ imageUrl: image_url });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while generating the image.");
  }
};

module.exports = { sendAllChatController };



