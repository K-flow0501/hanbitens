"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#030712] relative">
      {/* Background radial glow */}
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#00d8f6]/3 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[#f59e0b] text-[13px] font-bold tracking-wider uppercase block mb-3">
            우리의 진화
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white tracking-tight">
            전략적 진화: 물리적 에너지에서 사회적 에너지로
          </h2>
        </div>

        {/* 2x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Physical Energy (Top-Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative p-10 bg-[#0b0f19]/60 border border-white/[0.05] rounded-[12px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:border-white/10 hover:bg-[#0b0f19]/80 transition-all duration-300"
          >
            {/* Lightning bolt icon in top right */}
            <Zap className="absolute top-8 right-8 h-24 w-24 text-slate-700/20 group-hover:text-[#00d8f6]/10 transition-colors duration-500 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-[#00d8f6] font-bold text-[20px] mb-4">
                물리적 에너지 (Physical Energy)
              </h3>
              <p className="text-slate-400 text-[14px] leading-[1.65] max-w-[85%] font-light">
                신뢰할 수 있는 물류와 복원력 있는 에너지 네트워크는 현대 산업 안정성의 근간을 형성합니다. 우리는 세상을 움직이는 흐름을 최적화합니다.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Global Trust (Top-Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group p-10 bg-[#0b0f19]/60 border border-white/[0.05] rounded-[12px] min-h-[260px] flex flex-col items-center justify-center text-center overflow-hidden hover:border-white/10 hover:bg-[#0b0f19]/80 transition-all duration-300"
          >
            {/* Gold/Yellow Emblem */}
            <div className="relative mb-5 flex items-center justify-center w-14 h-14 rounded-full border-2 border-dashed border-amber-500/80 group-hover:border-amber-500 group-hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0.5 rounded-full border border-amber-500/30"></div>
              <span className="text-amber-500 text-[9px] font-bold tracking-tighter leading-none select-none text-center">
                한빛이<br />앤에스
              </span>
            </div>

            <h3 className="text-white font-bold text-[18px] mb-3">
              글로벌 신뢰 (Global Trust)
            </h3>
            <p className="text-slate-400 text-[14px] leading-[1.65] max-w-[80%] font-light">
              국경을 넘어 정밀함과 전문적인 안정성을 바탕으로 쌓아 올린 신뢰의 유산입니다.
            </p>
          </motion.div>

          {/* Card 3: Intelligence (Bottom-Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group p-10 bg-[#0b0f19]/60 border border-white/[0.05] rounded-[12px] min-h-[260px] flex flex-col justify-between overflow-hidden hover:border-white/10 hover:bg-[#0b0f19]/80 transition-all duration-300"
          >
            <div>
              {/* Microchip icon box */}
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-[8px] bg-[#00d8f6]/10 text-[#00d8f6] mb-5 border border-[#00d8f6]/15 group-hover:bg-[#00d8f6]/20 transition-all duration-300">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="text-white font-bold text-[18px] mb-3">
                지능화 기술 (Intelligence)
              </h3>
              <p className="text-slate-400 text-[14px] leading-[1.65] max-w-[90%] font-light">
                AI를 활용하여 가공되지 않은 데이터를 실천 가능한 사회적 에너지로 전환합니다.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Social Energy (Bottom-Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group p-10 bg-[#0b0f19]/60 border border-white/[0.05] rounded-[12px] min-h-[260px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden hover:border-white/10 hover:bg-[#0b0f19]/80 transition-all duration-300"
          >
            <div className="flex-1">
              <h3 className="text-white font-bold text-[18px] mb-3">
                사회적 에너지 (Social Energy)
              </h3>
              <p className="text-slate-400 text-[14px] leading-[1.65] font-light">
                디지털 시대에 인간 상호 작용을 보호하고 촉진하는 지능형 시스템을 통해 안전과 조화를 창출합니다.
              </p>
            </div>

            {/* Dotted Circle with users icon */}
            <div className="relative flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full border border-dashed border-[#00d8f6]/30 group-hover:border-[#00d8f6]/60 transition-all duration-500">
              <div className="absolute inset-2 rounded-full border border-white/5 bg-[#030712]/50 flex items-center justify-center">
                <Users className="h-6 w-6 text-[#00d8f6] group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
