document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Form elemanlarını alıyoruz
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // E-posta doğrulama
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var errorMessage = "";

    // Ad doğrulama
    if (name.trim() === "") {
        errorMessage += "Adınızı girmeniz gerekmektedir.\n";
    }

    // E-posta doğrulama
    if (!email.match(emailPattern)) {
        errorMessage += "Geçerli bir e-posta adresi girin.\n";
    }

    // Mesaj doğrulama
    if (message.trim() === "") {
        errorMessage += "Mesajınızı yazmanız gerekmektedir.\n";
    }

    // Hata mesajlarını gösterme
    if (errorMessage) {
        event.preventDefault(); // Formun gönderilmesini engelle
        alert(errorMessage); // Hata mesajını göster
    }
});
