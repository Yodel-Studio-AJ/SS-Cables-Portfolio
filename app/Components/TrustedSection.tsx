import Image from 'next/image';

type Logo = {
  url: string;
  alt: string;
};

const logos: Logo[] = [
  {
    url: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777723738/south-bihar-power-distribution-co-ltd-aurangabad-bihar-electricity-suppliers-hj3ncnnaoa-250_1_tuivwz.png',
    alt: 'South Bihar Power Distribution Co Ltd',
  },
  {
    url: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777723742/unnamed_1_iqurcx.png',
    alt: 'Bihar Electricity Board',
  },
  {
    url: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777723746/1a0cec36ab54ad063a8a10f022348793_1_a2rlcf.png',
    alt: 'NEEPCO',
  },
  {
    url: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777723750/apepdcl-mandapeta-east-godavari-wddeeplvmc_1_hrjonz.png',
    alt: 'APEPDCL',
  },
  {
    url: 'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777723756/Indian_Railways.svg_2_mnyb6q.png',
    alt: 'Indian Railways',
  },
];

const logoSizeClass = (index: number) =>
  index < 2
    ? 'h-[100px] sm:h-[120px] md:h-[135px] lg:h-[145px]'
    : 'h-[80px] sm:h-[100px] md:h-[115px] lg:h-[120px]';

export default function TrustedSection() {
  return (
    <section
      aria-label="Trusted Partners"
      className="w-full bg-white py-12 md:py-16"
    >
      <div className="max-w-[1200px] mx-auto px-4 w-full flex flex-col items-center">

        <h2 className="text-[40px] md:text-[50px] lg:text-[60px] font-light leading-[1.2] tracking-[-1px] lg:tracking-[-2px] text-[#3B3B3B] text-center mb-4 lg:mb-6">
          Tested. Deployed. Trusted.
        </h2>

        <p className="text-[18px] md:text-[20px] lg:text-[25px] font-light leading-[1.4] lg:leading-[1.5] text-[#3B3B3B] text-center max-w-[1000px] mx-auto mb-12 lg:mb-16">
          SS Cable combines advanced engineering with proven field performance,
          <br className="hidden md:block" />
          delivering measurable results for utilities modernizing their transmission infrastructure.
        </p>

        <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={logo.url}
              className={`relative w-auto flex items-center justify-center ${logoSizeClass(index)}`}
            >
              <Image
                src={logo.url}
                alt={logo.alt}
                width={300}
                height={150}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
