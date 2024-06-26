import { component$ } from "@builder.io/qwik";
import { 
  AccordionRoot, 
} from '@qwik-ui/headless';
import ToContactsIcon from "../../../media/icons/ReadAllIcon.svg?jsx";
import { Link } from "@builder.io/qwik-city";
import FaqItem from "./FaqItem";





export default component$(() => {


  return (
    <div class="max-w-container xs:px-[10px] mdl:px-[38px] lg:px-[40px]">
      <div
      class="border-[1px] border-accentBg xs:mb-8 lg:mb-14 rounded-3xl xs:p-[10px] mdl:px-[32px] xs:py-5 lg:py-10"
      >
        <div
        class="lg:flex justify-between">
          <div
          class="xs:hidden lg:flex lg:flex-col lg:justify-between lg:w-4/10"
          >
            <div
            class="flex flex-col gap-4 font-medium"
            >
              <h3
                class="sectionTitle"
                >
                  Jag ser svaret
              </h3>
              <p
              class="text-base text-accentBg"
              >
                Om du har ytterligare frågor, skriv till oss.
              </p>
            </div>
            <Link
                href="/"
                class="lg:flex text-base font-medium text-accentBg xs:py-1 sm:py-2 xs:px-3 sm:px-5 flex items-center border-[1px] border-accentBg rounded-3xl gap-2 xs:mt-2 mdl:mt-4 max-w-[158px]"
                >
                  <span>Contact us</span>
                  <ToContactsIcon/>
                  
            </Link>
          </div>
            <h3
            class="sectionTitle lg:hidden"
            >
              You cen see the answers
            </h3>
            <div
            class="xs:px-2 mt-[24px] lg:w-7/10"
            >
                <AccordionRoot
                class="flex flex-col gap-3 xl:max-w-[475px]" 
                >
                    <FaqItem 
                    title="Love Space Shop - din guide till nöjes värld." 
                    text="Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                      We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                      sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                      you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                      Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                      is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                      cheap offerings and exciting sale of sex toys, you can enhance your intim"
                      />
                      <FaqItem
                      title="Confidentiality"
                      text="Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                      We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                      sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                      you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                      Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                      is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                      cheap offerings and exciting sale of sex toys, you can enhance your intim"
                      />
                      <FaqItem
                      title="We are dedicated to your satisfaction."
                      text="Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                      We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                      sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                      you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                      Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                      is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                      cheap offerings and exciting sale of sex toys, you can enhance your intim"
                      />
                      <FaqItem
                      title="Delivery"
                      text="Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                      We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                      sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                      you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                      Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                      is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                      cheap offerings and exciting sale of sex toys, you can enhance your intim"
                      />
                      <FaqItem
                      title="Materials"
                      text="Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                      We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                      sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                      you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                      Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                      is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                      cheap offerings and exciting sale of sex toys, you can enhance your intim"
                      />
                      <FaqItem
                      title="Discover Affordable Pleasure"
                      text="Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                      We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                      sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                      you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                      Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                      is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                      cheap offerings and exciting sale of sex toys, you can enhance your intim"
                      />
                </AccordionRoot>
                <p
              class="text-sm text-accentBg xs:block lg:hidden font-medium mt-[33px]"
              >
                Om du har ytterligare frågor, skriv till oss.
              </p>
                <Link
                href="/"
                class="xs:flex lg:hidden text-base font-medium text-accentBg xs:py-1 sm:py-2 xs:px-3 sm:px-5 flex items-center border-[1px] border-accentBg rounded-3xl gap-2 xs:mt-2 mdl:mt-4 max-w-[158px]"
                >
                  <span>Contact us</span>
                  <ToContactsIcon/>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
});