"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import brainNetwork from "@/public/brain_network.png";

export default function Hero() {
  return (
    <section id="vision" className="relative pt-10 pb-24 md:py-32 overflow-hidden bg-[#030712]">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d8f6]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[38px] sm:text-[46px] lg:text-[52px] font-bold leading-[1.2] sm:leading-[1.25] tracking-tight mb-8"
            >
              <span className="text-[#00d8f6] drop-shadow-[0_0_15px_rgba(0,216,246,0.15)]">
                미래를 구상하고, 문<br />
                제를 해결합니다:
              </span>
              <br />
              <span className="text-white">
                신뢰의 기술로 미래<br />
                를 비춥니다
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-slate-400 text-[15px] sm:text-[16px] leading-[1.7] mb-10 max-w-xl font-normal"
            >
              우리의 에너지 제어 솔루션은 혁신과 신뢰를 바탕으로 스마트 솔루션을
              제공합니다. 한빛이앤에스는 산업적 유산과 최첨단 혁신을 잇는 가교가 됩니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center bg-[#00d8f6] hover:bg-[#00c5df] text-[#030712] font-bold text-[14px] px-7 h-12 rounded-[4px] shadow-[0_0_20px_rgba(0,216,246,0.25)] hover:shadow-[0_0_25px_rgba(0,216,246,0.4)] transition-all duration-300"
              >
                솔루션 둘러보기
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-[14px] px-6 h-12 rounded-[4px] gap-2 transition-all duration-300"
              >
                <FileText className="h-4.5 w-4.5 text-slate-300" />
                더 정보
              </a>
            </motion.div>
          </div>

          {/* Right Image Content */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[500px] lg:max-w-full aspect-[5/4] sm:aspect-square lg:aspect-[1.1] rounded-[24px] overflow-hidden border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
            >
              <img
                src={brainNetwork.src}
                alt="Hanbit E&S High Tech Neural Network Brain"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/40 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
