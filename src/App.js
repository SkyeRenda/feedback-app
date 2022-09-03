import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);

  return (
    <>
      <Header></Header>
      <div className="container">
        <FeedbackList feedback={feedback}></FeedbackList>
      </div>
    </>
  );
}

export default App;
