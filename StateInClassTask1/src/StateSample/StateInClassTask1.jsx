import React, { useState, useRef } from 'react';

function KutuOlustur() {
  const [genislik, setGenislik] = useState(0);
  const [yukseklik, setYukseklik] = useState(0);
  const kutuRef = useRef(null);

  const olustur = () => {
    kutuRef.current.style.width = `${genislik}px`;
    kutuRef.current.style.height = `${yukseklik}px`;
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Genişlik"
        value={genislik}
        onChange={(e) => setGenislik(e.target.value)}
      />
      <input
        type="number"
        placeholder="Yükseklik"
        value={yukseklik}
        onChange={(e) => setYukseklik(e.target.value)}
      />
      <button onClick={olustur}>Oluştur</button>
      <div ref={kutuRef} style={{ border: '1px solid black' }}></div>
    </div>
  );
}

export default KutuOlustur;