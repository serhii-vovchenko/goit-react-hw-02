import s from './Options.module.css';

const Options = ({ data, updateFeedback }) => {
    return (
        <>
            {Object.keys(data).map(key => {
                return (
                    <button key={key} onClick={() => updateFeedback(key)}>
                        {key}
                    </button>
                );
            })}
        </>
    );
};

export default Options;
