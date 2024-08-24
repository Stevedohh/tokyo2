import React, { useEffect } from "react";

const themes = {
  default: {
    mainbg: "linear-gradient(135deg, #2C2C2C, #1A1A1A)",
    buttonColor: "#3D3D3D",
    iconColor: "#4E4E4E",
  },
  lightweight: {
    mainbg: "linear-gradient(135deg, #1C1C1C, #0B0B0B)",
    buttonColor: "#2E2E2E",
    iconColor: "#3C3C3C",
  },
  twilight_Spark: {
    mainbg: "linear-gradient(135deg, #111111, #0D0D0D)",
    buttonColor: "#242424",
    iconColor: "#343434",
  },
  jellyfish: {
    mainbg: "linear-gradient(135deg, #171717, #121212)",
    buttonColor: "#2A2A2A",
    iconColor: "#3A3A3A",
  },
};

const SettingsPopup = () => {
  // Apply default theme on component load
  useEffect(() => {
    const defaultTheme = themes.default; // Set your default theme here
    document.documentElement.style.setProperty(
        "--main-bg",
        defaultTheme.mainbg
    );
    document.documentElement.style.setProperty(
        "--button-color",
        defaultTheme.buttonColor
    );
    document.documentElement.style.setProperty(
        "--icon-color",
        defaultTheme.iconColor
    );
  }, []);

  return null; // Возвращаем null, так как больше ничего не отображаем
};

export default SettingsPopup;
