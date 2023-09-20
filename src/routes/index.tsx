import { component$, Resource, useResource$,  $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from '@builder.io/qwik-city';
import Hero from "~/components/starter/hero/hero";
import { Link } from '@builder.io/qwik-city';
import Middleframe from "~/components/starter/middleFrame/middleframe";
import Meinfaq from "~/components/starter/meinFaq/meinfaq";
import LightBasket from "../media/icons/lightBascet.svg?jsx";
import FavoritesIcon from '../media/icons/Favorites.svg?jsx';
import TimeIcon from "../media/icons/TimeIcon.svg?jsx";
import { Image } from '@unpic/qwik';
import Categories from "~/components/starter/categories/categories";
import ReadAllIcon from "../media/icons/ReadAllIcon.svg?jsx"

//test data
import {bestSellesDataTest, newsDataTest} from "../../data/index";



interface BestSellesData {
  id: number,
  img: string,
  title: string, 
  price: number,
}

interface NewsData {
  id: number,
  img: string,
  title: string,
  text: string,
  date: string,
  time: string,
  topic: string
}

{/*

export const useBestSellesData = routeLoader$(async (requestEvent) => {
  console.log('fetching the data');
  //bestSeles fetching
  try {
      const res = await fetch('https://gorest.co.in/public/v2/');

      if (!res.ok) {
          console.error(`HTTP error! Status: ${res.status}`);
          return { error: `HTTP error! Status: ${res.status}` };
      }

      const data = await res.json();
      return data;
  } catch (error: any) {
      console.error("An error occurred:", error);
      return { error: error.message || 'An unexpected error occurred' };
  }
});

export const useNewProductsData = routeLoader$(async (requestEvent) => {
  console.log('fetching the data');
  //new products fetching
  try {
      const res = await fetch('https://gorest.co.in/public/v2/');

      if (!res.ok) {
          console.error(`HTTP error! Status: ${res.status}`);
          return { error: `HTTP error! Status: ${res.status}` };
      }

      const data = await res.json();
      return data;
  } catch (error: any) {
      console.error("An error occurred:", error);
      return { error: error.message || 'An unexpected error occurred' };
  }
});

export const useOurNewsData = routeLoader$(async (requestEvent) => {
  console.log('fetching the data');
  //bestSeles fetching
  try {
      const res = await fetch('https://gorest.co.in/public/v2/');

      if (!res.ok) {
          console.error(`HTTP error! Status: ${res.status}`);
          return { error: `HTTP error! Status: ${res.status}` };
      }

      const data = await res.json();
      return data;
  } catch (error: any) {
      console.error("An error occurred:", error);
      return { error: error.message || 'An unexpected error occurred' };
  }
});

*/}

export default component$(() => {
  //const bestSellesData = useBestSellesData<BestSellesData>();
  //const newProductsData = useNewProductsData<BeastSellesData>();
  //const ourNewsData = useOurNewsData<NewsData>();
  const topseler = true;

  const bestSellers: BestSellesData[] = bestSellesDataTest;
  const newsList: NewsData[] = newsDataTest;


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
          value={bestSellers}
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
                      class="z-30 absolute top-4 left-6 text-sm py-[1px] px-2 rounded-3xl bg-[#E7414B] text-white"
                      >
                        Top Seler
                      </p>
                      )
                    }
                    <div
                      class="bg-white flex flex-col overflow-hidden xs:rounded-xl mdl:rounded-2xl lg:rounded-3xl"
                        >
                              <FavoritesIcon
                              class="z-30 absolute top-2 right-2"
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
                              class="z-30 linkToShow absolute xs:top-[110px] sm:top-[135px] sml:top-[190px] mdl:top-[135px] lg:top-[190px] lgl:top-[220px] xl:top-[240px] right-0 text-mainBg xs:p-1 xs:rounded-lg rounded-xl bg-accentBg mr-[18px] mb-[14px] text-[14px] flex lg:gap-[10px] items-center justify-center "
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
          value={bestSellers}
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
                      class="z-30 absolute top-4 left-6 text-sm py-[1px] px-2 rounded-3xl bg-[#E7414B] text-white"
                      >
                        Top Seler
                      </p>
                      )
                    }
                    <div
                      class="bg-white flex flex-col overflow-hidden xs:rounded-xl mdl:rounded-2xl lg:rounded-3xl"
                        >
                              <FavoritesIcon
                              class="z-30 absolute top-2 right-2"
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
                              class="z-30 linkToShow absolute xs:top-[110px] sm:top-[135px] sml:top-[190px] mdl:top-[135px] lg:top-[190px] lgl:top-[220px] xl:top-[240px] right-0 text-mainBg xs:p-1 xs:rounded-lg rounded-xl bg-accentBg mr-[18px] mb-[14px]  text-[14px] flex lg:gap-[10px] items-center justify-center "
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
        <div class="ourNewsContainer flex flex-col gap-10 xs:pt-[44px] xs:pb-[53px] mdl:pt-[43.67px] mdl:pb-[41.33px] xs:px-auto mdl:px-7 lg:py-[75.4px] lg:px-10">
            <div
            class="flex justify-between items-center px-[10px]"
            >
              <h2
              class="sectionTitle"
              >
                Our News
              </h2>
              <Link
              href="/news"
              class="text-base text-accentBg xs:py-1 sm:py-2 xs:px-3 sm:px-5 flex items-center rounded-3xl gap-4 bg-ahornBg"
              >
                <span>Read All</span>
                <ReadAllIcon/>
              </Link>
            </div>
            <div
            class="max-w-container px-[10px] relative xs:h-[400px] lg:h-[454px] flex overflow-x-auto space-x-4"
            >
                <Resource
                value={newsList}
                onPending={() => 
                <div>
                  loading...
                </div>}
                  onResolved={(newsDataTest) => (
                  <div
                    class="flex flex gap-2 flex-shrink-0 absolute "
                      >
                      {newsDataTest && newsDataTest.map(news => (
                      <div
                      class="text-[16px] flex flex-col gap-2 xs:h-[388px] lg:h-[454px]"
                        key={news.id}
                        >
                          <div
                          class="relative xs:w-[273px] lg:w-[384px] xs:h-[301px] lg:h-[341px] rounded-[30px]"
                          >
                              <Image  
                              layout="constrained" 
                              width={600}
                              height={800}
                              loading="lazy" 
                              class="w-full h-full object-cover rounded-[30px]" 
                              src={news.img} 
                              alt="NewsImg"
                              />
                              <span
                              class="absolute top-3 left-5 text-base text-accentBg bg-mainBg text-center py-1 font-normal px-6 rounded-3xl"
                              >
                                  {news.topic}
                              </span>
                          </div>
                        <div
                          class="text-accentBg2 xs:text-sm mdl:text-base flex gap-3"
                          >
                            <span>{news.date}</span>
                            <span>|</span>
                            <div
                            class="flex gap-2"
                            ><TimeIcon/> <span>{news.time}</span></div>
                        </div>
                        <h3
                          class="text-accentBg font-normal text-[17px] xs:w-[274px] lg:w-[365px]"
                          >
                          {news.title}
                        </h3>
                      </div>
                    ))}
              </div>
            )}
            />
            </div>
        </div>
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
