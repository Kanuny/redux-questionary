import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addSurvey } from './../redux/create';

class Survey extends PureComponent {
  static propTypes = {
    onSurveySubmit: PropTypes.func.isRequired,
  }

  state = {
    questions: [],
  }

  onQuestionAdd = (e) => {
    e.preventDefault();
    this.setState({
      questions: [...this.state.questions, this.question.value],
    });

    this.question.value = '';
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSurveySubmit(this.state.questions);
  }
  render() {
    const { questions, survey } = this.state;

    return (
      <div>
        <ul>
          {
            questions.map((question, index) =>
              <li key={index}> {question} </li>
            )
          }
        </ul>

        <form onSubmit={this.onSubmit} >
          <input
            type="text"
            ref={(el) => this.question = el}
            name="currentQuestion"
          />
  
          <button onClick={this.onQuestionAdd}> Add </button>

          <button type="submit"> Save </button>      
        </form>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  { onSurveySubmit: addSurvey },
)(Survey);
