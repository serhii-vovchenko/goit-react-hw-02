import s from './Options.module.css';

const Options = ({ data, updateFeedback, totalFeedback }) => {
    return (
        <div className={s.wrapper}>
            {Object.keys(data).map(key => {
                return (
                    <button
                        className={s.btn}
                        key={key}
                        onClick={() => updateFeedback(key)}
                    >
                        {key}
                    </button>
                );
            })}
            {totalFeedback(data) > 0 ? (
                <button
                    className={s.btn}
                    onClick={() => updateFeedback('reset')}
                >
                    reset
                </button>
            ) : (
                false
            )}
        </div>
    );
};

export default Options;
