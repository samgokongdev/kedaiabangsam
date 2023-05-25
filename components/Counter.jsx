"use client";

import { useState } from "react";

export default function Counter({ price }) {
  const [jumlah, setJumlah] = useState(1);

  async function tambah() {
    setJumlah(jumlah + 1);
  }

  function kurang() {
    if (jumlah == 1) {
      setJumlah(1);
    } else {
      setJumlah(jumlah - 1);
    }
  }

  function formatRupiah(money) {
    return new Intl.NumberFormat("id-ID", {
      style: "decimal",
      // currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  }

  return (
    <form>
      <div className="flex items-center justify-center space-x-4 mt-8">
        <button onClick={kurang} type="button">
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 20H15M35 20C35 21.9698 34.612 23.9204 33.8582 25.7403C33.1044 27.5601 31.9995 29.2137 30.6066 30.6066C29.2137 31.9995 27.5601 33.1044 25.7403 33.8582C23.9204 34.612 21.9698 35 20 35C18.0302 35 16.0796 34.612 14.2597 33.8582C12.4399 33.1044 10.7863 31.9995 9.3934 30.6066C8.00052 29.2137 6.89563 27.5601 6.14181 25.7403C5.38799 23.9204 5 21.9698 5 20C5 16.0218 6.58035 12.2064 9.3934 9.3934C12.2064 6.58035 16.0218 5 20 5C23.9782 5 27.7936 6.58035 30.6066 9.3934C33.4196 12.2064 35 16.0218 35 20Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="text-xl font-bold">{jumlah}</span>
        <button onClick={tambah} type="button">
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 15V20M20 20V25M20 20H25M20 20H15M35 20C35 21.9698 34.612 23.9204 33.8582 25.7403C33.1044 27.5601 31.9995 29.2137 30.6066 30.6066C29.2137 31.9995 27.5601 33.1044 25.7403 33.8582C23.9204 34.612 21.9698 35 20 35C18.0302 35 16.0796 34.612 14.2597 33.8582C12.4399 33.1044 10.7863 31.9995 9.3934 30.6066C8.00052 29.2137 6.89563 27.5601 6.14181 25.7403C5.38799 23.9204 5 21.9698 5 20C5 16.0218 6.58035 12.2064 9.3934 9.3934C12.2064 6.58035 16.0218 5 20 5C23.9782 5 27.7936 6.58035 30.6066 9.3934C33.4196 12.2064 35 16.0218 35 20Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center mt-6 mb-8">
        <span className="font-black text-2xl">
          Total : {formatRupiah(price * jumlah)}
        </span>
      </div>
      <div className="flex mt-3">
        <button className="w-full bg-[#2E302F] text-[#FEFEFE] font-bold tracking-wide px-4 py-2 rounded-lg">
          TAMBAHKAN
        </button>
      </div>
    </form>
  );
}
