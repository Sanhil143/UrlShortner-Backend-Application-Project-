const redis = require("redis")
const dotenv = require('dotenv')
dotenv.config()


const redisClint = redis.createClient(
  process.env.REDIS_PORT,
    process.env.REDIS_HOST,
    { no_ready_check: true }
  );
  redisClint.auth(process.env.REDIS_PASSWORD, function (err) {
    if (err) throw err;
  });
  
  redisClint.on("connect", async function () {
    console.log("My redis DB is connected");
  });

  module.exports = redisClint

