import { component$, Resource, useResource$} from "@builder.io/qwik";
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
  return (
    <div>
      <Hero/>
      <div class="max-w-container">
        {/*
        <div class="bestSellesContainer flex flex-col gap-10 xs:pt-[44px] xs:pb-[53px] mdl:pt-[43.67px] mdl:pb-[41.33px] xs:px-auto mdl:px-7 lg:py-[75.4px] lg:px-10">
          <div>
            <h2
            class="sectionTitle"
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
              class="grid gap-2 xs:grid-cols-2 mdl:grid-cols-4"
                >
                {sellesProduct && sellesProduct.map(product => (
                  <section
                  key={product.id}
                  class="hoverLinkParent flex flex-col gap-3"
                  >
                    <div
                      class="bg-white flex flex-col overflow-hidden xs:min-w-[146px] mdl:min-w-[172px] lg:min-h-[230px] lg:min-w-[294px] lg:min-h-[298px] rounded-3xl"
                        >
                          <div
                          class="z-50 flex justify-end"
                          >
                              <FavoritesIcon
                              class="mdl:mr-[8px] lg:mr-[18px] lg:mt-2"
                              />
                          </div>
                          <div
                          class="mx-auto"
                          >
                              <Image  
                              layout="constrained" 
                              width={800}
                              height={600}
                              loading="lazy" 
                              class="xs:mdl:w-[125px] xs:h-[125px] mdl:w-[172px] mdl:h-[174px] lg:w-[202px] lg:h-[202px] object-cover" 
                              src={product.img} 
                              alt="productImg"
                                />
                          </div>
                          <div
                              class="flex items-end justify-end min-w-[190px] min-h-[60px]"
                              >
                                  
                                    
            
                                      <Link 
                                      class="linkToShow text-mainBg p-3 rounded-xl bg-accentBg mr-[18px] mb-[14px] z-50 text-[14px] flex gap-[10px] items-center justify-center "
                                      href={`/`}
                                  >
                                    <span
                                    class="xs:hidden lg:inline"
                                    >Lägg till i kundvagn</span>
                                    <LightBasket/>
                                  </Link>
                                
                              </div>
                    </div>
                    <div
                    class="sectionText text-base flex flex-col gap-2 max-w-[294px] min-h-[44px]"
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
                </section>
              ))}
        </div>
      )}
      />
        </div>
      </div>
      <Middleframe/>
      //Categories
      </div>
      <div class="bestSellesContainer flex flex-col gap-10 py-[75.4px] px-10">
          <div>
            <h2
            class="sectionTitle"
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
              class="grid gap-2 lgl:grid-cols-4"
                >
                {sellesProduct && sellesProduct.map(product => (
                  <section
                  key={product.id}
                  class="hoverLinkParent flex flex-col gap-3"
                  >
                    <div
                      class="bg-white flex flex-col overflow-hidden min-w-[294px] min-h-[298px] rounded-3xl"
                        >
                          <div
                          class="z-50 flex justify-end"
                          >
                              <FavoritesIcon
                              class="mr-[18px] mt-3"
                              />
                          </div>
                          <div
                          class="mx-auto"
                          >
                              <Image  
                              layout="constrained" 
                              width={800}
                              height={600}
                              loading="lazy" 
                              class=" w-[202px] h-[202px] object-cover" 
                              src={product.img} 
                              alt="productImg"
                                />
                          </div>
                          <div
                              class="flex items-end justify-end min-w-[190px] min-h-[60px]"
                              >
                                  
                                    
            
                                      <Link 
                                      class="linkToShow text-mainBg p-3 rounded-xl bg-accentBg mr-[18px] mb-[16px] z-50 text-[14px] flex gap-[10px] items-center justify-center "
                                      href={`/`}
                                  >
                                    <span>Lägg till i kundvagn</span>
                                    <LightBasket/>
                                  </Link>
                                
                              </div>
                    </div>
                    <div
                    class="sectionText text-base flex flex-col gap-2 max-w-[294px] min-h-[44px]"
                    >
                        <h3>{product.title}</h3>
                        <p
                        class="priceText"
                        >{product.price} грн</p>
                      <div>
                      </div>
                    </div>
                </section>
              ))}
        </div>
      )}
      />
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
      */}
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
