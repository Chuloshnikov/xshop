import { component$, Resource, useResource$,  $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from '@builder.io/qwik-city';
import Hero from "~/components/starter/hero/hero";
import { Link } from '@builder.io/qwik-city';
import Middleframe from "~/components/starter/middleFrame/middleframe";
import Meinfaq from "~/components/starter/meinFaq/meinfaq";
import LightBasket from "../media/icons/lightBascet.svg?jsx";
import FavoritesIcon from '../media/icons/Favorites.svg?jsx';
import { Image } from '@unpic/qwik';


//test data
import bestSellesDataTest from "../../data/index";
import Categories from "~/components/starter/categories/categories";

interface BestSellesData {
  id: number,
  img: string,
  title: string, 
  price: numder,
}

interface NewsData {
  id: numder,
  img: string,
  title: string,
  date: string,
  time: string,
}

export const useBestSellesData = routeLoader$(async (requestEvent) => {
  console.log('fetching the data');
  //bestSeles fetching
  try {
      const res = await fetch('https://gorest.co.in/public/v2/posts/');

      if (!res.ok) {
          console.error(`HTTP error! Status: ${res.status}`);
          return { error: `HTTP error! Status: ${res.status}` };
      }

      const data = await res.json();
      return data;
  } catch (error) {
      console.error("An error occurred:", error);
      return { error: error.message || 'An unexpected error occurred' };
  }
});

export const useNewProductsData = routeLoader$(async (requestEvent) => {
  console.log('fetching the data');
  //new products fetching
  try {
      const res = await fetch('https://gorest.co.in/public/v2/posts/');

      if (!res.ok) {
          console.error(`HTTP error! Status: ${res.status}`);
          return { error: `HTTP error! Status: ${res.status}` };
      }

      const data = await res.json();
      return data;
  } catch (error) {
      console.error("An error occurred:", error);
      return { error: error.message || 'An unexpected error occurred' };
  }
});

export const useOurNewsData = routeLoader$(async (requestEvent) => {
  console.log('fetching the data');
  //bestSeles fetching
  try {
      const res = await fetch('https://gorest.co.in/public/v2/posts/');

      if (!res.ok) {
          console.error(`HTTP error! Status: ${res.status}`);
          return { error: `HTTP error! Status: ${res.status}` };
      }

      const data = await res.json();
      return data;
  } catch (error) {
      console.error("An error occurred:", error);
      return { error: error.message || 'An unexpected error occurred' };
  }
});

export default component$(() => {
  const bestSellesData = useBestSellesData<BestSellesData>();
  const newProductsData = useNewProductsData<BeastSellesData>();
  const ourNewsData = useOurNewsData<NewsData>();
  const topseler = true;

  const smoothScrollToBottom = $(() => {
    const totalHeight = document.documentElement.scrollHeight;
    const step = totalHeight / 100;
    let currentPosition = window.scrollY || window.pageYOffset;
  
    const scrollStep = () => {
        if (currentPosition < totalHeight - window.innerHeight) { 
            currentPosition += step;
            window.scrollTo(0, currentPosition);
            requestAnimationFrame(scrollStep);
        }
    }
  
    requestAnimationFrame(scrollStep);
  })

  return (
    <div>
      <Hero toDown={smoothScrollToBottom}/>
      <div class="max-w-container">
        <div class="bestSellesContainer flex flex-col gap-10 xs:pt-[44px] xs:pb-[53px] mdl:pt-[43.67px] mdl:pb-[41.33px] xs:px-auto mdl:px-7 lg:py-[75.4px] lg:px-10">
          <div>
            <h2
            class="sectionTitle px-[10px]"
            >
              Best sellers
            </h2>
          </div>
        <Resource
          value={bestSellesDataTest}
          onPending={() => 
          <div>
            loading...
          </div>}
            onResolved={(sellesProduct) => (
            <div
              class="grid gap-2 xs:grid-cols-2 mdl:grid-cols-4 xs:mx-[10px] mdl:mx-[18px] xl:mx-[40px]"
                >
                {sellesProduct && sellesProduct.map(product => (
                  <div
                  key={product.id}
                  class="hoverLinkParent relative"
                  >
                    {
                      topseler && (
                      <p
                      class="z-50 absolute top-4 left-6 text-sm py-[1px] px-2 rounded-3xl bg-[#E7414B] text-white"
                      >
                        Top Seler
                      </p>
                      )
                    }
                    <div
                      class="bg-white flex flex-col overflow-hidden xs:rounded-xl mdl:rounded-2xl lg:rounded-3xl"
                        >
                              <FavoritesIcon
                              class="z-50 absolute top-2 right-2"
                              />
                          <div
                          class="mx-auto"
                          >
                              <Image  
                              layout="constrained" 
                              width={800}
                              height={600}
                              loading="lazy" 
                              class="object-cover" 
                              src={product.img} 
                              alt="productImg"
                                />
                          </div>
                            <Link 
                              class="linkToShow absolute xs:top-[110px] sm:top-[135px] sml:top-[190px] mdl:top-[135px] lg:top-[190px] lgl:top-[220px] xl:top-[240px] right-0 text-mainBg xs:p-1 xs:rounded-lg rounded-xl bg-accentBg mr-[18px] mb-[14px] z-50 text-[14px] flex lg:gap-[10px] items-center justify-center "
                              href={`/`}
                              >
                              <span
                                class="xs:hidden lg:inline"
                                >
                                  Lägg till i kundvagn
                              </span>
                              <LightBasket/>
                            </Link>
                    </div>
                    <div
                    class="sectionText text-base flex flex-col gap-2 mt-6 max-w-[294px] min-h-[44px]"
                    >
                        <h3
                        class="xs:text-[14px] lg:text-[16px]"
                        >{product.title}</h3>
                        <p
                        class="priceText"
                        >{product.price} грн</p>
                      <div>
                      </div>
                    </div>
                </div>
              ))}
        </div>
      )}
      />
        </div>
      </div>
      <div class="max-w-container">
        <Middleframe/>
        <Categories/>
      </div>
      <div class="max-w-container">
        <div class="bestSellesContainer flex flex-col gap-10 xs:pt-[44px] xs:pb-[53px] mdl:pt-[43.67px] mdl:pb-[41.33px] xs:px-auto mdl:px-7 lg:py-[75.4px] lg:px-10">
          <div>
            <h2
            class="sectionTitle px-[10px]"
            >
              New products
            </h2>
          </div>
        <Resource
          value={bestSellesDataTest}
          onPending={() => 
          <div>
            loading...
          </div>}
            onResolved={(sellesProduct) => (
            <div
              class="grid gap-2 xs:grid-cols-2 mdl:grid-cols-4 xs:mx-[10px] mdl:mx-[18px] xl:mx-[40px]"
                >
                {sellesProduct && sellesProduct.map(product => (
                  <div
                  key={product.id}
                  class="hoverLinkParent relative"
                  >
                    {
                      topseler && (
                      <p
                      class="z-50 absolute top-4 left-6 text-sm py-[1px] px-2 rounded-3xl bg-[#E7414B] text-white"
                      >
                        Top Seler
                      </p>
                      )
                    }
                    <div
                      class="bg-white flex flex-col overflow-hidden xs:rounded-xl mdl:rounded-2xl lg:rounded-3xl"
                        >
                              <FavoritesIcon
                              class="z-50 absolute top-2 right-2"
                              />
                          <div
                          class="mx-auto"
                          >
                              <Image  
                              layout="constrained" 
                              width={800}
                              height={600}
                              loading="lazy" 
                              class="object-cover" 
                              src={product.img} 
                              alt="productImg"
                                />
                          </div>
                            <Link 
                              class="linkToShow absolute xs:top-[110px] sm:top-[135px] sml:top-[190px] mdl:top-[135px] lg:top-[190px] lgl:top-[220px] xl:top-[240px] right-0 text-mainBg xs:p-1 xs:rounded-lg rounded-xl bg-accentBg mr-[18px] mb-[14px] z-50 text-[14px] flex lg:gap-[10px] items-center justify-center "
                              href={`/`}
                              >
                              <span
                                class="xs:hidden lg:inline"
                                >
                                  Lägg till i kundvagn
                              </span>
                              <LightBasket/>
                            </Link>
                    </div>
                    <div
                    class="sectionText text-base flex flex-col gap-2 mt-6 max-w-[294px] min-h-[44px]"
                    >
                        <h3
                        class="xs:text-[14px] lg:text-[16px]"
                        >{product.title}</h3>
                        <p
                        class="priceText"
                        >{product.price} грн</p>
                      <div>
                      </div>
                    </div>
                </div>
              ))}
        </div>
      )}
      />
        </div>
      </div>
      <div class="ourNewsContainer">
      <Resource
          value={ourNewsData}
          onPending={() => 
          <div>
            loading...
          </div>}
            onResolved={(ourNewsData) => (
            <div
              class="text-[2px]"
                >
                {ourNewsData && ourNewsData.map(news => (
                <div
                  
                  key={news.id}
                  >
                    <soan>{news.user_id}</soan>
                    <h3>{news.title}</h3>
                    <p>{news.body.slice(0, 50)}...</p>
                    <div>
                      <Link 
                      href={`/blog/${news.id}`}
                      
                      >
                        More info
                      </Link>
                    </div>
                </div>
              ))}
        </div>
      )}
      />
      </div>        
      <Meinfaq/>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Love Space Shop",
  meta: [
    {
      name: "description",
      content: "Embrace your desires with sex toys from Love Space Shop",
    },
  ],
};
