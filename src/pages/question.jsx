import { useState } from 'react';
import QuestionLayout from '../components/QuestionLayout/QuestionLayout';
import Question from '../templates/Question/Question';

export default function QuestionPage() {

  const [activeQuestion, setActiveQuestion] = useState('havelanding')
  const questions = [
    {
      id: 'havelanding',
      question: 'Do you have a landing page for your project?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: () => setActiveQuestion('waitinglist'),
      onNo: () => alert('Build a landing with no code!'),
    },
    {
      id: 'waitinglist',
      question: 'Have you gathered a waiting list of potential users or got positive feedback?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: () => setActiveQuestion('havemvp'),
      onNo: () => alert('Gather an audience with nocode!'),
    },
    {
      id: 'havemvp',
      question: 'Do you have an MVP built with a no-code tool?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: () => setActiveQuestion('limitaions'),
      onNo: () => setActiveQuestion('sutableplatform'),
    },
    {
      id: 'sutableplatform',
      question: 'Is there a no-code platform suitable to build MVP for testing your business model?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: () => setActiveQuestion('ableandwilling'),
      onNo: () => alert('Hire developer'),
    },
    {
      id: 'limitaions',
      question: 'Do the limitations of your current no-code tool stops you from growing a business?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: () => alert('Consider hiring a developer'),
      onNo: () => alert('Crush it with no-code'),
    },
    {
      id: 'ableandwilling',
      question: 'Are you able and willing to build it by yourself without hiring?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: () => alert('Go ahead and build it yourself with no-code'),
      onNo: () => alert('Consider hiring a developer'),
    },
  ];

  const selectedQuestionData = questions.find(q => q.id === activeQuestion)
  const questionComponent = (
    <Question
      question={selectedQuestionData.question}
      note={selectedQuestionData.note}
      onYes={selectedQuestionData.onYes}
      onNo={selectedQuestionData.onNo}
    />
  );

  return (
    <QuestionLayout>
      {questionComponent}
    </QuestionLayout>
  )
}
