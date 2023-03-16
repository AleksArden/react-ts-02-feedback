import { Component } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import css from './App.module.css';

type AppState = {
   good: number,
    neutral: number,
    bad: number,
}

export class App extends Component<{}, AppState> {
  state: AppState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback(): number {
    return Object.values(this.state).reduce(
      (total, value) => (total += value),
      0
    );
  }
  countPositiveFeedbackPercentage(): number {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }
  handleClick = ({ currentTarget: { name } }: React.MouseEvent<HTMLButtonElement>): void => {
      
    switch (name) {
      case "good":
        this.setState(prevState => ({
        good: prevState.good + 1,
      }));
        break; case "neutral":
        this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
        break; case "bad":
        this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
        break;
    
      default:
        break;
    }
  }
   
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
