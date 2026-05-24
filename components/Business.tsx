"use client";

import { motion } from "framer-motion";
import { Video, Sun, Shield, ScanFace, Eye, Car } from "lucide-react";

const portfolioData = [
  {
    category: "AI 영상 분석",
    categoryColor: "text-[#00d8f6]",
    iconBg: "bg-[#00d8f6]/10 border-[#00d8f6]/20 text-[#00d8f6]",
    icon: Eye,
    title: "Snatch Cube",
    description: "규남 포착 AI를 활용하여 여러 노드에서의 실시간 작업도나 객체를 식별하고 추적하는 혁신적인 솔루션입니다.",
    linkIcon: Video,
    linkColor: "text-[#00d8f6] hover:text-[#00c5df]",
    linkGlow: "group-hover:shadow-[0_0_15px_rgba(0,216,246,0.2)]"
  },
  {
    category: "생체 인식",
    categoryColor: "text-amber-500",
    iconBg: "bg-amber-500/10 border-amber-500/20 text-amber-500",
    icon: ScanFace,
    title: "AI PASS",
    description: "위변조가 불가능한 보안 제어를 지원하는 지능형 얼굴 인식기입니다. 고성능 엔진을 탑재해 정밀 매칭을 지원합니다.",
    linkIcon: Sun,
    linkColor: "text-amber-500 hover:text-amber-400",
    linkGlow: "group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
  },
  {
    category: "노상무인시스템",
    categoryColor: "text-rose-500",
    iconBg: "bg-rose-500/10 border-rose-500/20 text-rose-500",
    icon: Car,
    title: "Bind CAR",
    description: "기업 클라우드 도로 안전을 위해 차량 번호 인지 레이더를 사용하며 불법 주차를 방지하는 통합 솔루션입니다.",
    linkIcon: Shield,
    linkColor: "text-rose-500 hover:text-rose-400",
    linkGlow: "group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]"
  }
];

export default function Business() {
  return (
    <section id="portfolio" className="py-24 bg-[#030712] relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d8f6]/2 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white tracking-tight mb-4">
            핵심 기술 포트폴리오
          </h2>
          <p className="text-slate-400 text-[14px] sm:text-[15px] leading-relaxed">
            첨단 생체 인식 및 스마트 제어를 통해 미래를 보호하는 혁신적인 솔루션입니다.
          </p>
        </div>

        {/* 3-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.map((item, index) => {
            const Icon = item.icon;
            const LinkIcon = item.linkIcon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col justify-between p-8 bg-[#0b0f19]/60 border border-white/[0.05] rounded-[12px] min-h-[380px] hover:border-white/10 hover:bg-[#0b0f19]/80 transition-all duration-300"
              >
                <div>
                  {/* Top Icon Box */}
                  <div className={`inline-flex items-center justify-center h-10 w-10 rounded-[8px] border mb-6 ${item.iconBg}`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Category */}
                  <span className={`text-[12px] font-bold tracking-wider block mb-2 ${item.categoryColor}`}>
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-white font-bold text-[22px] mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-[14px] leading-[1.65] font-light">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Link */}
                <div className="mt-8 pt-6 border-t border-white/[0.04]">
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-[13px] font-bold transition-colors ${item.linkColor}`}
                  >
                    <LinkIcon className="h-4.5 w-4.5" />
                    <span>자세히 보기</span>
                    <span className="transition-transform group-hover:translate-x-1 duration-200">
                      &rarr;
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
