import { useRouter } from 'next/router';
import QuestionLayout from '../../components/QuestionLayout/QuestionLayout';
import Answer from '../../templates/Answer/Answer';

const AnswerPage = () => {
    const router = useRouter();
    console.log(router.query.answerId);
    const answers = [
        {
            id: 'start-with-nocode',
            header: `It looks like you need to start with the no-code tool`,
            body: `No-code tools are best suitable for the testing and validating of your idea. And on your stage, it is what you need. 
            Make market research, explore target audience, and put together a landing page. Describe the solution's features and how it will work, then ask visitors to sign up for a waiting list.
            This way, you'll see what resonates with your potential customers.`,
        },
        {
            id: 'build-waiting-list',
            header: `It looks like you need to stick with a no-code`,
            body: `Lack of positive feedback and an empty waiting list can mean that solution doesn't resonate with an audience.
            No-code tools are great for quick prototyping and testing ideas. 
            I would recommend reframing your current concept or trying new ones until you see a clear sign of interest from potential customers.
            Building a solution itself doesn't mean that customers will pay for it.`,
        },
        {
            id: 'needs-a-coder-for-mvp',
            header: `It looks like you need a coder`,
            body: `Congrats on getting traction with your idea. The next step is building an MVP.
            If you cant, find a suitable no-code platform or existing ones requires too much of customization, it is time to look for a developer.
            Dev can build an MVP exactly what you need.
            But anyway, be careful and make a conscious effort to keep things as lean as possible. 
            MVP is usually way more minimal then you think.`,
        },
        {
            id: 'build-mvp-with-nocode',
            header: `Go ahead and build MVP with no-code`,
            body: `You are in a great place to be in!
            Building an MVP is the next step after validating an idea and problem. And you're lucky to have a no-code platform which suits exactly your needs.
            Go ahead and build it!`,
        },
        {
            id: 'consider-a-coder',
            header: `Consider hiring a Coder`,
            body: `Wait a minute. If there is a no-code solution that matches your needs and there is a specialist that can help you in a short time, go for it.
            But if a no-code platform requires a lot of customization by a hired specialist, it is worth to check the pricing of developers.
            The custom software cost can be comparable with the cost of the customization for a no-code platform. 
            But with coder, you can get more supportable, flexible, and scalable MVP for a similar price.`,
        },
        {
            id: 'grow-bigger-with-nocode',
            header: `Grow with your no-code tool`,
            body: `You are in a great place to be in.
            Continue scaling and growing your MVP or looking for a market fit.
            Go with your no-code platform until you get to the ceiling, and it will hinder your further growth.`,
        },
        {
            id: 'custom-software-can-help',
            header: `Custom software can help you`,
            body: `If you got traction with your idea and ready to take risks, go for custom development.
            Developers can build exactly what suites your needs, but it will cost.
            However, make sure that it is no-code limitations that stop you from growing, rather than lack of market interest or any other reason.`,
        }
    ];

    let activeAnswer = answers.find(a => a.id === router.query.answerId);

    if (!activeAnswer) activeAnswer = {
        header: `Answer not found`,
        body: `Nothing to show`,
    }

    return (
        <QuestionLayout>
            <Answer
                header={activeAnswer.header}
                text={activeAnswer.body}
            />
        </QuestionLayout>
    );
}

export default AnswerPage;