import { useState } from 'react';
import styles from './Sorry.module.scss';
import Button from '../../components/UI/Button/Button';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from "yup";
import { toast } from 'react-toastify';
import axios from 'axios';


const schema = yup.object().shape({
    email: yup.string().email('Please check your email').required('Please enter your email'),
});

const addSubscriber = async (formId, email, source) => {
    const { data } = await axios.post(`https://api.convertkit.com/v3/forms/${formId}>/subscribe`, {
        api_key: 'DJqo7VuJ3eIiBod0jUfgsA',
        email,
        fields: {
            source: source
        }
    });

    return data;
}

const Sorry = () => {
    const [isLoading, setLoading] = useState(false);

    const { register, handleSubmit, errors, setValue } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async ({ email }) => {
        setLoading(true);
        await addSubscriber(1499568, email, window.location.href);
        toast.success('Thanks for signing up! I will remind you when tools is live', {
            position: 'bottom-center'
        });
        setValue('email', '');
        setLoading(false);
    };

    return (
        <div className={styles.sorry}>
            <h1>Hey! You caught me before the tool is ready</h1>
            <p>I am working hard to finish this tool. Things are going well, and it should be ready to help you with launching your SaaS business soon. It will help you decide what is better for you, no-code tool, or custom software development.</p>
            <p>If you'd like me to send you a reminder when the tool is ready, just put your email below:</p>
            <div className={styles.sorry__form}>
                <input type="text" placeholder="Your email" ref={register} name="email" />
                <Button onClick={handleSubmit(onSubmit)} isLoading={isLoading}>
                    Remind me!
                </Button>
            </div>
            <div className={styles.sorry__error}>{errors.email?.message}</div>

        </div>
    );
};

export default Sorry;