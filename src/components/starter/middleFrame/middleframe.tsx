import { component$ } from "@builder.io/qwik";
import RectangleImg from "../../../media/images/rectangle.jpg?jsx";



export default component$(() => {
  return (
    <section class="flex xs:flex-col md:flex-row mx-[10px] pb-[47px]">
        <div>
            <p
            class="xs:inline mdl:hidden text-base text-accentBg mt-[43px]"
            >
                Meet the enemies of gravity
            </p>
            <h3
            class="sectionTitle mt-4 max-w-[265px]"
            >
                A colour for every foot
            </h3>
            <p
            class="text-base text-accentBg max-w-[298px] font-normal mt-[32px]"
            >
                Our community makes us unique. 
                They have an energy that reverberates around them. 
                Their mission in life is to ensure the wonder in the world is not overlooked.
            </p>
        </div>
        <div
        class="xs:w-[300px]"
        >
        <RectangleImg
        class="
        object-cover rounded-3xl"
        />
        </div>
    </section>
  );
});