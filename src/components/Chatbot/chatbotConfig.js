import { createChatBotMessage } from "react-chatbot-kit";
import CoBotAvatar from "./CoBotAvatar";

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
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: []
};

export default config;
