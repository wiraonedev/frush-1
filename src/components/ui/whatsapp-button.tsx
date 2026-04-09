const WhatsAppButton = () => {
    const phoneNumber = "6288987135615"; // Ganti dengan nomor kamu
    const message = "Halo Admin, saya ingin memesan produk ini. Mohon informasinya.";
    // Format link wa.me
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
        <div className="fixed bottom-0 right-0 z-[9999] bg-green-500 rounded-full p-2 mb-4 mr-4">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
                <img src="./src/assets/whatsapp.png" alt="WhatsApp" className="w-12 h-12" />
            </a>
        </div>
    )
};
export default WhatsAppButton;