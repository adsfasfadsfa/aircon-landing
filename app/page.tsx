'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [formData, setFormData] = useState({ address: '', area: '', count: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("견적 문의 접수:", formData);
    alert("견적 문의가 접수되었습니다! 곧 전문 상담원이 연락드릴게요.");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-12 bg-white">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">30초 만에 시스템 에어컨 견적 확인</h1>
        <p className="text-gray-600">복잡한 상담 없이 빠르게 비용을 계산해 드립니다.</p>
      </header>

      <section className="bg-blue-50 p-8 rounded-xl shadow-md border border-blue-100">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 주소 입력 필드 */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-700">설치할 곳 주소</label>
            <div className="flex gap-2">
              <input 
                className="flex-1 p-3 border rounded" 
                placeholder="도로명 주소 (예: 강남구 테헤란로 123 강남아파트 101동)" 
                onChange={(e) => setFormData({...formData, address: e.target.value})} 
                required 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <input className="p-3 border rounded" placeholder="아파트 평형 (예: 34평)" onChange={(e) => setFormData({...formData, area: e.target.value})} required />
            <input className="p-3 border rounded" placeholder="설치 대수 (예: 4대)" onChange={(e) => setFormData({...formData, count: e.target.value})} required />
          </div>
          
          <input 
            className="w-full p-3 border rounded" 
            type="tel" 
            placeholder="휴대폰 번호 (예: 010-0000-0000)" 
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            onChange={(e) => setFormData({...formData, phone: e.target.value})} 
            required 
          />
          
          <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-lg font-bold hover:bg-blue-700 transition">
            견적 문의하기
          </button>
        </form>
      </section>

      {/* 신뢰 문구 수정 */}
      <section className="grid grid-cols-3 gap-4 text-center text-sm text-gray-600">
        <div className="bg-gray-50 p-3 rounded-lg border">✅ 설치 책임 실명제</div>
        <div className="bg-gray-50 p-3 rounded-lg border">✅ 당일 완벽 설치</div>
        <div className="bg-gray-50 p-3 rounded-lg border">✅ 투명한 가격</div>
      </section>
    </div>
  );
}