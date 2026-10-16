import BioText from "../components/BioText";
import { aboutMe, publications, education } from "../constants/data";

const linkStyle = "text-[#1772d0] hover:text-[#f09228]";

const pubTypeLabel = (pub: (typeof publications)[number]) =>
  pub.label ?? pub.type.charAt(0).toUpperCase() + pub.type.slice(1);

const MY_NAME_VARIANTS = ["Garthigan Kumarasamy", "K. Garthigan", "Garthigan"];

const boldMyName = (authors: string) => {
  const pattern = new RegExp(`(${MY_NAME_VARIANTS.join("|")})`);
  const parts = authors.split(pattern);
  return parts.map((part, i) =>
    MY_NAME_VARIANTS.includes(part) ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    )
  );
};

const Index = () => (
  <div
    className="min-h-screen bg-white text-black leading-relaxed"
    style={{ fontFamily: "'Lato', Verdana, Helvetica, sans-serif" }}
  >
    <div className="max-w-[820px] mx-auto px-5 py-12 sm:py-16">

      {/* ─── Header ─────────────────────────────────────────────────────── */}
      <header className="flex flex-col-reverse sm:flex-row gap-8 mb-14 items-start">
        <div className="flex-1 min-w-0">
          <h1 className="text-[32px] font-normal mb-1 text-center sm:text-left">
            {aboutMe.name}
          </h1>
          <p className="text-[15px] text-[#555] mb-0.5 text-center sm:text-left">{aboutMe.role}</p>
          <p className="text-[15px] text-[#555] mb-4 text-center sm:text-left">
            Department of Computer Science and Engineering, {aboutMe.affiliation}
          </p>

          <BioText
            text={aboutMe.summary}
            className="space-y-4 mb-5"
            paragraphClassName="text-[15px] leading-[1.6] text-black"
          />

          <p className="text-[14px] text-center sm:text-left">
            <a href={`mailto:${aboutMe.email}`} className={linkStyle}>
              Email
            </a>
            {" / "}
            <a href={aboutMe.links.scholar} target="_blank" rel="noreferrer" className={linkStyle}>
              Google Scholar
            </a>
            {" / "}
            <a href={aboutMe.links.github} target="_blank" rel="noreferrer" className={linkStyle}>
              GitHub
            </a>
            {" / "}
            <a href={aboutMe.links.linkedin} target="_blank" rel="noreferrer" className={linkStyle}>
              LinkedIn
            </a>
          </p>
        </div>

        <div
          className="w-[200px] h-[200px] rounded-full overflow-hidden shrink-0 mx-auto sm:mx-0 bg-white"
        >
          <img
            src="/images/Garthi - Edited.png"
            alt={aboutMe.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </div>
      </header>

      {/* ─── Research ───────────────────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="text-[20px] font-normal border-b border-[#ddd] pb-2 mb-6">
          Research
        </h2>
        <div>
          {publications.map((pub) => (
            <div key={pub.id} className="flex flex-col sm:flex-row gap-5 py-5 border-b border-[#eee] last:border-0">
              {pub.image && (
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full sm:w-[160px] h-[110px] object-contain border border-[#eee] shrink-0 bg-white"
                />
              )}
              <div className="flex-1 min-w-0">
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkStyle} font-bold text-[15px] leading-snug`}
                  >
                    {pub.title}
                  </a>
                ) : (
                  <span className="font-bold text-[15px] leading-snug">{pub.title}</span>
                )}
                <p className="text-[14px] text-[#444] mt-1">{boldMyName(pub.authors)}</p>
                <p className="text-[14px] text-[#666] italic mt-0.5">
                  {pub.conference}, {pub.location} &mdash; {pub.date}
                </p>
                <p className="text-[13px] text-[#888] mt-1">{pubTypeLabel(pub)}</p>
                {pub.demoUrl && (
                  <p className="text-[13px] mt-1">
                    {pub.link && (
                      <>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className={linkStyle}>
                          Paper
                        </a>
                        {" / "}
                      </>
                    )}
                    <a href={pub.demoUrl} target="_blank" rel="noopener noreferrer" className={linkStyle}>
                      Demo
                    </a>
                  </p>
                )}
                {pub.description && (
                  <p className="text-[14px] text-black mt-2 leading-[1.5]">
                    {pub.description.split("\n").map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Education ──────────────────────────────────────────────────── */}
      <section className="mb-14">
        <h2 className="text-[20px] font-normal border-b border-[#ddd] pb-2 mb-6">
          Education
        </h2>
        <div>
          {education.map((edu, i) => (
            <div key={i} className="py-4 border-b border-[#eee] last:border-0">
              <p className="text-[15px] font-bold leading-snug">
                {edu.degree}
                {edu.status === "Reading" && (
                  <span className="font-normal text-[#888]"> (in progress)</span>
                )}
              </p>
              {"department" in edu && edu.department && (
                <p className="text-[14px] text-[#444] mt-0.5">{edu.department}</p>
              )}
              <p className="text-[14px] text-[#444]">{edu.institution}</p>
              <p className="text-[14px] text-[#666] italic mt-0.5">{edu.year}</p>
              {"specialization" in edu && edu.specialization && (
                <p className="text-[14px] text-[#666] mt-1">{edu.specialization}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────────────────── */}
      <footer className="text-[14px] text-[#555] pt-4">
        <p>
          Reach me at{" "}
          <a href={`mailto:${aboutMe.email}`} className={linkStyle}>
            {aboutMe.email}
          </a>
          .
        </p>
        <p className="text-[12px] text-[#999] mt-3 text-right">
          Website source from Jathushan Rajasegaran{" "}
          <a href="https://brjathu.github.io/" target="_blank" rel="noopener noreferrer" className={linkStyle}>
            here
          </a>
          .
        </p>
      </footer>

    </div>
  </div>
);

export default Index;
