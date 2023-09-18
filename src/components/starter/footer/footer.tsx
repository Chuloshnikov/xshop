import { component$, $ } from "@builder.io/qwik";
import type { PropFunction } from "@builder.io/qwik";
import InstagramIcon from "../../../media/icons/InstagramIcon.svg?jsx";
import TwitterIcon from "../../../media/icons/TwitterIcon.svg?jsx";
import TiktokIcon from "../../../media/icons/TiktokIcon.svg?jsx";
import YoutubeIcon from "../../../media/icons/YoutubeIcon.svg?jsx";
import LinkedinIcon from "../../../media/icons/LinkedinIcon.svg?jsx";
import UpButton from "../../../media/icons/UpButton.svg?jsx";
import { Link } from "@builder.io/qwik-city";


interface ButtonProps {
  toUp: () => void;
}


export default component$((props: ButtonProps) => {

  

  return (
    <footer class="w-full max-w-[1237px] xs:px-[10px] mdl:px-[32px]">
      <div 
      class="rounded-3xl bg-accentBg text-mainBg xs:mb-[17px] mdl:mb-[22px] xl:mb-[24px] pb-5"
      >
        <div
        class="flex xs:flex-col md:flex-row md:justify-between mdl:min-h-[400px]"
        >
          {/* form and icons start*/}
          <div
          class="max-w-full"
          >
            {/*form title and icons start*/}
            <div
            class="xs:px-4 mdl:px-0 mdl:ml-[48px] pt-[32px] flex flex-col gap-3 max-w-[349px]"
            >
              
              <p
              class="xs:text-[18px] lg:text-[40px]"
              >Let&#039;s stay in touch.</p>
              <div
              class="z-15 border-accentBg2 border-[1px] rounded-3xl h-[41px] p-[2px]"
              >
                <form
                class="flex items-center justify-between text-center"
                >
                <input
                    class="bg-accentBg border-none text-accentBg2 text-[16px] ml-4 xs:max-w-[146px] sm:max-w-[230px] my-auto"
                    type="text"
                    placeholder="Email"
                    />
                    <button
                    class="py-[10px] px-5 text-[14px] rounded-3xl bg-accentBg2"
                    >
                      Sign Up
                    </button>
                </form>
              </div>
              
            </div>
            <div
            class="xs:px-4 mdl:px-0 mdl:ml-[48px] xs:mt-[44px] mdl:mt-[31px] lg:mt-[143px] flex flex-col gap-3"
            >
              <p
              class="text-sm"
              >
                Följ oss
              </p>
              <div
              class="flex gap-[6.34px]"
              >
                <Link href="/">
                  <InstagramIcon/>
                </Link>
                <Link href="/">
                  <TwitterIcon/>
                </Link>
                <Link href="/">
                  <TiktokIcon/>
                </Link>
                <Link href="/">
                  <YoutubeIcon/>
                </Link>
                <Link href="/">
                  <LinkedinIcon/>
                </Link>
              </div>
            </div>
          </div>
          {/* form and icons ens*/}
        {/* links and upbutton start*/}
        <div
        class="px-4 lg:px-8 flex xs:gap-3 xl:gap-[140px] sm:justify-between" 
        >
          <div
          class="flex xs:gap-11 mdl:gap-[85px] lg:gap-[111px] text-sm xs:mt-[44px] mdl:pt-[100px] lg:pt-[32px] lg:mt-0"
          >
            <div
            class="flex flex-col"
            >
              <p
              class="text-accentBg2 text-base"
              >
                Categories
              </p>
                <Link href="/">Woman</Link>
                <Link href="/">Man</Link>
                <Link href="/">For noubies</Link>
                <Link href="/">For Pairs</Link>
                <Link href="/">Fetish</Link>
                <Link href="/">Brands</Link>
            </div>
            <div
            class="flex flex-col"
            >
              <p
              class="text-accentBg2 text-base"
              >
                Categories
              </p>
                <Link href="/">WAbout us</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
            </div>
          </div>
          <div
          class="flex flex-col justify-end items-end"
          >
            <div>
              <UpButton
              onClick$={props.toUp}
              />
            </div>
          </div>
        </div>
      </div>
        {/* links and upbutton end*/}
        <div
        class="relative text-sm text-accentBg2 flex flex-col mdl:gap-[31px] text-center mt-[52px]"
        >
          <div
          class="flex lg:text-base xs:justify-evenly mdl:justify-center mdl:gap-[50px] xl:absolute xl:right-[38%]"
          >
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
          <div
          class="flex xs:flex-col mdl:flex-row-reverse mdl:justify-between mdl:px-14 lg:px-8"
          >
            <div
            class="xs:mt-7 mdl:mt-0"
            >
              <p
              class="text-xs lg:text-base"
              >Designed by Kolodiazhenskyi</p>
            </div>
            <div
            class="text-xs lg:text-base xs:mt-7 mdl:mt-0"
            >
              <p>© 2023 | LoveSpace | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
