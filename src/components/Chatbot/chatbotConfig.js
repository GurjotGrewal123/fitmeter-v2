import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  lang: "no",
  botName: "CoBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm here to provide you with some help!`
    )
  ],
  state: {},
  widgets: []
};

export default config;
