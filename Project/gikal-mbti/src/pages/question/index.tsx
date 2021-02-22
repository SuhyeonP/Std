import React from 'react';
import { useRouter } from 'next/router';
import DefaultLayout from '@/component/Layout/DefaultLayout';
import QnAComponent from '@/component/QnA';

const QuestionComponent = ():JSX.Element => {
  const router = useRouter();
  const { qn } = router.query;
  return (
    <DefaultLayout title={`Question${qn || ''}`}>
      <QnAComponent questionNumber={Number(qn) || 0} />
    </DefaultLayout>
  );
};

export default QuestionComponent;
