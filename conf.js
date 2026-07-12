
const numeroWhatsApp = "5511990177236"; 
const mensagem = "Olá, estava no seu site , gostaria de saber mais sobre seu trabalho ! ";

document.getElementById("whatsappBtn").addEventListener("click", function() {
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, "_blank");
});
