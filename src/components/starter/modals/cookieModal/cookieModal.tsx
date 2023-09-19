import { component$ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";

export interface CookueModalProps {
  close: PropFunction<() => void>
}

export default component$<CookueModalProps>((props) => {
  
  return (
    <div 
    class="absolute top-10 left-10 z-50"
    >
      <div>
         <button
         onClick$={props.close}
         >Close</button>
      </div>
    </div>
  );
});