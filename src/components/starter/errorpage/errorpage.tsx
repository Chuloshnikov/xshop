import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";



export default component$(() => {
  return (
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <div
        class="flex flex-col "
        >
            <div
            class="flex flex-col gap-7 text-accentBg text-center"
            >
                <div
                class="flex xs:text-[79px] lg:text-[120px] font-medium mx-auto"
                >
                    <span>4</span>
                    <span>
                        0
                    </span>
                    <span>4</span>
                </div>
                <div
                class="flex flex-col gap-3"
                >
                    <h3
                    class="xs:text-[24px] mdl:text-[40px] font-medium"
                    >
                        Lost in Pleasure
                    </h3>
                    <p
                    class="text-accentBg2"
                    >
                        The page you are looking for does not exist or has been removed.
                    </p>
                </div>
                <div>
                    <Link
                    href="/"
                    class="px-10 py-3 bg-accentBg text-mainBg text-base rounded-xl"
                    >
                        Come to Main page
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
});