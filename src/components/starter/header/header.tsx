import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import LsLogo from '../../../media/icons/lsLogo.svg?jsx';
import SearchIcon from '../../../media/icons/searchIcon.svg?jsx';
import FavoritesIcon from '../../../media/icons/Favorites.svg?jsx';
import LanguageIcon from '../../../media/icons/Language.svg?jsx';
import ProfileIcon from '../../../media/icons/profileIcon.svg?jsx';
import BasketIcon from '../../../media/icons/basketIcon.svg?jsx';
import MenuIcon from '../../../media/icons/menuIcon.svg?jsx';

export default component$(() => {
  return (
    <header
    class="fixed z-50 bg-mainBg xs:max-w-[300px] sm:max-w-[360px] smlg:max-w-[405px] sml:max-w-[465px] md:max-w-[640px] mdl:max-w-[704px] lg:min-w-[940px] lgl:min-w[1010px] xl:max-w-[1237px] w-full xs:py-[4px] md:py-[15px] xs:px-0 md:px-[18px] xl:p-3 rounded-xl mt-[21px] xs:mx-0 md:mx-auto"
    >
      <nav class="z-50 flex justify-between p-2">
        <div>
          <a href="/" title="qwik">
            <LsLogo class="h-[41px] w-[34px]"/>
          </a>
        </div>
        <div
        class="flex items-center xs:hidden lg:flex"
        >
          <ul
          class="flex gap-6 text-base text-accentBg font-medium"
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
        >
          <ul
          class="flex xs:gap-1 xl:gap-5 justify-end items-center w-full"
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
              class="xs:hidden lg:block"
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
                class="xs:hidden lg:block"
                href="/"
                >
                    <ProfileIcon/>
                </Link>
              </li>
              <li>
                <Link
                href="/"
                >
                    <BasketIcon/>
                </Link>
              </li>
              <li>
                <button
                  class="xs:block lg:hidden"
                  >
                    <MenuIcon/>
                  </button>
              </li>
          </ul>
        </div>
      </nav>
    </header>
  );
});
