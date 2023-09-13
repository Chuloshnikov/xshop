import { component$ } from "@builder.io/qwik";
import HeroImage from "../../../media/images/heroImage.jpg?jsx";
import ScrollDown from "../../../media/icons/ScrollDown.svg?jsx";


export default component$(() => {
  return (
    <div class="xs:w-[320px] xs:h-[590px] mdl:min-w-[768px] mdl:min-h-[529px] lg:w-[1280px] lg:h-[573px]">
      <div 
      class="z-1 relative w-full h-full text-center rounded-b-3xl"
      >
        <HeroImage 
        class="w-full h-full
        object-cover rounded-b-3xl"
        />
        <div
        class="flex flex-col xs:gap-[24px] lg:gap-10 w-full absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
        >
          <h1 class="xs:hidden lg:inline text-7xl font-medium  px-[93px]">
              Embrace your desires with sex toys from Love Space Shop
          </h1>
          <h2
          class="xs:inline lg:hidden text-[46px] font-medium  px-[93px]"
          >
            Unleash Pleasure, Elevate Intimacy
          </h2>
          <p
          class="xs:px-[10px] mdl:px-[120px] lg:px-[438px] xs:text-[14px] mdl:text-[16px]"
          >
            Revitalize your senses, and unleash your inner passions with our high-quality products for intimate experiences.
          </p>
          <button
          class="mx-auto"
          >
            <ScrollDown/>
          </button>
        </div>
      </div>
    </div>
  );
});
