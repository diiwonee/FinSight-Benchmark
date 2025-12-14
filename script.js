function scrollToDemo() {
  document.getElementById("demo").scrollIntoView({ behavior: "smooth" });
}

const benchmarks = {
  travel: {
    currentRatio: { min: 1.2, max: 2.0, advice: "Improve cash flow and reduce short-term debt." },
    quickRatio: { min: 1.0, max: 1.5, advice: "Reduce reliance on inventory and improve liquid assets." },
    netProfitMargin: { min: 5, max: 12, advice: "Review pricing strategy and operating costs." },
    roa: { min: 5, max: 10, advice: "Improve asset utilization and revenue generation." },
    debtToEquity: { min: 0.5, max: 1.5, advice: "Balance debt financing with equity." }
  },

  ecommerce: {
    currentRatio: { min: 1.5, max: 2.5, advice: "Optimize inventory turnover and supplier terms." },
    quickRatio: { min: 1.0, max: 1.3, advice: "Improve cash reserves and receivables collection." },
    netProfitMargin: { min: 3, max: 10, advice: "Reduce logistics and marketing costs." },
    roa: { min: 4, max: 8, advice: "Increase sales efficiency per asset invested." },
    debtToEquity: { min: 0.7, max: 2.0, advice: "Avoid excessive debt for short-term growth." }
  },

  tech: {
    currentRatio: { min: 2.0, max: 4.0, advice: "Maintain liquidity to support growth phases." },
    quickRatio: { min: 1.5, max: 3.0, advice: "Preserve cash runway and manage burn rate." },
    netProfitMargin: { min: -5, max: 10, advice: "Focus on scaling revenue and cost control." },
    roa: { min: -5, max: 5, advice: "Improve monetization of assets and IP." },
    debtToEquity: { min: 0.2, max: 1.0, advice: "Avoid high leverage during early growth." }
  },

  hospitality: {
    currentRatio: { min: 1.0, max: 1.8, advice: "Improve working capital management." },
    quickRatio: { min: 0.8, max: 1.2, advice: "Increase cash reserves for operational stability." },
    netProfitMargin: { min: 5, max: 15, advice: "Optimize pricing and occupancy rates." },
    roa: { min: 6, max: 12, advice: "Increase asset productivity." },
    debtToEquity: { min: 1.0, max: 2.5, advice: "Monitor leverage due to asset-heavy structure." }
  }
};

function analyzeData() {
  const industry = document.getElementById("industry").value;
  const ratio = document.getElementById("ratio").value;
  const value = parseFloat(document.getElementById("value").value);
  const resultBox = document.getElementById("result");

  if (!industry || !ratio || isNaN(value)) {
    alert("Please select an industry, a ratio, and enter a valid number.");
    return;
  }

  const data = benchmarks[industry][ratio];
  let status, color, explanation;

  if (value < data.min) {
    status = "Below Industry Average";
    color = "var(--danger)";
    explanation = `Your result is below the industry benchmark. ${data.advice}`;
  } else if (value > data.max) {
    status = "Above Industry Average";
    color = "var(--success)";
    explanation = "Your company is performing better than most competitors in this area.";
  } else {
    status = "Within Industry Range";
    color = "var(--warning)";
    explanation = "Your performance aligns with typical industry standards.";
  }

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <h3 style=\"color:${color}\">${status}</h3>
    <p><strong>Your result:</strong> ${value}</p>
    <p><strong>Industry benchmark:</strong> ${data.min} – ${data.max}</p>
    <p>${explanation}</p>
  `;
}
