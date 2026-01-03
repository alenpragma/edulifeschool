import MainContainer from "@/components/container/MainContainer";

export function StartSection() {
  const stats = [
    { label: "Hours of learning", value: "2,500+", company: "Live sessions" },
    { label: "Career success rate", value: "94%", company: "Alumni network" },
    { label: "Projects built", value: "1,200+", company: "Real-world tech" },
    { label: "Mentors joined", value: "50+", company: "Industry experts" },
  ];

  return (
    <section className="border-y border-white/10 py-12 ">
      <MainContainer>
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8 md:text-left">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-bold tracking-tight text-text_black sm:text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium sm:text-sm">
                {stat.label}
              </div>
              <div className="mt-2 text-[9px] uppercase tracking-widest text-text_black sm:mt-4 sm:text-[10px]">
                {stat.company}
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </section>
  );
}
