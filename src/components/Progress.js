import '../styles/Progress.css';
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';


const initialData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
    datasets: [
        {
            label: "Weight Gain/Loss",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ]
};



const Progress = () => {
    const [language, setLanguage] = useState("english");

    const toggleLanguage = () => {
        setLanguage(language === "english" ? "french" : "english");
    };

    const labels = {
        english: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
        french: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    };

    const datasetLabel = {
        english: "Weight Gain/Loss",
        french: "Gain/Perte de poids",
    };

    const languageText = {
        english: {
            title: "You have",
            gained: "gained",
            lost: "lost",
            lbs: "lbs this week.",
            weight: "Weight:",
            add: "ADD",
            clear: "CLEAR",
        },
        french: {
            title: "Vous avez",
            gained: "gagné",
            lost: "perdu",
            lbs: "lbs cette semaine.",
            weight: "Poids :",
            add: "AJOUTER",
            clear: "EFFACER",
        },
    };

    useEffect(() => {
        const updatedData = { ...chartData };
        updatedData.labels = labels[language];
        updatedData.datasets[0].label = datasetLabel[language];
        setChartData(updatedData);
    }, [language]);

    const text = languageText[language];

    const [chartData, setChartData] = useState(initialData);
    const [inputValue, setInputValue] = useState(0);
    const [weightType, setWeightType] = useState("gained");
    const [weight, setWeight] = useState(0);

    const addDataPoint = () => {
        const newData = { ...chartData };
        const newDataPoint = parseFloat(inputValue);
        newData.datasets[0].data.push(newDataPoint);
        setChartData(newData);
        setInputValue(0);
    };

    const clearDataPoint = () => {
        const newData = { ...chartData };
        newData.datasets[0].data = [];
        setChartData(newData);
        setWeight(0);
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };


    useEffect(() => {
        const data = { ...chartData };
        const len = data.datasets[0].data.length;
        if (len === 0) {
            setWeightType("gained");
        } else {
            setWeight(data.datasets[0].data[len - 1] - data.datasets[0].data[0]);
        }
    }, [chartData]);

    useEffect(() => {
        if (weight > 0) {
            setWeightType("gained");
        } else {
            setWeightType("lost");
        }
    }, [weight]);

    return (
        <div className="progress-page">
            <button onClick={toggleLanguage}>
                {language === "english" ? "Français" : "English"}
            </button>
            <div className='progress-text'>
                {text.title} {weightType} {Math.abs(weight)} {text.lbs}
            </div>
            <div className="input">
                {text.weight}
                <input
                    type="number"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button onClick={addDataPoint}>{text.add}</button>
                <button onClick={clearDataPoint}>{text.clear}</button>
            </div>
            <div className='chart-container'>
                <div class="col-12 col-sm-6">
                    <Line
                        className="chart"
                        data={chartData}
                        key={JSON.stringify(chartData)}
                        height={400}
                        width={800}
                    />
                </div>
            </div>
        </div>
    );
}

export default Progress
