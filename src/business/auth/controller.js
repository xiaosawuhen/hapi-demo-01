const Logger = require('../../common/Logger');
const Cache = require('../../cache');
const jwt = require('jsonwebtoken');

const controller = {
  login: async (request, h) => {

    var content ={msg:"today  is  a  good  day", user:'wnnwer123'}; // 要生成token的主题信息
    var accessToken = jwt.sign(
        content, 
        process.env.AUTH_PRIVATE_KEY, 
        {
            expiresIn: 60*60  // 24小时过期
        }
    );
    return {
				accessToken,
				// refreshToken: baozunLoginResponse.data.refreshToken,
				tokenType: "Bearer"
            };
  }
};

module.exports = controller;
