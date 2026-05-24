"use client";

import Link from "next/link";
import { Globe, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/[0.05] pt-16 pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Column (Logo & Description) */}
          <div className="md:col-span-8 flex flex-col justify-between h-full">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6">
                <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                  <span className="bg-[#00d8f6] rounded-xs"></span>
                  <span className="bg-[#00a8ff] rounded-xs"></span>
                  <span className="bg-[#00d8f6] rounded-xs"></span>
                  <span className="bg-[#00d8f6] rounded-xs"></span>
                </div>
                <div className="flex items-center text-xl font-bold tracking-tight">
                  <span className="text-[#00d8f6]">Hanbit</span>
                  <span className="text-white ml-1.5 font-semibold">E&S</span>
                </div>
              </div>

              {/* Description & Copyright */}
              <p className="text-slate-500 text-[13px] sm:text-[14px] leading-[1.65] max-w-xl mb-8 font-light">
                &copy; 2024 한빛이앤에스. All rights reserved. 우리는 미래를 위한 지능형 인프라, 산업 유산과 지능형 스마트 시스템을 연결할 수 있습니다.
              </p>
            </div>

            {/* Social/Contact Icons */}
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="#"
                aria-label="Global"
                className="hover:text-white transition-colors duration-200"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@hanbit-es.com"
                aria-label="Email"
                className="hover:text-white transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Column (Navigation Links) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8 md:text-right">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <Link
                href="#privacy"
                className="text-[13px] sm:text-[14px] text-slate-400 hover:text-white transition-colors duration-200"
              >
                개인정보방침
              </Link>
              <Link
                href="#esg"
                className="text-[13px] sm:text-[14px] text-slate-400 hover:text-white transition-colors duration-200"
              >
                지속가능경영
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <Link
                href="#terms"
                className="text-[13px] sm:text-[14px] text-slate-400 hover:text-white transition-colors duration-200"
              >
                이용약관
              </Link>
              <Link
                href="#global"
                className="text-[13px] sm:text-[14px] text-slate-400 hover:text-white transition-colors duration-200"
              >
                글로벌 오피스
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
