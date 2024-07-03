import { useState } from 'react';

import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';

import './App.css';

const feedbackData = {
    good: 0,
    neutral: 0,
    bad: 0,
};

function App() {
    const [clicks, setClicks] = useState(feedbackData);

    const updateFeedback = feedbackType => {
        setClicks(clicks => ({
            ...clicks,
            [feedbackType]: clicks[feedbackType] + 1,
        }));
    };

    const totalFeedback = clicks => {
        return Object.values(clicks).reduce(
            (acc, feedback) => acc + feedback,
            0
        );
    };

    return (
        <>
            <Description />
            <Options data={clicks} updateFeedback={updateFeedback} />
            <Feedback data={clicks} totalFeedback={totalFeedback} />
        </>
    );
}

export default App;
