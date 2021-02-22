import React from 'react';
import { QuestionProps } from '@/interface';
import { question } from '@/qna';
import { QuestionWrapper, QuestionStyles } from './styles';

const Question = ({ questionNumber }:QuestionProps):JSX.Element => (

  <QuestionWrapper>
    Q .
    &nbsp;
    {questionNumber || 1}
    <QuestionStyles>
      {question[questionNumber]}
    </QuestionStyles>
  </QuestionWrapper>
);

export default Question;
