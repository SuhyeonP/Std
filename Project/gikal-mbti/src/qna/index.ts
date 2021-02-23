export const question:string[] = [
  '바쁜날들중 급작스럽게 생긴 휴가 하루!\n 당신은 무엇을할것입니까?', // E vs I
  '친구가 너무 피곤해서 드라이 샴푸를 쓰고왓다고 한다. 당신의 반응은?', // F vs T
  '바보',
  '1',
  '1',
  '1',
  '1',
  '1',
  '1',
];

interface answerProps{
  a1:string;
  a2:string;
}

export const answer:answerProps[] = [
  { a1: '집순이', a2: '밖순이' },
  { a1: 'answer1', a2: 'answer2' },
  { a1: 'answer1', a2: 'answer2' },
];
