const T = require("./Twit.js");
const my_user_name = require("../config").userName;
const timeout = 1000 * 60; // timeout to send the message 5 min


const AutoDM = () => {
  console.log('hi iam here')
//   // const stream = T.stream("user");
  setInterval(() => {
    console.log("Start Sending Auto Direct Message 🚀🚀🚀");
    SendMessage()
  }, timeout)
//   // stream.on("follow", SendMessage);
};

const SendMessage = () => {
  // T.get('direct_messages/events/list', {count: 1})
  //   .catch(e => console.log(e))
  //   .then(result=>{
  //     console.log(result.data)
  //   })
  // console.log('send message')
  // const screen_name = 'jeketifess'

  const obj = {
    type:'message_create',
    message_create: {
      target: {recipient_id: '1141197535110811648'},
      message_data: {
        text: 'i will flood your dm with shit instead. you delete the EG bashes or i\'ll just find more account to do this stupid shit'
      }

    }
  };
  // the follow stream track if I follow author person too.
  console.log(" time to spam ");
    T.post("direct_messages/events/new", {event: obj})
      .catch(err => {
        console.error("error", err.stack);
      })
      .then(result => {
        console.log((result.data))
        console.log(`Message sent successfully To  💪💪`);
      });
};

module.exports = AutoDM;
