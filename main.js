const colorInput = document.getElementById("colorInput");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const copyButton = document.getElementById("copyButton");

function updateColorValues() {
  const color = colorInput.value;
  hexValue.textContent = color;
  const rgb = hexToRgb(color);
  rgbValue.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

copyButton.addEventListener("click", () => {
  const colorText = hexValue.textContent;
  navigator.clipboard.writeText(colorText).then(() => {
    alert("Color copied to clipboard: " + colorText);
  });
});

colorInput.addEventListener("input", updateColorValues);

updateColorValues();
