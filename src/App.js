import "./index.css";
import { Component } from "react";
import Title from "./Components/Title";

const text = {
  grandTitleTxt: "Please leave feedback",
  titleTxt: "Statistics",
  goodContent: "Good:",
  neutralContent: "Neutral:",
  badContent: "Bad:",
  totalContent: "Total:",
  positivePercentageContent: "Positive feedback:",
};

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    this.setState((prev) => ({ [e.target.name]: prev[e.target.name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good
      ? Math.ceil((good / this.countTotalFeedback()) * 100) + "%"
      : 0 + "%";
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Title
        onLeaveFeedback={this.onLeaveFeedback}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}
        good={good}
        neutral={neutral}
        bad={bad}
        textObj={text}
        options={Object.keys(this.state)}
      />
    );
  }
}
