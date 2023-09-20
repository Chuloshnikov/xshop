import { component$ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface CookueModalProps {
  close: PropFunction<() => void>
}

export default component$<CookueModalProps>((props) => {
  
  return (
    <div 
    class="fixed left-0 top-0 z-50 xs:ml-2 mdl:ml-10 lg:ml-[100px] xs:mt-[100%] sm:mt-[90%] md:mt-[70%] mdl:mt-[50%] lg:mt-[30%]"
    >
      <div
      class=" 
      z-50 xs:text-sm lg:text-base xs:max-w-[300px] lg:max-w-[410px] bg-white flex justify-between p-3 border-[1px] border-accentBg rounded-md"
      >
        <div>
          <p
          class="text-accentBg"
          >
            This website uses cookies.
          </p>
          <Link
          href="https://en.wikipedia.org/wiki/Cookie"
          class="xs:text-sm lg:text-base text-red-600 underline"
          >
            Learn more
          </Link>
        </div>
         <button
         class="xs:px-5 mdl:px-6 py-2 bg-accentBg text-white rounded-md"
         onClick$={props.close}
         >
          Ok
         </button>
      </div>
    </div>
  );
});