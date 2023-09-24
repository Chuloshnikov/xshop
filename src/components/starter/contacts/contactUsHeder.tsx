import { component$ } from "@builder.io/qwik";


export default component$(() => {


  return (
    <div class="w-full text-accentBg text-base mx-auto">
        <div
        class="mb-[48px] xs:mt-[129px] lg:mt-[159px] flex flex-col gap-6"
        >
            <h1
            class="font-medium xs:text-[32px] mdl:text-[56px] max-w-[600px] leading-10"
            >
                Get in touch with LoveSpace
            </h1>
            <p
            class="max-w-[513px]"
            >
                Thanks for stopping by! Whether you have a question, 
                comment, or just want to say hi, don't be a stranger. 
                We're here to help, and we love connecting with our community.
            </p>
            <p
            class="max-w-[513px]"
            >
                Drop us a line or use the contact form below to get in touch.
            </p>
        </div>
    </div>
  );
});
