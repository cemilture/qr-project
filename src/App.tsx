import "./App.css";
import React from "react";
import QRCodeReact from "react-qr-code";

interface QRCodeProps {
  value: string;
  size?: number;
}
const App: React.FC<QRCodeProps> = ({ size = 128 }) => {
  const qrCodeValue = "https://github.com/cemilture";

  return (
    <div>
      <QRCodeReact value={qrCodeValue} size={size} />
      <div>
        <h1>Goes to my GitHub profile</h1>
      </div>
      <em>Made by Cemil Türe</em>
    </div>
  );
};

export default App;
