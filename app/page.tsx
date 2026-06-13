'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [formData, setFormData] = useState({ address: '', area: '', count: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("견적 문의 접수:", formData);
    alert("견적 문의가 접수되었습니다! 곧 전문 상담원이 연락드릴게요.");
  };

 // ... 상단 코드는 그대로 유지

'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [formData, setFormData] = useState({ address: '', area: '', count: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("견적 문의가 접수되었습니다!");
  };

  return (
    // 여백(p-4)을 줄이고 화면 최대 너비를 조금 더 좁혀서 모바일에 최적화했습니다.
    <div className="max-w-md mx-auto p-3 space-y-6 bg-white min-h-screen">
      <header className="text-center pt-6 pb-2">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">
          30초 시스템 에어컨 견적
        </h1>
        <p className="text-sm text-gray-600">상담 없이 빠르게 비용을 계산하세요.</p>
      </header>

      {/* 폼 영역의 여백과 그림자를 조정하여 공간 효율을 높였습니다 */}
      <section className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-700">설치할 곳 주소</label>
            <input 
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 outline-none text-sm" 
              placeholder="도로명 주소 입력" 
              onChange={(e) => setFormData({...formData, address: e.target.value})} 
              required 
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <input className="p-3 border-2 border-gray-300 rounded-lg outline-none text-sm" placeholder="평형" onChange={(e) => setFormData({...formData, area: e.target.value})} required />
            <input className="p-3 border-2 border-gray-300 rounded-lg outline-none text-sm" placeholder="대수" onChange={(e) => setFormData({...formData, count: e.target.value})} required />
          </div>
          
          <input 
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

      {/* 신뢰 문구의 크기를 더 줄여 한 줄에 보이도록 했습니다 */}
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
}