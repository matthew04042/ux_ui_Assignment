import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-poppins: Poppins;

/* font sizes */
--font-size-xl: 1.25rem;
--font-size-9xl: 1.75rem;
--font-size-smi: 0.813rem;
--font-size-lg: 1.125rem;
--font-size-5xl: 1.5rem;
--font-size-sm: 0.875rem;
--font-size-6xl: 1.563rem;
--font-size-base: 1rem;
--font-size-29xl: 3rem;
--font-size-mini: 0.938rem;
--font-size-xs: 0.75rem;
--font-size-17xl: 2.25rem;

/* Colors */
--color-white1: #fff;
--color-black: #000;
--primary: #b88e2f;
--color-gray-4: #b0b0b0;
--color-darkgray-100: #9f9f9f;
--color-dimgray: #727272;
--color-linen-100: #faf3ea;
--color-linen-200: #f9f1e7;
--color-gray-3: #898989;
--color-gray-100: #242424;
--color-gray-200: rgba(0, 0, 0, 0.17);
--color-gainsboro: #d9d9d9;
--color-light-bg: #f4f5f7;
--color-whitesmoke-100: #efeeee;
--color-gray-1: #3a3a3a;
--color-green-accents: #2ec1ac;
--color-red-accents: #e97171;

/* Gaps */
--gap-3xs: 0.625rem;
--gap-11xs: 0.125rem;
--gap-13xl: 2rem;

/* Paddings */
--padding-81xl: 6.25rem;
--padding-2xs: 0.687rem;
--padding-14xl: 2.062rem;
--padding-2xl: 1.312rem;
--padding-11xl: 1.875rem;
--padding-7xs: 0.375rem;

/* Border radiuses */
--br-7xs: 6px;
--br-mini: 15px;
--br-8xs: 5px;
--br-3xs: 10px;
--br-31xl: 50px;

}
`;
}
