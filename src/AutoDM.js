const T = require("./Twit.js");
const my_user_name = require("../config").userName;
const timeout = 1000 * 60 * 1; // timeout to send the message 5 min

const AutoDM = () => {
  // const stream = T.stream("user");
  setInterval(() => {
    console.log("Start Sending Auto Direct Message 🚀🚀🚀");
    SendMessage()
  }, timeout)
  // stream.on("follow", SendMessage);
};

const SendMessage = () => {
  const screen_name = 'jeketifess'

  const obj = {
    screen_name,
    text: 'i will flood your dm with shit instead. you delete the EG bashes or i\'ll just find more account to do this stupid shit'
  };
  // the follow stream track if I follow author person too.
  if (screen_name != my_user_name) {
    console.log(" time to spam ");
      T.post("direct_messages/new", obj)
        .catch(err => {
          console.error("error", err.stack);
        })
        .then(result => {
          console.log(`Message sent successfully To  ${screen_name}  💪💪`);
        });
  }
};

module.exports = AutoDM;
