const qr = require('qrcode');

const generate = async (req, res, next) => {
    const qrImage = await qr.toDataURL('http://localhost:3000');
    const response = '<img src=' + "'" + qrImage + "' />";
    res.send(response);
};

module.exports = {
    generate: generate
};
