const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Yurii" },
    { id: 2, name: "Olga" },
    { id: 3, name: "Andrii" },
    { id: 4, name: "Petro" },
    { id: 5, name: "Roman" },
    { id: 6, name: "Oleg" },
  ],
  massages: [
    { id: 1, massage: "HI" },
    { id: 2, massage: "How is your learning?" },
    { id: 3, massage: "Good, and you?" },
    { id: 4, massage: "Fine!" },
    { id: 5, massage: "Great!" },
    { id: 6, massage: "Bye!" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        massages: [...state.massages, { id: "next", massage: body }],
      };

    default:
      return state;
  }
};

export const addSendMessageCreator = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody};
};

export default dialogsReducer;
