const HERO_IMAGE_URL =
  'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777671641/q042V-1_1.jpg_1_bjadc6.jpg';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full bg-white pt-3 pb-8 md:pt-4 md:pb-12 lg:pt-6"
    >
      <div className="max-w-7xl mx-auto px-4 w-full h-[55vh] min-h-[380px] md:min-h-[600px] md:h-[calc(100vh-32px)] lg:h-[calc(100vh-48px)]">

        <div
          className="relative w-full h-full flex items-end pb-12 sm:pb-16 md:pb-24 bg-cover bg-bottom bg-no-repeat rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg"
          style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
        >
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

          <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12">
            <h1
              id="hero-heading"
              className="text-white tracking-[-0.05em]"
            >
              <span className="block text-[24px] sm:text-[32px] md:text-[40px] leading-[1.2] ml-[6%]">
                Strength In Every{' '}
                <span className="font-bold italic text-[1.4em] tracking-[-0.07em]">STRAND</span>
                <span className="text-[#14B927] text-[1.4em] font-bold">,</span>
              </span>

              <span className="block text-[28px] sm:text-[40px] md:text-[52px] lg:text-[60px] leading-[1.1] font-bold mt-1 md:mt-2 tracking-[-0.06em]">
                Reliability{' '}
                <span className="font-medium text-[0.7em] tracking-[-0.04em]">
                  In Every Connection.
                </span>
              </span>
            </h1>
          </div>

        </div>

      </div>
    </section>
  );
}
