import { component$ } from "@builder.io/qwik";
import RectangleImg from "../../../media/images/rectangle.jpg?jsx";
import RectangleBox from "../../../media/images/RectangleBox.jpg?jsx";



export default component$(() => {
  return (
    <section class="relative flex xs:flex-col sm:items-center md:items-start md:flex-row xs:gap-[38px] md:gap-0 md:justify-between md:mx-7 xs:mx-[10px] pb-[47px]">
        <div
        class="lg:flex lg:flex-col lg:gap-[225px]"
        >
            <div>
                <p
                class="xs:block lg:hidden text-base text-accentBg"
                >
                    Meet the enemies of gravity
                </p>
                <p
                class="xs:hidden lg:block text-base text-accentBg"
                >
                    Love Space Shop
                </p>
                <h3
                class="sectionTitle mt-4 max-w-[265px] xs:block lg:hidden"
                >
                    A colour for every foot
                </h3>
                <h3
                class="sectionTitle mt-4 max-w-[350px] text-[72px] xs:hidden lg:block"
                >
                    Your guide to the world of pleasure.
                </h3>
            </div>
            <div
            class="flex mdl:flex mdl:flex-col-reverse lg:flex-row lg:items-center mdl:gap-[30px] lg:gap-[28px] lg:justify-between"
            >
                <div
                class="xs:absolute mdl:static xs:bottom-[85px] md:bottom-[65px] md:right-[185px] xs:w-[112px] xs:h-[106px] lg:h-[182px] lg:w-[193px]"
                >
                    <RectangleBox
                    class="object-cover rounded-2xl"
                    />
                </div>
                
                <p
                class="xs:text-sm lg:text-base text-accentBg max-w-[298px] font-medium mt-[32px]"
                >
                    Our community makes us unique. 
                    <br></br>They have an energy that reverberates around them. 
                    Their mission in life is to ensure the wonder in the world is not overlooked.
                </p>
            </div>
        </div>
        <div
        class="xs:w-[300px] xs:h-[339px] md:h-[w-310px] md:h-[350px] lg:h-[400px] lg:w-[400px] xl:h-[465px] xl:w-[465px] md:pr-[32px] lg:pr-[40px] md:pt-[66px]"
        >
        <RectangleImg
        class="
        object-cover rounded-3xl "
        />
        </div>
    </section>
  );
});