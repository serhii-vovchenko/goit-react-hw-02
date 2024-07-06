import s from './Feedback.module.css';

const Feedback = ({ data, totalFB, positiveFB }) => {
    return (
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
    );
};

export default Feedback;
