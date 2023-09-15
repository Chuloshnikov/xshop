import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import InstagramIcon from "../../../media/icons/InstagramIcon.svg?jsx";
import TwitterIcon from "../../../media/icons/TwitterIcon.svg?jsx";
import TiktokIcon from "../../../media/icons/TiktokIcon.svg?jsx";
import YoutubeIcon from "../../../media/icons/YoutubeIcon.svg?jsx";
import LinkedinIcon from "../../../media/icons/LinkedinIcon.svg?jsx";
import UpButton from "../../../media/icons/UpButton.svg?jsx";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="max-w-container xs:px-[10px]">
      <div 
      class="rounded-3xl bg-accentBg text-mainBg w-full w-full xs:mb-[17px] mdl:mb-[22px] xl:mb-[24px] pb-5"
      >
        {/* form and icons start*/}
        <div
        class=""
        >
          {/*form title and icons start*/}
          <div
          class="px-4 pt-[32px] flex flex-col gap-3"
          >
            
            <p
            class="xs:text-[18px]"
            >Let&#039;s stay in touch.</p>
            <div
            class="z-15 border-accentBg2 border-[1px] rounded-3xl h-[41px] p-[2px]"
            >
              <form
              class="flex items-center justify-between text-center"
              >
              <input
                  class="bg-accentBg border-none text-accentBg2 text-[16px] ml-4 max-w-[146px] my-auto"
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
          class="px-4 pt-[74px] flex flex-col gap-3"
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
        class="px-4 pt-[44px] flex gap-3" 
        >
          <div
          class="flex gap-11 text-sm"
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
              <UpButton/>
            </div>
          </div>
        </div>
        {/* links and upbutton end*/}
        <div
        class="text-sm text-accentBg2 flex flex-col text-center mt-[52px]"
        >
          <div
          class="flex justify-evenly"
          >
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
          <div
          class="mt-7"
          >
            <p
            class="text-xs"
            >Designed by Kolodiazhenskyi</p>
          </div>
          <div
          class="text-xs mt-7"
          >
            <p>© 2023 | LoveSpace | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
});
