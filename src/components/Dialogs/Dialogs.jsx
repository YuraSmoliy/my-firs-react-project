import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Massage/Massage";
import {Redirect} from "react-router-dom"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {
  let dialogsPage = props.dialogsPage;
  let dialogs = dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let massagesElements = dialogsPage.massages.map((m) => (
    <Massage massage={m.massage} />
  ));
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if(!props.isAuth)return <Redirect to={'/login'}/>;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>{dialogs}</div>
      <div className={classes.massages}>
        <div>{massagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
};
const maxLengthCreator50 = maxLengthCreator(50)
const AddMessageForm = (props) =>{
  return(
      <form onSubmit={props.handleSubmit}>
        <div>
          <div>
            <Field component={Textarea} name={"newMessageBody"} placeholder="Enter your message"
            validate={[required, maxLengthCreator50]}/>

          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
      </form>
  )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;
