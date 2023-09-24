import { component$, useSignal } from "@builder.io/qwik";
import {  
  AccordionItem, 
  AccordionHeader, 
  AccordionTrigger, 
  AccordionContent 
} from '@qwik-ui/headless';
import FaqOpen from "../../../../media/icons/FaqOpen.svg?jsx";
import FaqClose from "../../../../media/icons/FaqClose.svg?jsx";

interface FaqText {
    title: string,
    text: string
}

export default component$(( props: FaqText ) => {
    const isOpenIcon = useSignal(false);
    
    return (
        <AccordionItem>
            <AccordionHeader>
                <div
                class="flex xs:justify-between items-center lg:gap-5"
                >
                <div
                class="text-accentBg xs:text-base mdl:text-xl font-medium xs:max-w-[212px] sml:max-w-full"
                >
                    {props.title}
                </div>
                <div
                onClick$={() => isOpenIcon.value = !isOpenIcon.value}
                >
                    <AccordionTrigger
                        >
                            { !isOpenIcon.value ? (
                                <div
                                class="flex items-center justify-center p-1 rounded-full bg-accentBg2"
                                >
                                <span>
                                    <FaqOpen/>
                                </span>
                                </div>) : (
                                    <div
                                    class="flex items-center justify-center py-2 px-1 rounded-full bg-accentBg"
                                    >
                                    <span>
                                        <FaqClose/>
                                        </span>
                                    </div>
                                )
                            }
                    </AccordionTrigger>
                </div>
                   
                      </div>
                    </AccordionHeader>
                    <AccordionContent
                      class="py-3 xs:text-sm lg:text-base text-accentBg lg:max-w-[425px]"
                      >
                      {props.text}
                    </AccordionContent>
    </AccordionItem>
    )
});