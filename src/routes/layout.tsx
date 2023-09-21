import { component$, Slot, $, useSignal, useTask$ } from "@builder.io/qwik";
import CookieModal from "../components/starter/modals/cookieModal/cookieModal";
import AdultModal from "~/components/starter/modals/adultModal/adultModal";

import Header from "~/components/starter/header/header";
import Footer from "~/components/starter/footer/footer";

import Cookies from 'js-cookie';

export default component$(() => {
  const cookieMessage = useSignal(Cookies.get('cookieMessage') !== 'false');
  const adultMessage = useSignal(Cookies.get('adultMessage') !== 'false');

  const closeCookieModal = $(() => {
    //QRL to function prop
    cookieMessage.value = !cookieMessage.value;
    Cookies.set('cookieMessage', cookieMessage.value);
  })

  const closeAdultModal = $(() => {
    //QRL to function prop
    adultMessage.value = !adultMessage.value;
    Cookies.set('adultMessage', adultMessage.value);
  })

  const smoothScrollToTop = $(() => {
    const step = document.documentElement.scrollHeight / 100;
    let currentPosition = window.scrollY || window.pageYOffset;
  
    const scrollStep = () => {
        if (currentPosition > 0) { 
            currentPosition -= step;
            window.scrollTo(0, currentPosition);
            requestAnimationFrame(scrollStep);
        }
    }
  
    requestAnimationFrame(scrollStep);
});

  return (
    <>
    <div 
    class="flex flex-col items-center"
    >
      <Header />
      {cookieMessage.value && <CookieModal close={closeCookieModal}/>}
      {adultMessage.value && <AdultModal close={closeAdultModal}/>}
      <main>
        <Slot />
      </main>
      <Footer toUp={smoothScrollToTop}/>
    </div>
      
    </>
  );
});