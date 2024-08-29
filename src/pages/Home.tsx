import { FunctionComponent, useState, useRef, useCallback } from "react";
import Frame6 from "../components/Frame6";
import PortalPopup from "../components/PortalPopup";
import Frame7 from "../components/Frame7";
import Frame5 from "../components/Frame5";
import Frame4 from "../components/Frame4";
import CartSlider1 from "../components/CartSlider1";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Home: FunctionComponent = () => {
  const suppliesTabTextRef = useRef<HTMLDivElement>(null);
  const [isFrameOpen, setFrameOpen] = useState(false);
  const partsTabTextRef = useRef<HTMLDivElement>(null);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const accessoriesTabTextRef = useRef<HTMLDivElement>(null);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const eqrupmentTabTextRef = useRef<HTMLDivElement>(null);
  const [isFrame3Open, setFrame3Open] = useState(false);
  const antDesignshoppingCartOutliIconRef = useRef<HTMLImageElement>(null);
  const [isCartSliderOpen, setCartSliderOpen] = useState(false);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  const openFrame3 = useCallback(() => {
    setFrame3Open(true);
  }, []);

  const closeFrame3 = useCallback(() => {
    setFrame3Open(false);
  }, []);

  const openCartSlider = useCallback(() => {
    setCartSliderOpen(true);
  }, []);

  const closeCartSlider = useCallback(() => {
    setCartSliderOpen(false);
  }, []);

  const onShowMoreContainerClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onFeaturedProductsContainerClick = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  return (
    <>
      <div
        className={css`
          width: 100%;
          position: relative;
          background-color: var(--color-white1);
          height: 173.188rem;
          overflow: hidden;
          text-align: left;
          font-size: var(--font-size-mini);
          color: var(--color-black);
          font-family: var(--font-poppins);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0rem;
            left: 0rem;
            width: 90rem;
            height: 54.25rem;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0rem;
              left: 0rem;
              width: 90rem;
              height: 6.25rem;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                background-color: var(--color-white1);
              `}
            />
            <div
              className={css`
                position: absolute;
                top: 2rem;
                left: 26.813rem;
                width: 56.938rem;
                height: 2.563rem;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 40.313rem;
                  height: 2.563rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 24.938rem;
                    background-color: var(--color-white1);
                    width: 7.063rem;
                    height: 2.563rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: var(--padding-2xs) var(--padding-14xl);
                    box-sizing: border-box;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 1.5rem;
                      font-weight: 500;
                      cursor: pointer;
                    `}
                    ref={suppliesTabTextRef}
                    onClick={openFrame}
                  >
                    Supplies
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    background-color: var(--color-white1);
                    width: 7.063rem;
                    height: 2.563rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: var(--padding-2xs) var(--padding-14xl);
                    box-sizing: border-box;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 1.5rem;
                      font-weight: 500;
                    `}
                  >
                    Home
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 33.25rem;
                    background-color: var(--color-white1);
                    width: 7.063rem;
                    height: 2.563rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: var(--padding-2xs) var(--padding-14xl);
                    box-sizing: border-box;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 1.5rem;
                      font-weight: 500;
                      cursor: pointer;
                    `}
                    ref={partsTabTextRef}
                    onClick={openFrame1}
                  >
                    Parts
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 16.625rem;
                    background-color: var(--color-white1);
                    width: 7.063rem;
                    height: 2.563rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: var(--padding-2xs) var(--padding-14xl);
                    box-sizing: border-box;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 1.5rem;
                      font-weight: 500;
                      cursor: pointer;
                    `}
                    ref={accessoriesTabTextRef}
                    onClick={openFrame2}
                  >
                    Accessories
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 8.313rem;
                    background-color: var(--color-white1);
                    width: 7.063rem;
                    height: 2.563rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    padding: var(--padding-2xs) var(--padding-14xl);
                    box-sizing: border-box;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 1.5rem;
                      font-weight: 500;
                      cursor: pointer;
                    `}
                    ref={eqrupmentTabTextRef}
                    onClick={openFrame3}
                  >
                    Equipment
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  height: 68.29%;
                  width: 27.11%;
                  top: 9.76%;
                  right: 0%;
                  bottom: 21.95%;
                  left: 72.89%;
                `}
              >
                <img
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 11.34%;
                    top: 0%;
                    right: 88.66%;
                    bottom: 0%;
                    left: 0%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/mdiaccountalertoutline.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 11.34%;
                    top: 0%;
                    right: 59.11%;
                    bottom: 0%;
                    left: 29.55%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/akariconssearch.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 11.34%;
                    top: 0%;
                    right: 29.55%;
                    bottom: 0%;
                    left: 59.11%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                  `}
                  alt=""
                  src="/akariconsheart.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 11.34%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 88.66%;
                    max-width: 100%;
                    overflow: hidden;
                    max-height: 100%;
                    cursor: pointer;
                  `}
                  alt=""
                  src="/antdesignshoppingcartoutlined.svg"
                  ref={antDesignshoppingCartOutliIconRef}
                  onClick={openCartSlider}
                />
              </div>
            </div>
            <img
              className={css`
                position: absolute;
                top: 2.25rem;
                left: 1.938rem;
                width: 21.25rem;
                height: 1.938rem;
                object-fit: cover;
              `}
              alt=""
              src="/image-107@2x.png"
            />
          </div>
          <img
            className={css`
              position: absolute;
              height: 93.69%;
              width: 100%;
              top: 6.31%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: 'hidden';
              max-height: 100%;
            `}
            alt=""
            src="/mask-group.svg"
          />
          <div
            onClick={onFeaturedProductsContainerClick}
            className={css`
              position: absolute;
              top: 33.75rem;
              left: 48rem;
              width: 15rem;
              height: 5.25rem;
            `}>
            </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 68.188rem;
            left: 6.375rem;
            width: 77.25rem;
            height: 67.75rem;
            font-size: var(--font-size-xl);
            color: var(--color-gray-1);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 64.75rem;
              left: 31rem;
              width: 15.313rem;
              height: 3rem;
              cursor: pointer;
              font-size: var(--font-size-base);
              color: var(--primary);
            `}
            onClick={onShowMoreContainerClick}
          >
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 0rem;
                background-color: var(--color-white1);
                border: 1px solid var(--primary);
                box-sizing: border-box;
                width: 15.313rem;
                height: 3rem;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: 0.75rem;
                left: 5.125rem;
                line-height: 150%;
                font-weight: 600;
              `}
            >
              Show More
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 5rem;
              left: 0rem;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-13xl);
            `}
          >
            <div
              className={css`
                width: 17.813rem;
                position: relative;
                height: 27.875rem;
                cursor: pointer;
              `}
              onClick={onFeaturedProductsContainerClick}
            >
              <div
                className={css`
                  position: absolute;
                  height: 32.51%;
                  width: 100%;
                  top: 67.49%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  background-color: var(--color-light-bg);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 19.813rem;
                  left: 1rem;
                  width: 15.563rem;
                  height: 6.188rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 4.313rem;
                    left: 0rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 150%;
                      font-weight: 600;
                    `}
                  >
                    USD 619.500
                  </div>
                  <div
                    className={css`
                      position: relative;
                      font-size: var(--font-size-base);
                      text-decoration: line-through;
                      line-height: 150%;
                      left: 0.2rem;
                      color: var(--color-gray-4);
                    `}
                  >
                    USD 885.000
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 61.62%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 38.38%;
                    left: 0%;
                    font-size: var(--font-size-5xl);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 120%;
                      font-weight: 600;
                    `}
                  >
                    Infab's lightning fast
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 60.66%;
                      left: 0%;
                      font-size: var(--font-size-base);
                      line-height: 150%;
                      font-weight: 500;
                      color: var(--color-gray-3);
                    `}
                  >
                    Lightning fast
                  </div>
                </div>
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 17.813rem;
                  height: 18.813rem;
                  object-fit: cover;
                `}
                alt=""
                src="/images@2x.png"
              />
              <div
                className={css`
                  position: absolute;
                  height: 10.76%;
                  width: 16.84%;
                  top: 5.38%;
                  right: 8.42%;
                  bottom: 83.86%;
                  left: 74.74%;
                  font-size: var(--font-size-base);
                  color: var(--color-white1);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0%;
                      right: 0%;
                      bottom: 0%;
                      left: 0%;
                      border-radius: 50%;
                      background-color: var(--color-red-accents);
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 25%;
                      left: 10.42%;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    -30%
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 3rem;
                    height: 3rem;
                    display: none;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      border-radius: 50%;
                      background-color: var(--color-green-accents);
                      width: 3rem;
                      height: 3rem;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 0.75rem;
                      left: 0.5rem;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    New
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                width: 17.813rem;
                position: relative;
                height: 27.875rem;
                cursor: pointer;
              `}
              onClick={onFeaturedProductsContainerClick}
            >
              <div
                className={css`
                  position: absolute;
                  height: 32.51%;
                  width: 100%;
                  top: 67.49%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  background-color: var(--color-light-bg);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 19.813rem;
                  left: 1rem;
                  width: 13.75rem;
                  height: 6.188rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 4.313rem;
                    left: 0rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 150%;
                      font-weight: 600;
                    `}
                  >
                    USD 257.500
                  </div>
                  <div
                    className={css`
                      position: relative;
                      font-size: var(--font-size-base);
                      text-decoration: line-through;
                      line-height: 150%;
                      left: 0.2rem;
                      color: var(--color-gray-4);
                    `}
                  >
                    USD 515.000
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 61.62%;
                    width: 94.55%;
                    top: 0%;
                    right: 5.45%;
                    bottom: 38.38%;
                    left: 0%;
                    font-size: var(--font-size-5xl);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 120%;
                      font-weight: 600;
                    `}
                  >
                    R/F QC Phantom.
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 60.66%;
                      left: 0%;
                      font-size: var(--font-size-base);
                      line-height: 150%;
                      font-weight: 500;
                      color: var(--color-gray-3);
                    `}
                  >
                    Test tool
                  </div>
                </div>
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 17.813rem;
                  height: 18.813rem;
                  object-fit: cover;
                `}
                alt=""
                src="/images1@2x.png"
              />
              <div
                className={css`
                  position: absolute;
                  height: 10.76%;
                  width: 16.84%;
                  top: 5.38%;
                  right: 8.42%;
                  bottom: 83.86%;
                  left: 74.74%;
                  font-size: var(--font-size-base);
                  color: var(--color-white1);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0%;
                      right: 0%;
                      bottom: 0%;
                      left: 0%;
                      border-radius: 50%;
                      background-color: var(--color-red-accents);
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 25%;
                      left: 10.42%;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    -50%
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 3rem;
                    height: 3rem;
                    display: none;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      border-radius: 50%;
                      background-color: var(--color-green-accents);
                      width: 3rem;
                      height: 3rem;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 0.75rem;
                      left: 0.5rem;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    New
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                width: 17.813rem;
                position: relative;
                height: 27.875rem;
                cursor: pointer;
              `}
              onClick={onFeaturedProductsContainerClick}
            >
              <div
                className={css`
                  position: absolute;
                  height: 32.51%;
                  width: 100%;
                  top: 67.49%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  background-color: var(--color-light-bg);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 19.813rem;
                  left: 1rem;
                  width: 13.375rem;
                  height: 6.188rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 4.313rem;
                    left: 0rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 150%;
                      font-weight: 600;
                    `}
                  >
                    USD 770.000
                  </div>
                  <div
                    className={css`
                      width: 6.688rem;
                      position: relative;
                      font-size: var(--font-size-base);
                      text-decoration: line-through;
                      line-height: 150%;
                      color: var(--color-gray-4);
                      display: none;
                    `}
                  >
                    Rp 14.000.000
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 61.62%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 38.38%;
                    left: 0%;
                    font-size: var(--font-size-5xl);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 120%;
                      font-weight: 600;
                    `}
                  >
                    Merchant Board
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 60.66%;
                      left: 0%;
                      font-size: var(--font-size-base);
                      line-height: 150%;
                      font-weight: 500;
                      color: var(--color-gray-3);
                    `}
                  >
                    Light Duty Merchant Board
                  </div>
                </div>
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 17.813rem;
                  height: 18.813rem;
                  object-fit: cover;
                `}
                alt=""
                src="/images2@2x.png"
              />
              <div
                className={css`
                  position: absolute;
                  height: 10.76%;
                  width: 16.84%;
                  top: 5.38%;
                  right: 8.42%;
                  bottom: 83.86%;
                  left: 74.74%;
                  font-size: var(--font-size-base);
                  color: var(--color-white1);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    display: none;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0%;
                      right: 0%;
                      bottom: 0%;
                      left: 0%;
                      border-radius: 50%;
                      background-color: var(--color-red-accents);
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 25%;
                      left: 10.42%;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    -50%
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 3rem;
                    height: 3rem;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      border-radius: 50%;
                      background-color: var(--color-green-accents);
                      width: 3rem;
                      height: 3rem;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 0.75rem;
                      left: 0.5rem;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    New
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                width: 17.813rem;
                position: relative;
                height: 27.875rem;
                cursor: pointer;
              `}
              onClick={onFeaturedProductsContainerClick}
            >
              <div
                className={css`
                  position: absolute;
                  height: 32.51%;
                  width: 100%;
                  top: 67.49%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  background-color: var(--color-light-bg);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 19.813rem;
                  left: 1rem;
                  width: 13.563rem;
                  height: 6.188rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 4.313rem;
                    left: 0rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 150%;
                      font-weight: 600;
                    `}
                  >
                    USD 47.000
                  </div>
                  <div
                    className={css`
                      width: 6.688rem;
                      position: relative;
                      font-size: var(--font-size-base);
                      text-decoration: line-through;
                      line-height: 150%;
                      color: var(--color-gray-4);
                      display: none;
                    `}
                  >
                    Rp 14.000.000
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 61.62%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 38.38%;
                    left: 0%;
                    font-size: var(--font-size-5xl);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 120%;
                      font-weight: 600;
                    `}
                  >
                    Surgical Gloves
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 60.66%;
                      left: 0%;
                      font-size: var(--font-size-base);
                      line-height: 150%;
                      font-weight: 500;
                      color: var(--color-gray-3);
                    `}
                  >
                    Radiation Reducing Gloves
                  </div>
                </div>
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 17.813rem;
                  height: 18.813rem;
                  object-fit: cover;
                `}
                alt=""
                src="/images3@2x.png"
              />
              <div
                className={css`
                  position: absolute;
                  height: 10.76%;
                  width: 16.84%;
                  top: 5.38%;
                  right: 8.42%;
                  bottom: 83.86%;
                  left: 74.74%;
                  font-size: var(--font-size-base);
                  color: var(--color-white1);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    display: none;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0%;
                      right: 0%;
                      bottom: 0%;
                      left: 0%;
                      border-radius: 50%;
                      background-color: var(--color-red-accents);
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 25%;
                      left: 10.42%;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    -50%
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 3rem;
                    height: 3rem;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      border-radius: 50%;
                      background-color: var(--color-green-accents);
                      width: 3rem;
                      height: 3rem;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 0.75rem;
                      left: 0.5rem;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    New
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 34.875rem;
              left: 0rem;
              width: 77.25rem;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-13xl);
            `}
          >
            <div
              className={css`
                flex: 1;
                position: relative;
                height: 27.875rem;
                cursor: pointer;
              `}
              onClick={onFeaturedProductsContainerClick}
            >
              <div
                className={css`
                  position: absolute;
                  height: 32.51%;
                  width: 100%;
                  top: 67.49%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  background-color: var(--color-light-bg);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 19.813rem;
                  left: 1rem;
                  width: 11.188rem;
                  height: 6.188rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 4.313rem;
                    left: 0rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 150%;
                      font-weight: 600;
                    `}
                  >
                    USD 1,375.000
                  </div>
                  <div
                    className={css`
                      width: 6.25rem;
                      position: relative;
                      font-size: var(--font-size-base);
                      text-decoration: line-through;
                      line-height: 150%;
                      color: var(--color-gray-4);
                      display: none;
                    `}
                  >
                    USD 885.000
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 61.62%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 38.38%;
                    left: 0%;
                    font-size: var(--font-size-5xl);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 120%;
                      font-weight: 600;
                    `}
                  >
                    MRI phantom
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 60.66%;
                      left: 0%;
                      font-size: var(--font-size-base);
                      line-height: 150%;
                      font-weight: 500;
                      color: var(--color-gray-3);
                    `}
                  >
                    Medium MRI phantom
                  </div>
                </div>
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 17.813rem;
                  height: 18.813rem;
                  object-fit: cover;
                `}
                alt=""
                src="/images4@2x.png"
              />
              <div
                className={css`
                  position: absolute;
                  height: 10.76%;
                  width: 16.84%;
                  top: 5.38%;
                  right: 8.42%;
                  bottom: 83.86%;
                  left: 74.74%;
                  display: none;
                  font-size: var(--font-size-base);
                  color: var(--color-white1);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0%;
                      right: 0%;
                      bottom: 0%;
                      left: 0%;
                      border-radius: 50%;
                      background-color: var(--color-red-accents);
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 25%;
                      left: 10.42%;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    -30%
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 3rem;
                    height: 3rem;
                    display: none;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      border-radius: 50%;
                      background-color: var(--color-green-accents);
                      width: 3rem;
                      height: 3rem;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 0.75rem;
                      left: 0.5rem;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    New
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                flex: 1;
                position: relative;
                height: 27.875rem;
                cursor: pointer;
              `}
              onClick={onFeaturedProductsContainerClick}
            >
              <div
                className={css`
                  position: absolute;
                  height: 32.51%;
                  width: 100%;
                  top: 67.49%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  background-color: var(--color-light-bg);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 19.813rem;
                  left: 1rem;
                  width: 12.813rem;
                  height: 6.188rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 4.313rem;
                    left: 0rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 150%;
                      font-weight: 600;
                    `}
                  >
                    USD 36,725.000
                  </div>
                  <div
                    className={css`
                      width: 6.25rem;
                      position: relative;
                      font-size: var(--font-size-base);
                      text-decoration: line-through;
                      line-height: 150%;
                      color: var(--color-gray-4);
                      display: none;
                    `}
                  >
                    USD 885.000
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 61.62%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 38.38%;
                    left: 0%;
                    font-size: var(--font-size-5xl);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 120%;
                      font-weight: 600;
                    `}
                  >
                    PowerMax 1260
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 60.66%;
                      left: 0%;
                      font-size: var(--font-size-base);
                      line-height: 150%;
                      font-weight: 500;
                      color: var(--color-gray-3);
                    `}
                  >
                    X-Ray Generator System 
                  </div>
                </div>
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 17.813rem;
                  height: 18.813rem;
                  object-fit: cover;
                `}
                alt=""
                src="/images5@2x.png"
              />
              <div
                className={css`
                  position: absolute;
                  height: 10.76%;
                  width: 16.84%;
                  top: 5.38%;
                  right: 8.42%;
                  bottom: 83.86%;
                  left: 74.74%;
                  font-size: var(--font-size-base);
                  color: var(--color-white1);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    display: none;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0%;
                      right: 0%;
                      bottom: 0%;
                      left: 0%;
                      border-radius: 50%;
                      background-color: var(--color-red-accents);
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 25%;
                      left: 10.42%;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    -30%
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 3rem;
                    height: 3rem;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      border-radius: 50%;
                      background-color: var(--color-green-accents);
                      width: 3rem;
                      height: 3rem;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 0.75rem;
                      left: 0.5rem;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    New
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                flex: 1;
                position: relative;
                height: 27.875rem;
                cursor: pointer;
              `}
              onClick={onFeaturedProductsContainerClick}
            >
              <div
                className={css`
                  position: absolute;
                  height: 32.51%;
                  width: 100%;
                  top: 67.49%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  background-color: var(--color-light-bg);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 19.813rem;
                  left: 1rem;
                  width: 15.25rem;
                  height: 6.188rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 4.313rem;
                    left: 0rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 150%;
                      font-weight: 600;
                    `}
                  >
                    USD 2,135.500
                  </div>
                  <div
                    className={css`
                      position: relative;
                      font-size: var(--font-size-base);
                      text-decoration: line-through;
                      line-height: 150%;
                      left: 0.2rem;
                      color: var(--color-gray-4);
                    `}
                  >
                    USD 4,271.000
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 61.62%;
                    width: 93.44%;
                    top: 0%;
                    right: 6.56%;
                    bottom: 38.38%;
                    left: 0%;
                    font-size: var(--font-size-5xl);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 120%;
                      font-weight: 600;
                    `}
                  >
                    X-ray Instrument
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 60.66%;
                      left: 0%;
                      font-size: var(--font-size-base);
                      line-height: 150%;
                      font-weight: 500;
                      color: var(--color-gray-3);
                    `}
                  >
                    All Purpose EXPOSURE METER
                  </div>
                </div>
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 17.813rem;
                  height: 18.813rem;
                  object-fit: cover;
                `}
                alt=""
                src="/images6@2x.png"
              />
              <div
                className={css`
                  position: absolute;
                  height: 10.76%;
                  width: 16.84%;
                  top: 5.38%;
                  right: 8.42%;
                  bottom: 83.86%;
                  left: 74.74%;
                  font-size: var(--font-size-base);
                  color: var(--color-white1);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0%;
                      right: 0%;
                      bottom: 0%;
                      left: 0%;
                      border-radius: 50%;
                      background-color: var(--color-red-accents);
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 25%;
                      left: 10.42%;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    -50%
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 3rem;
                    height: 3rem;
                    display: none;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      border-radius: 50%;
                      background-color: var(--color-green-accents);
                      width: 3rem;
                      height: 3rem;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 0.75rem;
                      left: 0.5rem;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    New
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                flex: 1;
                position: relative;
                height: 27.875rem;
                cursor: pointer;
              `}
              onClick={onFeaturedProductsContainerClick}
            >
              <div
                className={css`
                  position: absolute;
                  height: 32.51%;
                  width: 100%;
                  top: 67.49%;
                  right: 0%;
                  bottom: 0%;
                  left: 0%;
                  background-color: var(--color-light-bg);
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 19.813rem;
                  left: 1rem;
                  width: 15.5rem;
                  height: 6.188rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 4.313rem;
                    left: 0rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      line-height: 150%;
                      font-weight: 600;
                    `}
                  >
                    USD 9,692.310
                  </div>
                  <div
                    className={css`
                      width: 6.688rem;
                      position: relative;
                      font-size: var(--font-size-base);
                      text-decoration: line-through;
                      line-height: 150%;
                      color: var(--color-gray-4);
                      display: none;
                    `}
                  >
                    Rp 14.000.000
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 61.62%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 38.38%;
                    left: 0%;
                    font-size: var(--font-size-5xl);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      line-height: 120%;
                      font-weight: 600;
                    `}
                  >
                    Protection Screen
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 60.66%;
                      left: 0%;
                      font-size: var(--font-size-base);
                      line-height: 150%;
                      font-weight: 500;
                      color: var(--color-gray-3);
                    `}
                  >
                    Protection X-ray Mobile Barrier
                  </div>
                </div>
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 17.813rem;
                  height: 18.813rem;
                  object-fit: cover;
                `}
                alt=""
                src="/images7@2x.png"
              />
              <div
                className={css`
                  position: absolute;
                  height: 10.76%;
                  width: 16.84%;
                  top: 5.38%;
                  right: 8.42%;
                  bottom: 83.86%;
                  left: 74.74%;
                  font-size: var(--font-size-base);
                  color: var(--color-white1);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0%;
                    right: 0%;
                    bottom: 0%;
                    left: 0%;
                    display: none;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0%;
                      right: 0%;
                      bottom: 0%;
                      left: 0%;
                      border-radius: 50%;
                      background-color: var(--color-red-accents);
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 25%;
                      left: 10.42%;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    -50%
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 3rem;
                    height: 3rem;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      border-radius: 50%;
                      background-color: var(--color-green-accents);
                      width: 3rem;
                      height: 3rem;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 0.75rem;
                      left: 0.5rem;
                      line-height: 150%;
                      font-weight: 500;
                    `}
                  >
                    New
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b
            className={css`
              position: absolute;
              top: 0rem;
              left: 0rem;
              font-size: 2.5rem;
              line-height: 120%;
              text-align: center;
            `}
          >
            Our Products
          </b>
        </div>
        <div
          className={css`
            position: absolute;
            bottom: 0rem;
            left: calc(50% - 720px);
            width: 90rem;
            height: 31.563rem;
            font-size: var(--font-size-base);
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100.1%;
              width: 100%;
              top: -0.1%;
              right: 0%;
              bottom: 0%;
              left: 0%;
              background-color: var(--color-white1);
              border-top: 1px solid var(--color-gray-200);
              box-sizing: border-box;
            `}
          />
          <div
            className={css`
              position: absolute;
              height: 82.97%;
              width: 86.11%;
              top: 9.5%;
              right: 6.94%;
              bottom: 7.52%;
              left: 6.94%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 74.46%;
                width: 91.37%;
                top: 0%;
                right: 8.63%;
                bottom: 25.54%;
                left: 0%;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  width: 25.15%;
                  top: 27.56%;
                  left: 0.18%;
                  color: var(--color-darkgray-100);
                  display: inline-block;
                `}
              >
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  P.O. Box 625 * Gresham, OR 97030 U.S.A.503-667-3000 * Toll
                  Free U.S.A: 800-827-9729 * Fax : 503-666-8855
                </p>
              </div>
              <b
                className={css`
                  position: absolute;
                  top: 0%;
                  left: 0%;
                  font-size: var(--font-size-5xl);
                `}
              >
                Pacific Northwest X-Ray Inc.
              </b>
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 62.67%;
                  top: 0%;
                  right: 0%;
                  bottom: 0%;
                  left: 37.33%;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    height: 100%;
                    width: 49.58%;
                    top: 0%;
                    right: 50.42%;
                    bottom: 0%;
                    left: 0%;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 19.32%;
                      top: 0%;
                      right: 80.68%;
                      bottom: 0%;
                      left: 0%;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        height: 74.68%;
                        width: 97.06%;
                        top: 25.32%;
                        right: 0%;
                        bottom: 0%;
                        left: 2.94%;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 0%;
                          left: 0%;
                          font-weight: 500;
                        `}
                      >
                        Home
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 30.04%;
                          left: 0%;
                          font-weight: 500;
                        `}
                      >
                        Shop
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 60.09%;
                          left: 0%;
                          font-weight: 500;
                        `}
                      >
                        About
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 89.7%;
                          left: 0%;
                          font-weight: 500;
                        `}
                      >
                        Contact
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: 0%;
                        left: 0%;
                        font-weight: 500;
                        color: var(--color-darkgray-100);
                      `}
                    >
                      Links
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      height: 77.56%;
                      width: 39.77%;
                      top: 0%;
                      right: 0%;
                      bottom: 22.44%;
                      left: 60.23%;
                      color: var(--color-darkgray-100);
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0%;
                        left: 0%;
                        font-weight: 500;
                      `}
                    >
                      Help
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        height: 67.36%;
                        width: 100%;
                        top: 32.64%;
                        right: 0%;
                        bottom: 0%;
                        left: 0%;
                        color: var(--color-black);
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 0%;
                          left: 0%;
                          font-weight: 500;
                        `}
                      >
                        Payment Options
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 42.94%;
                          left: 0%;
                          font-weight: 500;
                        `}
                      >
                        Returns
                      </div>
                      <div
                        className={css`
                          position: absolute;
                          top: 85.28%;
                          left: 0%;
                          font-weight: 500;
                        `}
                      >
                        Privacy Policies
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 32.37%;
                    width: 40.28%;
                    top: 0.64%;
                    right: 0%;
                    bottom: 66.99%;
                    left: 59.72%;
                    color: var(--color-darkgray-100);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0%;
                      left: 0%;
                      font-weight: 500;
                    `}
                  >
                    Newsletter
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      height: 23.76%;
                      width: 100%;
                      top: 76.24%;
                      right: 0%;
                      bottom: 0%;
                      left: 0%;
                      font-size: var(--font-size-sm);
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0%;
                        left: 0%;
                      `}
                    >
                      Enter Your Email Address
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        height: 8.33%;
                        width: 70.63%;
                        top: 100%;
                        right: 29.37%;
                        bottom: -8.33%;
                        left: 0%;
                        border-top: 1px solid var(--color-black);
                        box-sizing: border-box;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: 0%;
                        left: 73.78%;
                        font-weight: 500;
                        color: var(--color-black);
                      `}
                    >
                      SUBSCRIBE
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        height: 8.33%;
                        width: 26.92%;
                        top: 100%;
                        right: -0.7%;
                        bottom: -8.33%;
                        left: 73.78%;
                        border-top: 1px solid var(--color-black);
                        box-sizing: border-box;
                      `}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 14.08%;
                width: 100%;
                top: 85.92%;
                right: 0%;
                bottom: 0%;
                left: 0%;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 1.69%;
                  width: 100.08%;
                  top: 0%;
                  right: -0.08%;
                  bottom: 98.31%;
                  left: 0%;
                  border-top: 1px solid var(--color-gainsboro);
                  box-sizing: border-box;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 59.32%;
                  left: 0.16%;
                `}
              >
                2024 Pacific Northwest X-Ray Inc. All rights reverved
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          top={-600}
          left={-20}
          relativeLayerRef={suppliesTabTextRef}
          onOutsideClick={closeFrame}
        >
          <Frame6  />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          top={-187}
          left={-30}
          relativeLayerRef={partsTabTextRef}
          onOutsideClick={closeFrame1}
        >
          <Frame7 />
        </PortalPopup>
      )}
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          top={-525}
          left={-15}
          relativeLayerRef={accessoriesTabTextRef}
          onOutsideClick={closeFrame2}
        >
          <Frame5  />
        </PortalPopup>
      )}
      {isFrame3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          top={-320}
          left={-20}
          relativeLayerRef={eqrupmentTabTextRef}
          onOutsideClick={closeFrame3}
        >
          <Frame4 />
        </PortalPopup>
      )}
      {isCartSliderOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          top={-800}
          right={-100}
          relativeLayerRef={antDesignshoppingCartOutliIconRef}
          onOutsideClick={closeCartSlider}
        >
          <CartSlider1 />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
