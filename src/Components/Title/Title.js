import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import styles from "./Title.module.css";

export default function Title({
  onLeaveFeedback,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  textObj,
  options,
}) {
  const { section, title, title2 } = styles;
  return (
    <section className={section}>
      <h1 className={title}>{textObj.grandTitleTxt}</h1>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <h2 className={title2}>{textObj.titleTxt}</h2>
      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
          textObj={textObj}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </section>
  );
}
