import { component$, useSignal, useStore } from "@builder.io/qwik";

interface ProductData {
    id: numder,
    img: string,
    title: string,
    reviewRate: number,
    existigVario: [{img: string, text: string, price: number}],
    description: string,
    specification: string,
    reviews: [{reviewRate: number, revievText: string, revievDate: string}],
    price: number

  }

export const useAllProductsData = routeLoader$(async (requestEvent) => {
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
  

export default component$(() => {
    const allProducts = uuseAllProductsData<ProductData>();

    return (
        <article
        class="text-center pt-12 flex flex-col gap-2"
        >
            <div>
            
            </div>
        </article>
    )
})