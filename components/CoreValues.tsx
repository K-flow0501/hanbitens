"use client";

import { motion } from "framer-motion";
import { Dumbbell, Handshake, Brain } from "lucide-react";

const valueCards = [
  {
    icon: Dumbbell,
    iconColor: "text-[#00d8f6]",
    iconBg: "bg-[#00d8f6]/10 border-[#00d8f6]/20",
    title: "지성과 통찰 (체)",
    description: "건강을 뜻하는 체력, 우리는 신체적 웰빙이 고성능 지속 가능한 혁신의 기초가 되는 환경을 육성합니다.",
  },
  {
    icon: Handshake,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    title: "지성과 통찰 (덕)",
    description: "높은 성장과 윤리, 정직에 대한 표준덕을 세우는 것을 뜻합니다. 우리에게 투명성은 상호 신뢰와 유대 구축에 최우선 가치입니다.",
  },
  {
    icon: Brain,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-400/10 border-emerald-400/20",
    title: "지성과 통찰 (지)",
    description: "창의적인 문제 해결, 우리는 내일의 복잡한 기술 문제를 해결하기 위해 평생 학습과 전략적 지성을 장려합니다.",
  }
];

export default function CoreValues() {
  return (
    <section id="culture" className="py-24 bg-[#030712] relative">
      <div className="container">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-16 pb-6 border-b border-white/[0.04]">
          {/* Left Title */}
          <div className="md:col-span-7">
            <span className="text-[#00d8f6] text-[13px] font-bold tracking-wider uppercase block mb-3">
              기술 중심의 혁신
            </span>
            <h2 className="text-3xl md:text-[34px] font-bold text-white tracking-tight">
              체·덕·지 (體·德·智)
            </h2>
          </div>

          {/* Right Quote */}
          <div className="md:col-span-5 md:text-right">
            <p className="text-slate-400 text-[14px] md:text-[15px] italic leading-relaxed font-light">
              &ldquo;조직 DNA의 세 가지 기둥으로서 신체적 강인함과<br className="hidden lg:block" /> 윤리적 지혜의 균형을 이룹니다.&rdquo;
            </p>
          </div>
        </div>

        {/* 3-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 bg-[#0b0f19]/60 border border-white/[0.05] rounded-[12px] min-h-[250px] flex flex-col justify-start hover:border-white/10 hover:bg-[#0b0f19]/80 transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className={`inline-flex items-center justify-center h-12 w-12 rounded-full border mb-6 ${card.iconBg}`}>
                  <Icon className={`h-5 w-5 ${card.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-[18px] mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-[14px] leading-[1.65] font-light">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
