// components/SkillCard.tsx

type SkillCardProps = {
  title: string;
  desc: string;
  tech: string[];
};

const SkillCard = ({ title, desc, tech }: SkillCardProps) => {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[240px] flex flex-col justify-between">
      <div>
        <h3 className="font-inconsolata text-[30px] font-light">
          {title}
        </h3>

        <p className="mt-3 text-[13px] text-[#7D7D7D] leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1 rounded-full bg-zinc-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;