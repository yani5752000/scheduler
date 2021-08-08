import React from 'react'
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode"
import Form from "./Form";


const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
   function save(name, interviewer) {
     console.log("test save", name, interviewer);
      const interview = {
        student: name,
        interviewer
      };
      bookInterview(1, interview);
    }
   console.log("mode", mode);
   return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE, false)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          name={props.name}
            type="text"
            placeholder="Enter Student Name"
            value={props.name}
            interviewers={[]}//{props.interviewers}
            //interviewer={props.interview.interviewer}
            bookInterview={props.bookInterview}
            setInterviewer={props.setInterviewer}
            onCancel = {() => back()}
            onSave = {save}
        />
      )}
    </article>
   );
 }
