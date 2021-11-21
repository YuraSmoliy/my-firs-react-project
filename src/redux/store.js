import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, massage: "HI", likes_count: 0 },
        { id: 2, massage: "How are you?", likes_count: 1 },
        { id: 3, massage: "Good, and you?", likes_count: 1 },
        { id: 4, massage: "Fine!", likes_count: 7 },
        { id: 5, massage: "Great!", likes_count: 6 },
        { id: 6, massage: "Bye!", likes_count: 5 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State was change ");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
