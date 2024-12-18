// Impor Twilio SDK
const twilio = require('twilio');

// SID Akun dan Token Otentikasi dari Twilio
const accountSid = 'USff63e4936cf1d41a9145ac678b88c201';  // SID Akun Anda
const authToken = '9VAJ4CKEZMAC62CEUA9WPTQT';  // Token Otentikasi Anda

// Nomor WhatsApp pengirim dan penerima
const from = 'whatsapp:+14155238886'; // Nomor WhatsApp Twilio Anda (nomor Twilio sandbox)
const to = 'whatsapp:+6289665536464';   // Nomor penerima (Nomor WhatsApp pemesan)

const client = twilio(accountSid, authToken);

// Fungsi untuk mengirim pesan WhatsApp
function sendWhatsAppMessage() {
  client.messages
    .create({
      from: from,
      to: to,
      body: 'Pemesanan Anda telah berhasil diproses! Mohon melakukan pembayaran DP untuk melanjutkan proses booking.',
    })
    .then((message) => console.log(`Pesan terkirim dengan SID: ${message.sid}`))
    .catch((error) => console.error(`Terjadi kesalahan: ${error.message}`));
}

// Panggil fungsi untuk mengirim pesan
sendWhatsAppMessage();
