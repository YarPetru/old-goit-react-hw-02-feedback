import { div } from 'prelude-ls';
import React, { Component } from 'react';

import s from './FeedbackStats.module.css';

class FeedbackStats extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
    // positive: 0,
  };

  addGoodRating = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addNeutralRating = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBadRating = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  dischargeRatings = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
      //   total: 0,
      //   positive: 0,
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.statsContainer}>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.addGoodRating}>
            Good
          </button>
          <button type="button" onClick={this.addNeutralRating}>
            Neutral
          </button>
          <button type="button" onClick={this.addBadRating}>
            Bad
          </button>
        </div>

        <h3>Statistics</h3>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback: {positive}%</li>
        </ul>
        <button type="button" onClick={this.dischargeRatings}>
          Discharge statistics
        </button>
      </div>
    );
  }
}

export default FeedbackStats;
