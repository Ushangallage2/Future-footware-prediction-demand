const {LoginNow } = require("../service/Auth");
  
  
  const Login = async (req, res) => {
    const authCredentials = req.body;
    console.log("line6");
    console.log(authCredentials);
    const loginSuccess = await LoginNow(authCredentials);
    console.log();
  
    // DO SOMETHING WITH THE USER OR JUST RETURN IT
    return res.json(loginSuccess);
  };
  
  module.exports = {
    Login
  };