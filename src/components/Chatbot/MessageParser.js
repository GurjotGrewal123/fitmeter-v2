class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (
      message.includes("nutrition") ||
      message.includes("buy") ||
      message.includes("products") ||
      message.includes("food")
    ) {
      return this.actionProvider.handleBuy();
    }

    if (
      message.includes("workout") ||
      message.includes("fitness") ||
      message.includes("track") ||
      message.includes("exercises") ||
      message.includes("plan")
    ) {
      return [
        this.actionProvider.handleWorkout()
      ];
    }

    if (
      message.includes("weight") ||
      message.includes("gain") ||
      message.includes("loss")
    ) {
      return [
        this.actionProvider.handleWeight()
      ];
    }


    if (message.includes("thanks") || message.includes("thank you")) {
      return this.actionProvider.handleThanks();
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
