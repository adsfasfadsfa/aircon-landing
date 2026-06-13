'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [formData, setFormData] = useState({ address: '', area: '', count: '', phone: '' });

  return (

    <div className="max-w-md mx-auto p-3 space-y-6 bg-white min-h-screen">
      {/* 수정된 헤더 영역 */}
      <header className="flex flex-col items-center pt-6 pb-2 space-y-3">
        <div className="w-24 h-24 rounded-full overflow-hidden shadow-md border-2 border-gray-100">
          <img src="/logo.png" alt="SibaDog 로고" className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">SibaDog 견적</h1>
          <p className="text-sm text-gray-600">30초 만에 끝나는 시스템 에어컨 견적</p>
        </div>
      </header>
      
      {/* ... (아래 폼 내용은 그대로 두세요) */}
      <section className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200">
        {/* ... */}
    
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="space-y-4"
        >
          {/* 인증키는 딱 하나만 있으면 됩니다 */}
          <input type="hidden" name="access_key" value="01549808-f857-4117-9b8b-1c103b7f1577" />

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">설치할 곳 주소</label>
            <input 
              name="address"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none text-sm" 
              placeholder="도로명 주소 입력" 
              onChange={(e) => setFormData({...formData, address: e.target.value})} 
              required 
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <input name="area" className="p-3 border-2 border-gray-300 rounded-lg outline-none text-sm" placeholder="평형" onChange={(e) => setFormData({...formData, area: e.target.value})} required />
            <input name="count" className="p-3 border-2 border-gray-300 rounded-lg outline-none text-sm" placeholder="대수" onChange={(e) => setFormData({...formData, count: e.target.value})} required />
          </div>
          
          <input 
            name="phone"
            className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none text-sm" 
            type="tel" 
            placeholder="연락처 (010-0000-0000)" 
            onChange={(e) => setFormData({...formData, phone: e.target.value})} 
            required 
          />
          
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition">
            견적 확인하기
          </button>
        </form>
      </section>

      <section className="grid grid-cols-3 gap-2 text-center">
        {["책임실명", "당일설치", "투명가격"].map((text) => (
          <div key={text} className="bg-gray-50 p-2 rounded-lg border border-gray-200 text-[10px] font-bold text-gray-700">
            ✅ {text}
          </div>
        ))}
      </section>
    </div>
  );
}