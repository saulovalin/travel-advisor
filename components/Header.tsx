"use client";

import React from 'react';

export default function Header() {
  return (
    <header className="bg-sky-950 px-8 py-3 shadow-lg flex flex-col md:flex-row justify-between items-center z-20 relative border-b border-sky-900/40">

      <div 
        className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105" 
        onClick={() => window.location.href = '/'}
      >
        <img 
          src="/images/logotravel.png" 
          alt="Logo Travel" 
          className="h-18 w-auto object-contain"
        />
      </div>

      <div className="flex items-center gap-8">
        <span className="hidden lg:block text-sky-200/70 font-medium tracking-wide text-sm uppercase">
          Explore o mundo
        </span>
        
        <div className="relative bg-white/5 border border-white/10 hover:border-white/20 transition-all rounded-full px-5 py-2.5 flex items-center w-64 md:w-80 shadow-sm focus-within:bg-white focus-within:ring-2 focus-within:ring-sky-500 group">
          <svg className="w-4 h-4 text-sky-400 group-focus-within:text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Busque uma cidade..." 
            className="ml-3 outline-none bg-transparent w-full text-sm text-white focus:text-sky-950 placeholder-sky-400/60"
          />
        </div>
      </div>
    </header>
  );
}