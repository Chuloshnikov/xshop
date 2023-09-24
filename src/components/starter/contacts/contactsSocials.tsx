import { component$ } from "@builder.io/qwik";
import InstagramIcon from "../../../media/icons/ContactsInstagramIcon.svg?jsx";
import TwitterIcon from "../../../media/icons/ContactsTwitterIcon.svg?jsx";
import TikTokIcon from "../../../media/icons/ContactsTikTokIcon.svg?jsx";
import YouTubeIcon from "../../../media/icons/ContactsYouTubeIcon.svg?jsx";
import LinkedinIcon from "../../../media/icons/ContactsLinkedinIcon.svg?jsx";
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
                        <InstagramIcon/>
                    </Link>
                    <Link
                    href="/"
                    >
                        <TwitterIcon/>
                    </Link>
                    <Link
                    href="/"
                    >
                        <TikTokIcon/>
                    </Link>
                    <Link
                    href="/"
                    >
                        <YouTubeIcon/>
                    </Link>
                    <Link
                    href="/"
                    >
                        <LinkedinIcon/>
                    </Link>
                </div>
        </div>
    </div>
  )
});