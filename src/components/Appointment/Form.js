import React, { useState } from 'react'
import classnames from "classnames";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";



export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  
  function reset() {
    setName("")
    setInterviewer(null)
  }
  
  function cancel() {
    reset()
    props.onCancel();
  }

  console.log("inter", props.interviewers);
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name={props.name}
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          
          />
        </form>
        <InterviewerList interviewers={props.interviewers} interviewer={props.interviewer} setInterviewer={setInterviewer}/>
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>Cancel</Button>
          <Button onClick={props.onSave()} confirm>Save</Button>
        </section>
      </section>
    </main>
  );
}


// function reset() {
//   setName("")
//   setInterviewer(null)
// }

// function cancel() {
//   reset()
//   props.onCancel
// }