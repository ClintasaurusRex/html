const qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://mintyfreshcodeworks.ca/",
  width: 128,
  height: 128,
  correctLevel: QRCode.CorrectLevel.H,
});
