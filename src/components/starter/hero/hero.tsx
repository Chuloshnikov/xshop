import { component$ } from "@builder.io/qwik";
import HeroImage from "../../../media/images/heroImage.jpg?jsx";
import ScrollDown from "../../../media/icons/ScrollDown.svg?jsx";

interface ButtonProps {
  toDown: () => void;
}

export default component$((props: ButtonProps) => {

  return (
    <div class="xs:w-min-[320px] xs:h-[590px] mdl:min-w-[768px] lg:min-w-[960px] mdl:min-h-[529px] lg:min-w-[1280px] lg:h-[573px]">
      <div 
      class="z-1 relative w-full h-full text-center rounded-b-3xl"
      >
        <HeroImage 
        class="w-full h-full
        object-cover rounded-b-3xl"
        />
        <div
        class="flex flex-col xs:gap-[24px] text-center  lg:gap-10 w-full absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
        >
            <h1 
            class="xs:hidden lg:inline lg:text-5xl xl:text-7xl font-medium mx-auto lg:max-w-[930px] xl:max-w-[1093px]">
                Embrace your desires with sex toys from Love Space Shop
            </h1>
            <h1
            class="xs:inline lg:hidden xs:text-[34px] mdl:text-[46px] font-medium xs:px-[10px] mdl:px-[107px]"
            >
              Unleash Pleasure, Elevate Intimacy
            </h1>
          <p
          class="xs:max-w-[300px] mdl:max-w-[529px] lg:max-w-[403px] mx-auto xs:text-[14px] mdl:text-[16px]"
          >
            Revitalize your senses, and unleash your inner passions with our high-quality products for intimate experiences.
          </p>
          <button
          onClick$={props.toDown}
          class="mx-auto"
          >
            <ScrollDown/>
          </button>
        </div>
      </div>
    </div>
  );
});
