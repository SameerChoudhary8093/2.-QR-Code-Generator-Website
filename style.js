const generateBtn = document.getElementById("generate-btn");
const qrContainer = document.getElementById("qr-container");
const qrCodeImg = document.getElementById("qr-code");

generateBtn.addEventListener("click", () => {
    const textInput = document.getElementById("text-input").value.trim();
    if (textInput) {
        
        qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(textInput)}`;
        qrContainer.style.display = "block";
    } else {
        alert("Please enter text or URL.");
        qrContainer.style.display = "none";
    }
});
