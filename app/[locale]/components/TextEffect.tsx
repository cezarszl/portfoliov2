import { TypeAnimation } from "react-type-animation";

type TextEffectProps = {
  textEffect1: string;
  textEffect2: string;
  textEffect3: string;
};

const TextEffect: React.FC<TextEffectProps> = ({
  textEffect1,
  textEffect2,
  textEffect3,
}) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        textEffect1,
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        textEffect2,
        1500,
        textEffect3,
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-yellow-400 font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
