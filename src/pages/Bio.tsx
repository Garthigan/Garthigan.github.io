import { Link } from "react-router-dom";
import BioText from "../components/BioText";
import { aboutMe } from "../constants/data";

const linkStyle = "text-[#1772d0] hover:text-[#f09228]";

const Bio = () => (
  <div
    className="min-h-screen bg-white text-black leading-relaxed"
    style={{ fontFamily: "'Lato', Verdana, Helvetica, sans-serif" }}
  >
    <div className="max-w-[820px] mx-auto px-5 py-12 sm:py-16">

      <header className="flex flex-col sm:flex-row gap-8 mb-10 items-start">
        <div
          className="w-[160px] h-[160px] rounded-full overflow-hidden shrink-0 mx-auto sm:mx-0 bg-white"
        >
          <img
            src="/images/Garthi - Edited.png"
            alt={aboutMe.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="text-[28px] font-normal mb-2 text-center sm:text-left">
            {aboutMe.name}
          </h1>
          <p className="text-[14px] text-center sm:text-left">
            <Link to="/" className={linkStyle}>
              Home
            </Link>
            {" / "}
            <a href={`mailto:${aboutMe.email}`} className={linkStyle}>
              Email
            </a>
          </p>
        </div>
      </header>

      <BioText
        text={aboutMe.fullBio}
        className="space-y-4 mb-10"
        paragraphClassName="text-[15px] leading-[1.6] text-black"
      />

      <section>
        <h2 className="text-[16px] font-bold mb-2">Travelled Countries</h2>
        <p className="text-[15px] text-black">
          {aboutMe.travelledCountries.join(", ")}
        </p>
      </section>

    </div>
  </div>
);

export default Bio;
