import React from "react";
import { connect } from "react-redux";
import Dialogs from ".//Dialogs";
import {
  addSendMessageCreator,
} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage};
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(addSendMessageCreator(newMessageBody));
    },
  };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)
(Dialogs);
