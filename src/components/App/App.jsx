import { useState, useEffect } from 'react';

import Description from '../Description/Description';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import Feedback from '../Feedback/Feedback';

import './App.css';

function App() {
    const feedbackData = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    const LS_KEY = 'users-clicks';

    const [clicks, setClicks] = useState(() => {
        const userClicks = JSON.parse(window.localStorage.getItem(LS_KEY));

        if (totalFeedback(userClicks) > 0) {
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

    function totalFeedback(clicks) {
        if (!clicks) {
            return 0;
        }

        return Object.values(clicks).reduce(
            (acc, feedback) => acc + feedback,
            0
        );
    }

    const totalFB = totalFeedback(clicks);
    const positiveFB = Math.round(((totalFB - clicks.bad) / totalFB) * 100);

    return (
        <>
            <Description />
            <Options
                data={clicks}
                updateFeedback={updateFeedback}
                totalFeedback={totalFeedback}
            />
            {totalFB > 0 ? (
                <Feedback
                    data={clicks}
                    totalFB={totalFB}
                    positiveFB={positiveFB}
                />
            ) : (
                <Notification />
            )}
        </>
    );
}

export default App;
