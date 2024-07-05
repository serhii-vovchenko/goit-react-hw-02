import { useState, useEffect } from 'react';

import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';

import './App.css';

function App() {
    const feedbackData = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    const LS_KEY = 'users-clicks';

    const totalFeedback = clicks => {
        return Object.values(clicks).reduce(
            (acc, feedback) => acc + feedback,
            0
        );
    };

    const [clicks, setClicks] = useState(() => {
        const userClicks = JSON.parse(window.localStorage.getItem(LS_KEY));

        if (totalFeedback(userClicks)) {
            return userClicks;
        }

        return feedbackData;
    });

    useEffect(() => {
        window.localStorage.setItem(LS_KEY, JSON.stringify(clicks));
    }, [clicks]);

    const updateFeedback = feedbackType => {
        setClicks(clicks => ({
            ...clicks,
            [feedbackType]: clicks[feedbackType] + 1,
        }));

        if (feedbackType === 'reset') {
            setClicks(feedbackData);
        }
    };

    return (
        <>
            <Description />
            <Options
                data={clicks}
                updateFeedback={updateFeedback}
                totalFeedback={totalFeedback}
            />
            <Feedback data={clicks} totalFeedback={totalFeedback} />
        </>
    );
}

export default App;
