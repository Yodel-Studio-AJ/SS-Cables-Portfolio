const SECTION_IMAGE_URL =
  'https://res.cloudinary.com/dmnew7sbj/image/upload/v1777726238/A_person_in_a_light_suit_speaks_on_stage_with_a_vivid_celestial-themed_background._wznnlj.png';

export default function HouseWiringSection() {
  return (
    <section
      aria-label="House Wiring Cables"
      className="w-full bg-white pb-16 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div
          className="relative w-full h-[50vh] min-h-[400px] md:h-[500px] lg:h-[550px] flex items-end pb-6 sm:pb-8 md:pb-12 lg:pb-16 bg-cover bg-center bg-no-repeat rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg"
          style={{ backgroundImage: `url('${SECTION_IMAGE_URL}')` }}
        >
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

          <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 antialiased">
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-4 sm:mb-6 tracking-[-0.03em]">
              <span className="font-[100]">House Wiring </span>
              <span className="italic font-light">Cables</span>
              <span className="text-[#14B927] font-bold">.</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg md:text-[20px] leading-[1.6] max-w-2xl font-[100]">
              Discover our premium range of House Wiring Cables designed for safe, efficient, and
              long-lasting electrical installations in homes and residential buildings. Made with
              high-quality PVC insulation, these wires offer excellent conductivity, fire resistance,
              and durability for all your domestic electrical needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
