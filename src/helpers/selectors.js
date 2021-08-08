export function getAppointmentsForDay(state, day) {
  

  const found = state.days.find(d => day === d.name);

  if (state.days.length === 0 || found === undefined) return [];

  return found.appointments.map(id => state.appointments[id]);
}



export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }
  let obj = {};
  obj.student = interview.student;
  const interviewer = state.interviewers[interview.interviewer];

  obj.interviewer = interviewer;

  return obj;
}

export function getInterviewersForDay(state, day) {
  const found = state.days.find(d => day === d.name);

  if (state.days.length === 0 || found === undefined) return [];

  const interviewers = found.interviewers.map(id => state.interviewers[id]);

  return interviewers;
}
