import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import React, { useState, useRef } from 'react';
import Header from '../../../layout/Header';
import Layout from '../../../layout';
import Authorsidebar from './Authorsidebar';


function App() {
  const [text, setText] = useState('');
  const qrRef = useRef();

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qr-code.png';
    a.click();
  };

  return (
    <Layout>
    <div className='flex'>
    <Authorsidebar/>
    <div className="flex-1 p-10 bg-gray-100 h-[580px] justify-center flex  ">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL"
          className="w-full p-3 border rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="my-4 flex justify-center" ref={qrRef}>
          {text && <QRCodeCanvas value={text} size={200} />}
        </div>

        {text && (
          <button
            onClick={downloadQRCode}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Download QR Code
          </button>
        )}

        <p className="text-gray-500 text-sm mt-4">Your QR code updates live as you type.</p>
      </div>
    </div>
    </div>
    </Layout>
  );
}

export default App;
