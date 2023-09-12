import { component$ } from "@builder.io/qwik";
import HeroImage from "../../../media/images/heroImage.jpg?jsx";
import ScrollDown from "../../../media/icons/ScrollDown.svg?jsx";


export default component$(() => {
  return (
    <div class="w-[1280px] h-[573px]">
      <div 
      class="z-1 relative w-full h-full text-center rounded-b-3xl"
      >
        <HeroImage 
        class="w-full h-full
        object-cover rounded-b-3xl"
        />
        <div
        class="flex flex-col gap-10 w-full absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
        >
          <h1 class=" text-7xl font-medium  px-[93px]">
              Embrace your desires with sex toys from Love Space Shop
          </h1>
          <p
          class="px-[438px]"
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
