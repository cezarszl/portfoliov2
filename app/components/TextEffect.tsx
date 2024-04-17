import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "A passionate",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Full-Stack",
        1500,
        "webdeveloper",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-yellow-400 font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
