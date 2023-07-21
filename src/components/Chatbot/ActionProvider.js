class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleBuy = () => {
    const message = this.createChatBotMessage("You can purchase our nutrition products by navigating to the Nutrition page!");
    this.addMessageToState(message);
  };

  handleWorkout = () => {
    const message = this.createChatBotMessage("You can track your workouts by navigating to the Workout page!");
    this.addMessageToState(message);
  };

  handleWeight = () => {
    const message = this.createChatBotMessage("You can track your weight loss/gain by navigating to the Progress page!");
    this.addMessageToState(message);
  };

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, and stay safe!");

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };
}

export default ActionProvider;
