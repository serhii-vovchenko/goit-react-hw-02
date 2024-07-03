import s from './Feedback.module.css';
import Notification from '../Notification/Notification';

const Feedback = ({ data, totalFeedback }) => {
    return (
        <>
            {totalFeedback(data) > 0 ? (
                <ul>
                    {Object.keys(data).map(key => (
                        <li key={key}>
                            {key}: {data[key]}
                        </li>
                    ))}
                </ul>
            ) : (
                <Notification />
            )}
        </>
    );
};

export default Feedback;
