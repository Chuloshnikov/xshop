import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import WomanSmall from "../../../media/images/womanSmall.jpg?jsx";
import WomanBig from "../../../media/images/womanBig.jpg?jsx";
import ManSmall from "../../../media/images/manmall.jpg?jsx";
import ManBig  from "../../../media/images/manBig.jpg?jsx";
import BeginersSmall from "../../../media/images/beginersSmall.jpg?jsx";
import BeginersBig from "../../../media/images/beginersBig.jpg?jsx";



export default component$(() => {
  return (
    <div>
        <div>
          <h2
          class="sectionTitle px-[10px]"
          >
            Categories
          </h2>
          <div
          class="flex xs:flex-col xs:gap-2 xs:mx-[10px] sml:items-center mt-6"
          >
            <div>
              <Link
              href="/"
              class="w-full"
              >
                <WomanSmall
                class="object-cover rounded-2xl xs:w-[300px] sm:w-[355px] smlg:w-[405px] sml:w-[480px]"
                />
              </Link>
            </div>
            <div>
              <Link
              href="/"
              class="w-full"
              >
                <BeginersSmall
                class="object-cover rounded-2xl xs:w-[300px] sm:w-[355px] smlg:w-[405px] sml:w-[480px]"
                />
              </Link>
            </div>
            <div>
              <Link
              href="/"
              class="w-full"
              >
                <ManSmall
                class="object-cover rounded-2xl xs:w-[300px] sm:w-[355px] smlg:w-[405px] sml:w-[480px]"
                />
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
});