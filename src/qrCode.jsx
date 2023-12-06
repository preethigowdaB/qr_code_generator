import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
const QrCode = () => {
  const [value, setValue] = useState("");
  const [qrCode, setQrCode] = useState("");
  const generateQRCode = () => {
    setQrCode(value);
  };
  return (
    <div className="text-center">
      <div className="d-flex justify-content-center mt-5 pt-4">
        <input
          type="text"
          placeholder="Enter url to generate a QR code"
          className="pb-2 border-0 border-bottom border-dark ps-2 w-25 input_field"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <button onClick={generateQRCode} className=" my-3 border-0 bg-primary text-white px-5 py-2 rounded-1">
          Generate Qr Code
        </button>
      </div>
      <div>
        <h5>Generated QR code is : </h5>
        {qrCode && (
          <div>
            <QRCodeCanvas value={qrCode} size={300} />
          </div>
        )}
      </div>
    </div>
  );
};

export default QrCode;
