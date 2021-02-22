import React from 'react';
import { QuestionProps } from '@/interface';
import { MainImg } from '@/component/styles';
import Question from '@/component/QnA/question';

const QnAComponent = ({ questionNumber }:QuestionProps):JSX.Element => (
  <>
    <Question questionNumber={questionNumber} />
    <br />
    <MainImg src='/images/main.png' alt='question' />
  </>
);

export default QnAComponent;
