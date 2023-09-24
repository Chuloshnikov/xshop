import { component$, Slot, $, useSignal } from "@builder.io/qwik";
import ContactUsHeder from "~/components/starter/contacts/contactUsHeder";
import ContactsSocials from "~/components/starter/contacts/contactsSocials";


export default component$(() => {
  return (
    <div
    class="max-w-[1267px] px-5 sx:mb-[48px] lg:mb-[133px]"
    >
        <ContactUsHeder/>
        <div>
          <div
          class="flex xs:flex-col-reverse lg:flex-row"
          >
          
          </div>
          <ContactsSocials/>
        </div>
    </div>
  )
 
});