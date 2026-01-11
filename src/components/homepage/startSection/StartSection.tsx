import MainContainer from "@/components/container/MainContainer";
import { Testimonial } from "@/types/generalType/generalType";

export function StartSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="border-y border-white/10 py-12">
      <MainContainer>
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-8 md:text-left">
          {testimonials.map((stat) => (
            <div key={stat.name}>
              <div className="text-2xl font-bold tracking-tight text-text_black sm:text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium sm:text-sm">
                {stat.name}
              </div>
              <div className="mt-2 text-[9px] uppercase tracking-widest text-text_black sm:mt-4 sm:text-[10px]">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </section>
  );
}
