'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [formData, setFormData] = useState({ address: '', area: '', count: '', phone: '' });

  return (
    <div className="max-w-md mx-auto p-3 space-y-6 bg-white min-h-screen">
      <header className="text-center pt-6 pb-2">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">30초 시스템 에어컨 견적</h1>
        <p className="text-sm text-gray-600">상담 없이 빠르게 비용을 계산하세요.</p>
      </header>

      <section className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200">
        {/* 핵심 1: form 태그에 action과 method 추가 */}
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="space-y-4"
        >
          {/* 핵심 2: 인증키 입력 (가장 중요!) */}
          <input type="hidden" name="access_key" value="01549808-f857-4117-9b8b-1c103b7f1577" />

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">설치할 곳 주소</label>
            {/* 핵심 3: name 속성 반드시 추가 (이 이름으로 메일이 옵니다) */}
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