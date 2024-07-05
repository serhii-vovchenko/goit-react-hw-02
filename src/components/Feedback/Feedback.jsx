import s from './Feedback.module.css';
import Notification from '../Notification/Notification';

const Feedback = ({ data, totalFeedback }) => {
    const totalFB = totalFeedback(data);
    const positiveFB = Math.round(((totalFB - data.bad) / totalFB) * 100);

    return (
        <>
            {totalFB > 0 ? (
                <>
                    <ul className={s.wrapper}>
                        {Object.keys(data).map(key => (
                            <li className={s.feedback} key={key}>
                                {key}: {data[key]}
                            </li>
                        ))}
                        <li className={s.feedback}>total: {totalFB}</li>
                        <li className={s.feedback}>positive: {positiveFB}%</li>
                    </ul>
                </>
            ) : (
                <Notification />
            )}
        </>
    );
};

export default Feedback;
