import React from 'react';
import { QuestionProps } from '@/interface';
import { MainImg } from '@/component/styles';
import Question from '@/component/QnA/question';
import AnswerButton from '@/component/QnA/answer';

const QnAComponent = ({ questionNumber }:QuestionProps):JSX.Element => (
  <>
    <Question questionNumber={questionNumber} />
    <br />
    <MainImg src='/images/main.png' alt='question' />
    <AnswerButton questionNumber={questionNumber} />
  </>
);

export default QnAComponent;
