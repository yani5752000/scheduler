import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  function transition(newMode, replace = false) { 
    if (replace) {
      setHistory(()=>{
        const newHistory = [...history];
        newHistory.pop();
        newHistory.push(newMode)
        return newHistory;
      });
      setMode(newMode)
    } else {
      setHistory([...history, newMode]);
      setMode(newMode) 
    }
    
  }
  function back() { 
    if (history.length > 1) {
      setHistory(()=>{
        const newHistory = [...history];
        newHistory.pop();
        return newHistory;
      });
      setMode(history[history.length - 2])
    }
  }



  return { mode, transition, back };
}