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
    <div class=" mdl:px-7 lg:px-10">
        <div>
          <h2
          class="sectionTitle px-[10px]"
          >
            Categories
          </h2>
          <div
          class="xs:block mdl:hidden flex xs:flex-col xs:gap-2 xs:mx-[10px] sml:items-center mt-10"
          >
            <div 
            class="relative"
            >
              <Link
              href="/"
              class="w-full"
              >
                <WomanSmall
                class="object-cover rounded-2xl xs:w-[300px] sm:w-[355px] smlg:w-[405px] sml:w-[480px]"
                />
              </Link>
              <span class="absolute xs:top-5 xs:left-5 sml:top-7 sml:left-7 text-white text-[24px]">Woman</span>
            </div>
            <div>
              <Link
              href="/"
              class="w-full relative"
              >
                <BeginersSmall
                class="object-cover rounded-2xl xs:w-[300px] sm:w-[355px] smlg:w-[405px] sml:w-[480px]"
                />
                 <span class="absolute xs:top-5 xs:left-5 sml:top-7 sml:left-7 text-white text-[24px]">For Beginers</span>
              </Link>
            </div>
            <div>
              <Link
              href="/"
              class="w-full relative"
              >
                <ManSmall
                class="object-cover rounded-2xl xs:w-[300px] sm:w-[355px] smlg:w-[405px] sml:w-[480px]"
                />
                <span class="absolute xs:top-5 xs:left-5 sml:top-7 sml:left-7 text-white text-[24px]">Man</span>
              </Link>
              
            </div>
          </div>
          <div
          class="xs:hidden mdl:flex xs:flex-col gap-2 xs:mx-[10px] sml:items-center mx-auto mt-10 mb-[25px]"
          >
            <div
            class="flex gap-2"
            >
              <div
              class="w-full relative"
              >
                <Link
                href="/"
                class=""
                >
                  <WomanBig
                  class="object-fill rounded-2xl mdl:w-[352px] mdl:h-[464px] lg:w-full"
                  />
                  <span class="absolute xs:top-5 xs:left-5 sml:top-7 sml:left-7 text-white text-[24px]">Woman</span>
                </Link>
              </div>
              <div
              class="w-full relative"
              >
              <Link
              href="/"
                class=""
                >
                  <ManBig
                  class="object-fill rounded-2xl mdl:w-[352px] mdl:h-[464px] lg:w-full"
                  />
                  <span class="absolute xs:top-5 xs:left-5 sml:top-7 sml:left-7 text-white text-[24px]">Man</span>
                </Link>
              </div>
            </div>
            <div>
              <div
              class="w-full relative"
              >
                <Link
                href="/"
                class=""
                >
                  <BeginersBig
                  class="object-fill rounded-2xl mdl:w-[732px] mdl:h-[497px] lg:w-full"
                  />
                  <span class="absolute xs:top-5 xs:left-5 sml:top-7 sml:left-7 text-white text-[24px]">For Beginers</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
});