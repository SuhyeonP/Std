import React from 'react';
import { QuestionProps } from '@/interface';
import { AnswerWrapper } from './styles';

const AnswerButton = ({ questionNumber }:QuestionProps):JSX.Element => (

  <AnswerWrapper>
    <p>a1</p>
    <p>a2</p>
    <p>{questionNumber}</p>
  </AnswerWrapper>
);

export default AnswerButton;
