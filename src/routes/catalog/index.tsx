import { component$, useSignal, useStore } from "@builder.io/qwik";
import { routeLoader$ } from '@builder.io/qwik-city';


interface ProductData {
    id: number,
    img: string,
    title: string,
    reviewRate: number,
    existigVario: [{img: string, text: string, price: number}],
    description: string,
    specification: string,
    reviews: [{reviewRate: number, reviewText: string, reviewDate: string}],
    price: number

  }


{/*

export const useAllProductsData = routeLoader$(async (requestEvent: any) => {
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
*/}

export default component$(() => {
    const allProducts = useAllProductsData<ProductData>();

    return (
        <article
        class="text-center pt-12 flex flex-col gap-2"
        >
            <div>
            
            </div>
        </article>
    )
})