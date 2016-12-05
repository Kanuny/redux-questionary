import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addAnswer } from './../redux/create';

class Answer extends PureComponent {
  static propTypes = {
    surveys: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleAnswer: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired, 
  }

  state = {
    currentIndex: 0,
    answers: [],
    survey: this.props.surveys[this.props.index],

  }

  handleNext = (e) => {
    e.preventDefault();

    const { survey } = this.state;
    const nextAnswer = [...this.state.answers, this.answer.value];
 
    if (this.state.currentIndex === survey.length - 1) {
      this.props.handleAnswer(
        this.props.index,
        nextAnswer,
      );
      return;
    }

    this.setState({
      currentIndex: this.state.currentIndex + 1,
      answers: nextAnswer,
    });

    this.answer.value = '';
  }

  render() { 
    const { currentIndex, survey } = this.state;
    return (
      <section>
        <h1> { survey[currentIndex]} </h1>
        <form>
          <input
            ref={(el) => this.answer = el}
            name="answer"
            type="text"  
          />

          <button onClick={this.handleNext}> Next </button> 
        </form>
      </section>
    );
  }
}

export default connect(
  (state) => ({
    surveys: state.surveys,
  }),
  { handleAnswer: addAnswer },
)(Answer)
