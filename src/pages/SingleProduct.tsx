import { FunctionComponent, useState, useRef, useCallback } from "react";
import Frame6 from "../components/Frame6";
import PortalPopup from "../components/PortalPopup";
import Frame7 from "../components/Frame7";
import Frame5 from "../components/Frame5";
import Frame4 from "../components/Frame4";
import CartSlider1 from "../components/CartSlider1";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const SingleProduct: FunctionComponent = () => {
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

  const onGroupContainerClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/product-comparison");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div
        className={css`
          width: 100%;
          position: relative;
          background-color: var(--color-white1);
          height: 194.188rem;
          overflow: hidden;
          text-align: left;
          font-size: var(--font-size-base);
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
            height: 6.25rem;
            font-size: var(--font-size-mini);
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
                  onClick={onHomeTextClick}
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
        <div
          className={css`
            position: absolute;
            top: 7.125rem;
            left: 0rem;
            width: 90rem;
            height: 6.25rem;
            color: var(--color-darkgray-100);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0rem;
              left: 0rem;
              background-color: var(--color-linen-200);
              width: 90rem;
              height: 6.25rem;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 1.938rem;
              left: 19.5rem;
              width: 18.25rem;
              height: 2.313rem;
              color: var(--color-black);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 0rem;
                width: 18.25rem;
                height: 2.313rem;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  border-right: 2px solid var(--color-darkgray-100);
                  box-sizing: border-box;
                  width: 0.125rem;
                  height: 2.438rem;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 0.375rem;
                  left: 2.125rem;
                `}
              >
                PowerMax 1260 X-Ray Generator
              </div>
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 2.375rem;
              left: 6.188rem;
              width: 5.125rem;
              height: 1.5rem;
            `}
          >
            <div
              onClick={onHomeTextClick}
              className={css`
                position: absolute;
                top: 0rem;
                left: 0rem;
              `}
            >
              Home
            </div>
            <img
              className={css`
                position: absolute;
                top: 0.125rem;
                left: 3.875rem;
                width: 1.25rem;
                height: 1.25rem;
                overflow: hidden;
                object-fit: contain;
              `}
              alt=""
              src="/dashiconsarrowdownalt2@2x.png"
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: 2.375rem;
              left: 12.813rem;
              width: 6.75rem;
              height: 1.5rem;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 0rem;
              `}
            >
              Equipment
            </div>
            <img
              className={css`
                position: absolute;
                top: 0.125rem;
                left: 5.5rem;
                width: 1.25rem;
                height: 1.25rem;
                overflow: hidden;
                object-fit: contain;
              `}
              alt=""
              src="/dashiconsarrowdownalt2@2x.png"
            />
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 13.188rem;
            left: 0rem;
            width: 90rem;
            height: 51.25rem;
            color: var(--color-darkgray-100);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0rem;
              left: 0rem;
              background-color: var(--color-white1);
              width: 90rem;
              height: 51.25rem;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 2.188rem;
              left: 6.188rem;
              width: 82.063rem;
              height: 45.625rem;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 0rem;
                width: 33.125rem;
                height: 31.313rem;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 4.75rem;
                  height: 26rem;
                `}
              >
                <img
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 4.75rem;
                    height: 5rem;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-94@2x.png"
                />
                <img
                  className={css`
                    position: absolute;
                    top: 7rem;
                    left: 0rem;
                    width: 4.75rem;
                    height: 5rem;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-98@2x.png"
                />
                <img
                  className={css`
                    position: absolute;
                    top: 14rem;
                    left: 0rem;
                    width: 4.75rem;
                    height: 5rem;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-97@2x.png"
                />
                <img
                  className={css`
                    position: absolute;
                    top: 21rem;
                    left: 0rem;
                    width: 4.75rem;
                    height: 5rem;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/group-96@2x.png"
                />
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 5.938rem;
                  width: 27.188rem;
                  height: 31.313rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0.75rem;
                    border-radius: var(--br-3xs);
                    background-color: var(--color-linen-200);
                    width: 26.438rem;
                    height: 31.25rem;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    top: 0.063rem;
                    left: 0rem;
                    border-radius: 32px;
                    width: 27.188rem;
                    height: 31.25rem;
                    object-fit: cover;
                  `}
                  alt=""
                  src="/asgaard-sofa-3@2x.png"
                />
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 39.688rem;
                width: 42.375rem;
                height: 45.625rem;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0.063rem;
                  font-size: 2.625rem;
                  color: var(--color-black);
                `}
              >
                PowerMax 1260 X-Ray Generator
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 3.938rem;
                  left: 0.063rem;
                  font-size: var(--font-size-5xl);
                  font-weight: 500;
                `}
              >
                USD 36,725.00
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 7.125rem;
                  left: 0rem;
                  width: 7.75rem;
                  height: 1.25rem;
                `}
              >
                <img
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                  `}
                  alt=""
                  src="/dashiconsstarfilled.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 1.625rem;
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                  `}
                  alt=""
                  src="/dashiconsstarfilled.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 3.25rem;
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                  `}
                  alt=""
                  src="/dashiconsstarfilled.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 4.875rem;
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                  `}
                  alt=""
                  src="/dashiconsstarfilled.svg"
                />
                <img
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 6.5rem;
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                  `}
                  alt=""
                  src="/carbonstarhalf1.svg"
                />
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 6.813rem;
                  left: 8.875rem;
                  border-right: 1px solid var(--color-darkgray-100);
                  box-sizing: border-box;
                  width: 0.063rem;
                  height: 1.938rem;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 7.125rem;
                  left: 10.25rem;
                  font-size: var(--font-size-smi);
                `}
              >
                5 Customer Review
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 9.5rem;
                  left: 0rem;
                  font-size: var(--font-size-smi);
                  color: var(--color-black);
                  display: inline-block;
                  width: 26.5rem;
                  height: 5rem;
                `}
              >
                The PowerMax-1260 Portable X-ray System combines lightweight
                maneuverability with maximum power, making it suitable for
                various applications. In addition, with high reliability and low
                maintenance, the state-of-the-art system offers an easy upgrade
                path for clinical sites transitioning to digital imaging.
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 26.875rem;
                  left: 0.063rem;
                  width: 7.688rem;
                  height: 4rem;
                  color: var(--color-black);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    border-radius: var(--br-3xs);
                    background-color: var(--color-white1);
                    border: 1px solid var(--color-darkgray-100);
                    box-sizing: border-box;
                    width: 7.688rem;
                    height: 4rem;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: 1.25rem;
                    left: 0.938rem;
                  `}
                >
                  -
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 1.25rem;
                    left: 6.25rem;
                  `}
                >
                  +
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 1.25rem;
                    left: 3.688rem;
                    font-weight: 500;
                  `}
                >
                  1
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 26.875rem;
                  left: 8.715rem;
                  width: 13.438rem;
                  height: 4rem;
                  cursor: pointer;
                  font-size: var(--font-size-xl);
                  color: var(--color-black);
                `}
                onClick={onGroupContainerClick}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    border-radius: var(--br-mini);
                    border: 1px solid var(--color-black);
                    box-sizing: border-box;
                    width: 13.438rem;
                    height: 4rem;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: 1.063rem;
                    left: 3rem;
                  `}
                >
                  Add To Cart
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 26.875rem;
                  left: 22.938rem;
                  width: 13.438rem;
                  height: 4rem;
                  cursor: pointer;
                  font-size: 1.438rem;
                  color: var(--color-black);
                `}
                onClick={onGroupContainerClick1}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    border-radius: var(--br-mini);
                    border: 1px solid var(--color-black);
                    box-sizing: border-box;
                    width: 13.438rem;
                    height: 4rem;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: 0.938rem;
                    left: 2.938rem;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: var(--gap-3xs);
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                    `}
                  >
                    +
                  </div>
                  <div
                    className={css`
                      position: relative;
                      font-size: var(--font-size-xl);
                    `}
                  >
                    Compare
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 34.625rem;
                  left: 0.063rem;
                  border-top: 1px solid var(--color-gainsboro);
                  box-sizing: border-box;
                  width: 37.875rem;
                  height: 0.063rem;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 37.188rem;
                  left: 0rem;
                `}
              >
                SKU
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 37.188rem;
                  left: 6.688rem;
                `}
              >
                SS001
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 39.438rem;
                  left: 6.688rem;
                `}
              >
                X-Ray Systems
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 41.688rem;
                  left: 6.688rem;
                `}
              >
                X-Ray
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 37.188rem;
                  left: 5.688rem;
                  width: 0.25rem;
                  height: 8.25rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    font-weight: 500;
                  `}
                >
                  :
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 2.25rem;
                    left: 0rem;
                    font-weight: 500;
                  `}
                >
                  :
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 4.5rem;
                    left: 0rem;
                    font-weight: 500;
                  `}
                >
                  :
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 6.75rem;
                    left: 0rem;
                    font-weight: 500;
                  `}
                >
                  :
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 39.438rem;
                  left: 0rem;
                `}
              >
                Category
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 41.688rem;
                  left: 0rem;
                `}
              >
                Tags
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 44.063rem;
                  left: 0rem;
                `}
              >
                Share
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 44.188rem;
                  left: 6.688rem;
                  width: 1.25rem;
                  height: 1.25rem;
                  overflow: hidden;
                `}
                alt=""
                src="/akariconsfacebookfill.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 44.063rem;
                  left: 12.188rem;
                  width: 1.563rem;
                  height: 1.563rem;
                  overflow: hidden;
                `}
                alt=""
                src="/antdesigntwittercirclefilled.svg"
              />
              <img
                className={css`
                  position: absolute;
                  top: 44.188rem;
                  left: 9.5rem;
                  width: 1.25rem;
                  height: 1.25rem;
                  overflow: hidden;
                `}
                alt=""
                src="/akariconslinkedinboxfill.svg"
              />
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 65.125rem;
            left: 0rem;
            width: 90rem;
            height: 46.5rem;
            font-size: var(--font-size-5xl);
            color: var(--color-darkgray-100);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0rem;
              left: 0rem;
              background-color: var(--color-white1);
              width: 90rem;
              height: 46.5rem;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: -0.031rem;
              left: -0.031rem;
              border-top: 1px solid var(--color-gainsboro);
              box-sizing: border-box;
              width: 90.063rem;
              height: 0.063rem;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 3rem;
              left: 24.75rem;
              width: 40.563rem;
              height: 2.25rem;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 0rem;
                font-weight: 500;
                color: var(--color-black);
              `}
            >
              Specifications
            </div>
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 12.913rem;
              `}
            >
              Additional Information
            </div>
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 31.938rem;
              `}
            >
              Reviews [5]
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              bottom: 26.75rem;
              left: 13rem;
              width: 64.125rem;
              height: 12.188rem;
              text-align: justify;
              font-size: var(--font-size-base);
            `}
          >
            <div
              className={css`
                position: absolute;
                bottom: 0rem;
                left: 0rem;
                display: inline-block;
                width: 64.125rem;
                height: 12.188rem;
              `}
            >
              <p
                className={css`
                  margin: 0;
                `}
              >
                Radiographic Applications
              </p>
              <ul
                className={css`
                  margin: 0;
                  font-family: inherit;
                  font-size: inherit;
                  padding-left: var(--padding-2xl);
                `}
              >
                <li
                  className={css`
                    margin-bottom: ;
                  `}
                >{`Used in hospitals, medical centers, clinics, sport complexes, nursing homes, home health care, correctional facilities & military applications.`}</li>
              </ul>
              <p
                className={css`
                  margin: 0;
                `}
              >
                Generator Type
              </p>
              <ul
                className={css`
                  margin: 0;
                  font-family: inherit;
                  font-size: inherit;
                  padding-left: var(--padding-2xl);
                `}
              >
                <li
                  className={css`
                    margin-bottom: ;
                  `}
                >
                  High frequency Resonant Inverter Microprocessor controlled.
                </li>
              </ul>
              <p
                className={css`
                  margin: 0;
                `}
              >
                kVp Range
              </p>
              <ul
                className={css`
                  margin: 0;
                  font-family: inherit;
                  font-size: inherit;
                  padding-left: var(--padding-2xl);
                `}
              >
                <li className={css``}>
                  Extremity Range – Adjustable in 1kVp step
                </li>
              </ul>
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 20.688rem;
              left: 6.25rem;
              width: 77.438rem;
              height: 21.75rem;
            `}
          >
            <img
              className={css`
                position: absolute;
                top: 0rem;
                left: 0rem;
                width: 37.813rem;
                height: 21.75rem;
                object-fit: cover;
              `}
              alt=""
              src="/group-107@2x.png"
            />
            <img
              className={css`
                position: absolute;
                top: 0rem;
                left: 39.625rem;
                width: 37.813rem;
                height: 21.75rem;
                object-fit: cover;
              `}
              alt=""
              src="/group-106@2x.png"
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: 46.469rem;
              left: -0.031rem;
              border-top: 1px solid var(--color-gainsboro);
              box-sizing: border-box;
              width: 90.063rem;
              height: 0.063rem;
            `}
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 111.688rem;
            left: 0rem;
            width: 90rem;
            height: 48.563rem;
            font-size: var(--font-size-17xl);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0rem;
              left: 0rem;
              background-color: var(--color-white1);
              width: 90rem;
              height: 48.563rem;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 3.438rem;
              left: 35.25rem;
              font-weight: 500;
            `}
          >
            Related Products
          </div>
          <div
            className={css`
              position: absolute;
              top: 8.438rem;
              left: 6.25rem;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              font-size: var(--font-size-xl);
              color: var(--color-gray-1);
            `}
          >
            <div
              className={css`
                width: 17.813rem;
                position: relative;
                height: 27.875rem;
              `}
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
                    USD 23,245.500
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
                    USD 30,093
                  </div>
                </div>
                <div
                  className={css`
                    position: absolute;
                    height: 61.62%;
                    width: 48.36%;
                    top: 0%;
                    right: 51.64%;
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
                    SR-130
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
                    Portable X-ray
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
                src="/images8@2x.png"
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
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 159.5rem;
            left: 0rem;
            width: 90rem;
            height: 31.563rem;
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
                        onClick={onHomeTextClick}
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
          <Frame6 />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          top={-100}
          right={100}
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
          <Frame5 />
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
          <Frame4/>
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

export default SingleProduct;
