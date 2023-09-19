import { component$ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";

export interface AdultModalProps {
  close: PropFunction<() => void>
}

export default component$<AdultModalProps>((props) => {
  
  return (
    <div
    class="absolute top-0 left-0 w-full h-[785%] z-50 bg-black "
    >
      <div
      class="mt-10"
      >
        <button
        class="text-4xl font-bold text-white z-50"
        onClick$={props.close}
        >
            Close adult
        </button>
      </div>
    </div>
  );
});