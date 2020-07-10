import { useState } from 'react';
import { useRouter } from 'next/router';
import QuestionLayout from '../components/QuestionLayout/QuestionLayout';
import Question from '../templates/Question/Question';


export default function QuestionPage() {

  const router = useRouter();
  const [activeQuestion, setActiveQuestion] = useState('havelanding')
  const questions = [
    {
      id: 'havelanding',
      question: 'Do you have a landing page for your project?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: () => setActiveQuestion('waitinglist'),
      onNo: () => router.push(`/answer/start-with-nocode`),
    },
    {
      id: 'waitinglist',
      question: 'Have you gathered a waiting list of potential users or got positive feedback?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: () => setActiveQuestion('havemvp'),
      onNo: () => router.push(`/answer/build-waiting-list`),
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
      onNo: () => router.push(`/answer/needs-a-coder-for-mvp`),
    },
    {
      id: 'limitaions',
      question: 'Do the limitations of your current no-code tool stops you from growing a business?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: () => router.push(`/answer/custom-software-can-help`),
      onNo: () => router.push(`/answer/grow-bigger-with-nocode`),
    },
    {
      id: 'ableandwilling',
      question: 'Are you able and willing to build it by yourself without hiring?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: () => router.push(`/answer/build-mvp-with-nocode`),
      onNo: () => router.push(`/answer/consider-a-coder`),
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
