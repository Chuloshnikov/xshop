import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import LsLogo from '../../../media/icons/lsLogo.svg?jsx';
import SearchIcon from '../../../media/icons/searchIcon.svg?jsx';
import FavoritesIcon from '../../../media/icons/Favorites.svg?jsx';
import LanguageIcon from '../../../media/icons/Language.svg?jsx';
import ProfileIcon from '../../../media/icons/profileIcon.svg?jsx';
import BasketIcon from '../../../media/icons/basketIcon.svg?jsx';

export default component$(() => {
  return (
    <header
    class="fixed z-50 bg-mainBg max-w-[1237px] w-full p-3 rounded-xl mt-[21px] mx-auto"
    >
      <nav class="flex justify-between p-2">
        <div>
          <a href="/" title="qwik">
            <LsLogo height={"41px"} width={"34px"} />
          </a>
        </div>
        <div
        class="flex items-center"
        >
          <ul
          class="flex gap-6 text-base "
          >
            <li>
              <Link
              href="/"
              >
                Woman
              </Link>
            </li>
            <li>
              <Link
              href="/"
              >
                Man
              </Link>
            </li>
            <li>
              <Link
              href="/"
              >
                For noubies
              </Link>
            </li>
            <li>
              <Link
              href="/"
              >
                For Pairs
              </Link>
            </li>
            <li>
              <Link
              href="/"
              >
                Fetish
              </Link>
            </li>
            <li>
              <Link
              href="/"
              >
                Brands
              </Link>
            </li>
          </ul>
        </div>
        <div
        class="min-w-[246px] mr-3"
        >
          <ul
          class="flex gap-5 justify-end items-center w-full"
          >
            <li>
              <Link
              href="/"
              >
                  <SearchIcon/>
              </Link>
            </li>
            <li>
              <Link
              href="/"
              >
                  <LanguageIcon/>
              </Link>
            </li>
            <li>
              <Link
              href="/"
              >
                  <FavoritesIcon/>
              </Link>
            </li>
            <li>
                <Link
                class=""
                href="/"
                >
                    <ProfileIcon/>
                </Link>
              </li>
              <li>
                <Link
                class="relative left-[2px]"
                href="/"
                >
                    <BasketIcon/>
                </Link>
              </li>
          </ul>
        </div>
      </nav>
    </header>
  );
});
