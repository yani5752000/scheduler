
import React from "react";
import classnames from "classnames";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from 'prop-types';


function InterviewerList(props) {
  
  const interviewers = Object.values(props.interviewers).map(interviewer => {
    
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
      />
    );
  });

 
   return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{interviewers}</ul>
</section>
   );
 }

 InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};

export default InterviewerList;






// import React from "react";
// import classnames from "classnames";
// import DayListItem from "./DayListItem";


// export default function DayList(props) {
//   const days = props.days.map( (day, index) => <DayListItem 
//   name={day.name} 
//   spots={day.spots} 
//   selected={day.name === props.day}
//   setDay={props.setDay}  />)
// //...
// // return (
// //   <div>
// //     {items}
// //   </div>
// // )
 
//    return (
//     <ul>
//       {days}
//     </ul>
//    );
//  }


//  Our InterviewerList takes in three props:

// interviewers:array - an array of objects containing the information of each interviewer
// interviewer:number - the id of an interviewer
// setInterviewer:function - a function that accepts an interviewer id