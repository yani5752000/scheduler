import React from "react";
import classnames from "classnames";

import "components/InterviewerListItem.scss";


export default function InterviewerListItem(props) {
  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}



// export default function DayListItem(props) {
//   const dayClass = classnames("day-list__item", {
//     "day-list__item--selected": props.selected,
//     "day-list__item--full": props.spots === 0
//   });


//   return (
//     <li className={dayClass} onClick={() => props.setDay(props.name)}>
//       <h2 className="text--regular">{props.name}</h2>
//       <h3 className="text--light">{formatSpots(props.spots)}</h3>
//     </li>
//   );
// }


// Our InterviewerListItem component takes in the following props:

// id:number - the id of the interviewer
// name:string - the name of the interviewer
// avatar:url - a url to an image of the interviewer
// selected:boolean - to determine if an interview is selected or not
// setInterviewer:function - sets the interviewer upon selection