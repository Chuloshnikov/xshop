import { component$, Slot, $ } from "@builder.io/qwik";


import Header from "~/components/starter/header/header";
import Footer from "~/components/starter/footer/footer";



export default component$(() => {

  const smoothScrollToTop = $(() => {
    const step = document.documentElement.scrollHeight / 100;
    let currentPosition = window.scrollY || window.pageYOffset;
  
    const scrollStep = () => {
        if (currentPosition > 0) { 
            currentPosition -= step; // Ми зменшуємо позицію, щоб рухатися вгору
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
      <main>
        <Slot />
      </main>
      <Footer toUp={smoothScrollToTop}/>
    </div>
      
    </>
  );
});
