import { component$, useSignal } from "@builder.io/qwik";
import { 
  AccordionRoot, 
  AccordionItem, 
  AccordionHeader, 
  AccordionTrigger, 
  AccordionContent 
} from '@qwik-ui/headless';
import FaqOpen from "../../../media/icons/FaqOpen.svg?jsx";
import FaqClose from "../../../media/icons/FaqClose.svg?jsx";





export default component$(() => {


  return (
    <div class="max-w-container xs:px-[10px] mdl:px-[36px]">
      <div
      class="border-[1px] rounded-3xl xs:p-[10px] mdl:px-[32px] xs:py-5 lg:py-10"
      >
        <h3
        class="sectionTitle"
        >
          You cen see the answers
        </h3>
        <div
        class="xs:px-2 mt-24"
        >
             <AccordionRoot
             class="flex flex-col gap-3" transition={0.3}
             >
                <AccordionItem>
                <AccordionHeader>
                  <div
                  class="flex justify-between"
                  >
                    <div
                    class="text-accentBg xs:text-base mdl:text-xl font-medium xs:max-w-[212px]"
                    >
                      Love Space Shop - din guide till nöjes värld.
                    </div>
                    <AccordionTrigger>
                      <span
                      class="flex items-center justify-center p-1 rounded-full bg-accentBg2"
                      >
                        <FaqOpen/>
                      </span>
                    </AccordionTrigger>
                  </div>
                </AccordionHeader>
                <AccordionContent
                  class="py-3 xs:text-sm lg:text-base text-accentBg"
                  >
                  Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                   We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                   sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                   you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                  Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                  is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                  cheap offerings and exciting sale of sex toys, you can enhance your intim
                </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                  <div
                  class="flex justify-between"
                  >
                    <div
                    class="text-accentBg xs:text-base mdl:text-xl font-medium xs:max-w-[212px]"
                    >
                      Confidentiality
                    </div>
                    <AccordionTrigger>
                      <span
                      class="flex items-center justify-center p-1 rounded-full bg-accentBg2"
                      >
                        <FaqOpen/>
                      </span>
                    </AccordionTrigger>
                  </div>
                </AccordionHeader>
                <AccordionContent
                  class="py-3 xs:text-sm lg:text-base text-accentBg"
                  >
                  Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                   We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                   sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                   you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                  Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                  is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                  cheap offerings and exciting sale of sex toys, you can enhance your intim
                </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                  <div
                  class="flex justify-between"
                  >
                    <div
                    class="text-accentBg xs:text-base mdl:text-xl font-medium xs:max-w-[212px]"
                    >
                      LWe are dedicated to your satisfaction.
                    </div>
                    <AccordionTrigger>
                      <span
                      class="flex items-center justify-center p-1 rounded-full bg-accentBg2"
                      >
                        <FaqOpen/>
                      </span>
                    </AccordionTrigger>
                  </div>
                </AccordionHeader>
                <AccordionContent
                  class="py-3 xs:text-sm lg:text-base text-accentBg"
                  >
                  Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                   We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                   sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                   you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                  Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                  is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                  cheap offerings and exciting sale of sex toys, you can enhance your intim
                </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                  <div
                  class="flex justify-between"
                  >
                    <div
                    class="text-accentBg xs:text-base mdl:text-xl font-medium xs:max-w-[212px]"
                    >
                      Delivery
                    </div>
                    <AccordionTrigger>
                      <span
                      class="flex items-center justify-center p-1 rounded-full bg-accentBg2"
                      >
                        <FaqOpen/>
                      </span>
                    </AccordionTrigger>
                  </div>
                </AccordionHeader>
                <AccordionContent
                  class="py-3 xs:text-sm lg:text-base text-accentBg"
                  >
                  Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                   We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                   sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                   you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                  Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                  is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                  cheap offerings and exciting sale of sex toys, you can enhance your intim
                </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                  <div
                  class="flex justify-between"
                  >
                    <div
                    class="text-accentBg xs:text-base mdl:text-xl font-medium xs:max-w-[212px]"
                    >
                      Materials
                    </div>
                    <AccordionTrigger>
                      <span
                      class="flex items-center justify-center p-1 rounded-full bg-accentBg2"
                      >
                        <FaqOpen/>
                      </span>
                    </AccordionTrigger>
                  </div>
                </AccordionHeader>
                <AccordionContent
                  class="py-3 xs:text-sm lg:text-base text-accentBg"
                  >
                  Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                   We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                   sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                   you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                  Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                  is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                  cheap offerings and exciting sale of sex toys, you can enhance your intim
                </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader>
                  <div
                  class="flex justify-between"
                  >
                    <div
                    class="text-accentBg xs:text-base mdl:text-xl font-medium xs:max-w-[212px]"
                    >
                      Discover Affordable Pleasure
                    </div>
                    <AccordionTrigger>
                      <span
                      class="flex items-center justify-center p-1 rounded-full bg-accentBg2"
                      >
                        <FaqOpen/>
                      </span>
                    </AccordionTrigger>
                  </div>
                </AccordionHeader>
                <AccordionContent
                  class="py-3 xs:text-sm lg:text-base text-accentBg"
                  >
                  Welcome to Love Space Shop - an online sex toy store in Sweden, your ultimate destination for a wide variety of pleasure products.
                   We take pride in offering an extensive selection of sex toys to cater to all your desires. Whether you're searching for a specific 
                   sex toy or want to explore our cheap sex toys supply, we have something for everyone. Get ready to indulge in pure pleasure as 
                   you buy sex toys and find the perfect sex toy to satisfy your deepest cravings!
                  Discover our vast collection of sex toys at unbeatable prices. Our sex toy store 
                  is dedicated to making pleasure affordable and accessible to all. With our sex toys 
                  cheap offerings and exciting sale of sex toys, you can enhance your intim
                </AccordionContent>
                </AccordionItem>
            </AccordionRoot>
        </div>
      </div>
    </div>
  );
});