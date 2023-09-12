import { component$, Resource, useResource$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from '@builder.io/qwik-city';
import Hero from "~/components/starter/hero/hero";
import { Link } from '@builder.io/qwik-city';
import Middleframe from "~/components/starter/middleFrame/middleframe";
import Meinfaq from "~/components/starter/meinFaq/meinfaq";

interface BestSellesData {
  id: number,
  img: string,
  title: string, 
  price: numder
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
      <div class="">
        <div class="bestSellesContainer">
        <Resource
          value={bestSellesData}
          onPending={() => 
          <div>
            loading...
          </div>}
            onResolved={(blogs) => (
            <div
              class="text-[2px]"
                >
                {blogs && blogs.map(blog => (
                <div
                  
                  key={blog.id}
                  >
                    <soan>{blog.user_id}</soan>
                    <h3>{blog.title}</h3>
                    <p>{blog.body.slice(0, 50)}...</p>
                    <div>
                      <Link 
                      href={`/blog/${blog.id}`}
                      
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
      </div>
      <Middleframe/>
      {/*Categories*/}
      <div class="newProductsContainer">
      <Resource
          value={newProductsData}
          onPending={() => 
          <div>
            loading...
          </div>}
            onResolved={(blogs) => (
            <div
              class="text-[2px]"
                >
                {blogs && blogs.map(blog => (
                <div
                  
                  key={blog.id}
                  >
                    <soan>{blog.user_id}</soan>
                    <h3>{blog.title}</h3>
                    <p>{blog.body.slice(0, 50)}...</p>
                    <div>
                      <Link 
                      href={`/blog/${blog.id}`}
                      
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
      <div class="ourNewsContainer">
      <Resource
          value={ourNewsData}
          onPending={() => 
          <div>
            loading...
          </div>}
            onResolved={(blogs) => (
            <div
              class="text-[2px]"
                >
                {blogs && blogs.map(blog => (
                <div
                  
                  key={blog.id}
                  >
                    <soan>{blog.user_id}</soan>
                    <h3>{blog.title}</h3>
                    <p>{blog.body.slice(0, 50)}...</p>
                    <div>
                      <Link 
                      href={`/blog/${blog.id}`}
                      
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
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
