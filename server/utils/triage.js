const triage = (symptoms, age, gender) => {
  if (
    symptoms.includes("chest pain") ||
    symptoms.includes("breathing problem")
  ) {
    return {
      severity: "high",
      recommendation: "Go to hospital immediately",
    };
  }

  if (symptoms.includes("fever") && age > 60) {
    return {
      severity: "medium",
      recommendation: "Consult doctor",
    };
  }

  if (gender === "female" && symptoms.includes("abdominal pain")) {
    return {
      severity: "medium",
      recommendation: "Consult gynecologist",
    };
  }

  return {
    severity: "low",
    recommendation: "Rest and monitor",
  };
};

module.exports = triage;