import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: [],
    interviewers: []
  });

  

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      // set your states here with the correct values...
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    })
  }, [state.day])
  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put("/api/appointments/" + id, { interview })
      .then(response => {
        
        const count = updateSpots(state, appointments);
        const days = state.days.map((day) => {
         if (day.name === state.day) {
           return {...day, spots: count}
         } else {
           return day;
         }
        })
        setState({
          ...state,
          appointments,
          days
        });
        
      })
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete("/api/appointments/" + id)
      .then(response => {
        const count = updateSpots(state, appointments);
        const days = state.days.map((day) => {
         if (day.name === state.day) {
           return {...day, spots: count}
         } else {
           return day;
         }
        })
        setState({
          ...state,
          appointments,
          days
        });

      })
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}


function updateSpots(state, appointments) {
  const found = state.days.find(d => state.day === d.name);
  let count = 5;
 for (let id of found.appointments){
   if(appointments[id].interview) {
     count--;
   }
 }
 return count;
}