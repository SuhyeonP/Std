import React from 'react';
import { QuestionProps } from '@/interface';
import { answer } from '@/qna';
import { AnswerWrapper, Button } from './styles';

const AnswerButton = ({ questionNumber }:QuestionProps):JSX.Element => (

  <AnswerWrapper>
    <Button type='button'>{answer[questionNumber].a1}</Button>
    <Button type='button'>{answer[questionNumber].a2}</Button>
  </AnswerWrapper>
);

export default AnswerButton;
