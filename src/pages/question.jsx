import { useState } from 'react';
import { useRouter } from 'next/router';
import QuestionLayout from '../components/QuestionLayout/QuestionLayout';
import Question from '../templates/Question/Question';


export default function QuestionPage() {
  const router = useRouter();
  const [activeQuestion, setActiveQuestion] = useState('havelanding');
  const [isLoading, setLoading] = useState(false);

  const makeAction = (callback, stopLoading = true) => {
    return () => {
      setLoading(true);
      setTimeout(() => {
        callback();
        if (stopLoading) setLoading(false);
      }, 500);
    }
  }

  const questions = [
    {
      id: 'havelanding',
      question: 'Do you have a landing page for your project?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: makeAction(() => setActiveQuestion('waitinglist')),
      onNo: makeAction(() => router.push(`/answer/[answerId]`, `/answer/start-with-nocode`), false),
    },
    {
      id: 'waitinglist',
      question: 'Have you gathered a waiting list of potential users or got positive feedback?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: makeAction(() => setActiveQuestion('havemvp')),
      onNo: makeAction(() => router.push(`/answer/[answerId]`, `/answer/build-waiting-list`), false),
    },
    {
      id: 'havemvp',
      question: 'Do you have an MVP built with a no-code tool?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: makeAction(() => setActiveQuestion('limitaions')),
      onNo: makeAction(() => setActiveQuestion('sutableplatform')),
    },
    {
      id: 'sutableplatform',
      question: 'Is there a no-code platform suitable to build MVP for testing your business model?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: makeAction(() => setActiveQuestion('ableandwilling')),
      onNo: makeAction(() => router.push(`/answer/[answerId]`, `/answer/needs-a-coder-for-mvp`), false),
    },
    {
      id: 'limitaions',
      question: 'Do the limitations of your current no-code tool stops you from growing a business?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: makeAction(() => router.push(`/answer/[answerId]`, `/answer/custom-software-can-help`), false),
      onNo: makeAction(() => router.push(`/answer/[answerId]`, `/answer/grow-bigger-with-nocode`), false),
    },
    {
      id: 'ableandwilling',
      question: 'Are you able and willing to build it by yourself without hiring?',
      // note: 'Most mobile apps require a budget greater than 10k USD while certain no-frills web applications can be built for less.',
      onYes: makeAction(() => router.push(`/answer/[answerId]`, `/answer/build-mvp-with-nocode`), false),
      onNo: makeAction(() => router.push(`/answer/[answerId]`, `/answer/consider-a-coder`), false),
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
    <QuestionLayout isLoading={isLoading}>
      {questionComponent}
    </QuestionLayout>
  )
}
