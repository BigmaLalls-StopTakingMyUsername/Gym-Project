


    /* ==========================================================================
       SECTION 2: CREATIVITY FEATURES (Runs on bmi.html)
       ========================================================================== */
    
    // Interactive State Trackers
    let currentUnitSystem = "Imperial"; 
    const unitImperialBtn = document.getElementById("unitImperial");
    const unitMetricBtn = document.getElementById("unitMetric");
    const heightLabel = document.getElementById("heightLabel");
    const weightLabel = document.getElementById("weightLabel");

    if (unitImperialBtn && unitMetricBtn) {
        unitImperialBtn.addEventListener("click", function() {
            currentUnitSystem = "Imperial";
            unitImperialBtn.classList.add("active");
            unitMetricBtn.classList.remove("active");
            heightLabel.textContent = "Height (inches)";
            weightLabel.textContent = "Weight (lbs)";
        });

        unitMetricBtn.addEventListener("click", function() {
            currentUnitSystem = "Metric";
            unitMetricBtn.classList.add("active");
            unitImperialBtn.classList.remove("active");
            heightLabel.textContent = "Height (cm)";
            weightLabel.textContent = "Weight (kg)";
        });
    }

    // FEATURE 1: BMI Calculation Mathematical Evaluator
    const calcBmiBtn = document.getElementById("calcBmiBtn");
    if (calcBmiBtn) {
        calcBmiBtn.addEventListener("click", function() {
            const h = parseFloat(document.getElementById("bmiHeight").value);
            const w = parseFloat(document.getElementById("bmiWeight").value);
            const resultDiv = document.getElementById("bmiResult");

            let bmi = 0;
            if (currentUnitSystem === "Imperial") {
                bmi = (w / (h * h)) * 703;
            } else {
                // Metric conversion logic path
                let heightMeters = h / 100;
                bmi = w / (heightMeters * heightMeters);
            }

            bmi = bmi.toFixed(1);
            let evaluation = "";
            if (bmi < 18.5) evaluation = "Underweight";
            else if (bmi < 25) evaluation = "Normal Weight";
            else if (bmi < 30) evaluation = "Overweight";
            else evaluation = "Obese";

            resultDiv.innerHTML = `Your BMI is: ${bmi} (${evaluation})`;
            resultDiv.style.color = "var(--success-color)";
        });
    }

    // FEATURE 2: Dynamic Core Arrays Workout Generator (Fulfills strict requirement!)
    const generateTipBtn = document.getElementById("generateTipBtn");
    if (generateTipBtn) {
        // Exercise routine tracking datasets
        const random = [
            "100 push-ups",
            "100 sit-ups",
            "100 air squats",
            "10 kilometer run"
        ];

        generateTipBtn.addEventListener("click", function() {
            // Random mathematical array positioning capture
            const randomIndex = Math.floor(Math.random() * random.length);
            const displayField = document.getElementById("dynamicTip");
            displayField.textContent = random[randomIndex];
        });
    }
