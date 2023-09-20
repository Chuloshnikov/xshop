import { component$, $ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import CloseIcon from "../../../../media/icons/closeIcon.svg?jsx";

export interface AdultModalProps {
  close: PropFunction<() => void>
}


export default component$<AdultModalProps>((props) => {

  const GoBackButton = $(() => {
        window.history.back();
  })
  
  return (
    <div
    class="fixed top-0 left-0 w-full h-[785%] z-50 bg-black"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
      class="xs:mt-[40%] sml:mt-[30%] mdl:mt-[20%] xl:mx-auto xl:mt-[10%] max-w-container"
      >
        <div
        class="xs:max-w-[300px] sm:max-w-[340px] lg:max-w-[596px] rounded-3xl bg-mainBg mx-auto z-50 text-accentBg font-medium p-3"
        >
          <div
          onClick$={props.close}
          class="flex justify-end items-end cursor-pointer"
          >
            <CloseIcon/>
          </div>
          <div
          class="text-center my-[80px] xs:px-6 lg:px-0 flex flex-col gap-4"
          >
            <h3
            class="text-2xl"
            >
              LoveSpace contains adult content
            </h3>
            <p>Are you already 18 years old?</p>
            <div
            class="flex justify-center gap-3 text-base mt-[24px]"
            >
              <button
              onClick$={GoBackButton}
              class="px-7 py-2 border-[1px] border-accentBg rounded-lg"
              >
                No
              </button>
              <button
              class=" text-mainBg px-7 py-2 bg-accentBg rounded-lg"
              onClick$={props.close}
              >
                  Yes
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
});