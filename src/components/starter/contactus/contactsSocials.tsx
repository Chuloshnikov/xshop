import { component$ } from "@builder.io/qwik";
import ContactsInstagramIcon from "../../../media/icons/ContactsInstagramIcon.svg?jsx";
import ContactsTwitterIcon from "../../../media/icons/ContactsTwitterIcon.svg?jsx";
import ContactsTikTokIcon from "../../../media/icons/ContactsTikTokIcon.svg?jsx";
import ContactsYouTubeIcon from "../../../media/icons/ContactsYouTubeIcon.svg?jsx";
import ContactsLinkedinIcon from "../../../media/icons/ContactsLinkedinIcon.svg?jsx";
import { Link } from "@builder.io/qwik-city";



export default component$(() => {


  return (
    <div class="w-full text-accentBg text-base mx-auto rounded-xl bg-white xs:p-6 lg:p-10">
        <div
        class="flex flex-col xs:gap-6 mdl:gap-8"
       >
            <div
            class="flex flex-col gap-2"
            >
                <h3
                class="text-[24px] font-medium"
                >
                    Chat to us
                </h3>
                <p
                class="text-base"
                >
                    Our friendly team is here to help
                </p>
            </div>
            <div>
            </div>
            <div
            class="flex flex-col gap-2"
            >
                <h3
                class="text-[24px] font-medium"
                >
                    Call us
                </h3>
                <p
                class="text-base"
                >
                    Our friendly team is here to help
                </p>
            </div>
            <div
            class="flex flex-col gap-2"
            >
                <h3
                class="text-[24px] font-medium"
                >
                    Visit us
                </h3>
                <p
                class="text-base"
                >
                    Come say hello at our office
                </p>
                <p
                class="text-base font-medium"
                >
                    Level 2, 441 Kent Street, Sydney NSW 2000
                </p>
            </div>
            <div
                class="flex gap-3"
                >
                    <Link
                    href="/"
                    >
                        <ContactsInstagramIcon/>
                    </Link>
                    <Link
                    href="/"
                    >
                        <ContactsTwitterIcon/>
                    </Link>
                    <Link
                    href="/"
                    >
                        <ContactsTikTokIcon/>
                    </Link>
                    <Link
                    href="/"
                    >
                        <ContactsYouTubeIcon/>
                    </Link>
                    <Link
                    href="/"
                    >
                        <ContactsLinkedinIcon/>
                    </Link>
                </div>
        </div>
    </div>
  )
});