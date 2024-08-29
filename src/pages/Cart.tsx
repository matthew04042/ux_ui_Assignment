import { FunctionComponent, useState, useRef, useCallback } from "react";
import Frame6 from "../components/Frame6";
import PortalPopup from "../components/PortalPopup";
import Frame7 from "../components/Frame7";
import Frame5 from "../components/Frame5";
import Frame4 from "../components/Frame4";
import CartSlider1 from "../components/CartSlider1";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Cart: FunctionComponent = () => {
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

  const onGroupImageClick = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/checkout");
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
          height: 112.25rem;
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
            top: 6.25rem;
            left: 0rem;
            width: 90rem;
            height: 19.75rem;
            font-size: var(--font-size-29xl);
          `}
        >
          <img
            className={css`
              position: absolute;
              top: 0rem;
              left: 0rem;
              width: 90rem;
              height: 19.75rem;
              object-fit: cover;
            `}
            alt=""
            src="/rectangle-1@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 7.625rem;
              left: 41.688rem;
              width: 6.625rem;
              height: 4.5rem;
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
              Cart
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 12.188rem;
              left: 41.25rem;
              width: 7.188rem;
              height: 1.5rem;
              font-size: var(--font-size-base);
            `}
          >
            <div
              onClick={onHomeTextClick}
              className={css`
                position: absolute;
                top: 0rem;
                left: 0rem;
                font-weight: 500;
              `}
            >
              Home
            </div>
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 5rem;
                font-weight: 300;
              `}
            >
              Cart
            </div>
            <img
              className={css`
                position: absolute;
                top: 0.125rem;
                left: 3.375rem;
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
            top: 26rem;
            left: 0rem;
            width: 90rem;
            height: 32.813rem;
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
              height: 32.813rem;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 4.5rem;
              left: 6.25rem;
              width: 77.5rem;
              height: 24.375rem;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 0rem;
                width: 51.063rem;
                height: 13.438rem;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 9.375rem;
                  left: 8.875rem;
                  width: 35.688rem;
                  height: 1.563rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 28.813rem;
                    color: var(--color-black);
                  `}
                >
                  USD 36,725.00
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0.063rem;
                    left: 0rem;
                  `}
                >
                  PowerMax 1260 X
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0.063rem;
                    left: 11.063rem;
                  `}
                >
                  USD 36,725.00
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 51.063rem;
                  height: 13.438rem;
                  color: var(--color-black);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    background-color: var(--color-linen-200);
                    width: 51.063rem;
                    height: 3.438rem;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: 0.938rem;
                    left: 0rem;
                    width: 49.5rem;
                    height: 12.5rem;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 8.875rem;
                      font-weight: 500;
                    `}
                  >
                    Product
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 19.938rem;
                      font-weight: 500;
                    `}
                  >
                    Price
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 31rem;
                      font-weight: 500;
                    `}
                  >
                    Quantity
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 37.625rem;
                      font-weight: 500;
                    `}
                  >
                    Subtotal
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: 5.938rem;
                      left: 0rem;
                      width: 6.75rem;
                      height: 6.563rem;
                      object-fit: cover;
                      cursor: pointer;
                    `}
                    alt=""
                    src="/group-146@2x.png"
                    onClick={onGroupImageClick}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 8.25rem;
                      left: 32.188rem;
                      width: 2rem;
                      height: 2rem;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0rem;
                        left: 0rem;
                        border-radius: var(--br-8xs);
                        border: 1px solid var(--color-darkgray-100);
                        box-sizing: border-box;
                        width: 2rem;
                        height: 2rem;
                      `}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: 0.25rem;
                        left: 0.813rem;
                      `}
                    >
                      1
                    </div>
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: 8.313rem;
                      left: 47.75rem;
                      width: 1.75rem;
                      height: 1.75rem;
                      overflow: hidden;
                    `}
                    alt=""
                    src="/antdesigndeletefilled.svg"
                  />
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 52.938rem;
                width: 24.563rem;
                height: 24.375rem;
                color: var(--color-black);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  background-color: var(--color-linen-200);
                  width: 24.563rem;
                  height: 24.375rem;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 0.938rem;
                  left: 6rem;
                  font-size: 2rem;
                  font-weight: 600;
                `}
              >
                Cart Totals
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 7.75rem;
                  left: 4.688rem;
                  font-weight: 500;
                `}
              >
                Subtotal
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 11.188rem;
                  left: 4.688rem;
                  font-weight: 500;
                `}
              >
                Total
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 7.75rem;
                  left: 12.875rem;
                  color: var(--color-darkgray-100);
                `}
              >
                USD 36,725.00
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 11.188rem;
                  left: 10.875rem;
                  font-size: var(--font-size-xl);
                  font-weight: 500;
                  color: var(--primary);
                `}
              >
                USD 36,725.00
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 15.688rem;
                  left: 5.375rem;
                  width: 13.875rem;
                  height: 3.688rem;
                  cursor: pointer;
                  font-size: var(--font-size-xl);
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
                    width: 13.875rem;
                    height: 3.688rem;
                  `}
                />
                <div
                  className={css`
                    position: absolute;
                    top: 0.875rem;
                    left: 3.688rem;
                  `}
                >
                  Check Out
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 60.188rem;
            left: 0rem;
            background-color: var(--color-linen-100);
            width: 90rem;
            height: 16.875rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: var(--padding-81xl) 0rem;
            box-sizing: border-box;
            font-size: var(--font-size-6xl);
            color: var(--color-gray-100);
          `}
        >
          <div
            className={css`
              width: 83.375rem;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: var(--gap-3xs);
              `}
            >
              <img
                className={css`
                  width: 3.75rem;
                  position: relative;
                  height: 3.75rem;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src="/trophy-1.svg"
              />
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-11xs);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 150%;
                    font-weight: 600;
                  `}
                >
                  High Quality
                </div>
                <div
                  className={css`
                    position: relative;
                    font-size: var(--font-size-xl);
                    line-height: 150%;
                    font-weight: 500;
                    color: var(--color-gray-3);
                  `}
                >
                  crafted from top materials
                </div>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: var(--gap-3xs);
              `}
            >
              <img
                className={css`
                  width: 3.75rem;
                  position: relative;
                  height: 3.75rem;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src="/guarantee.svg"
              />
              <div
                className={css`
                  width: 5.313rem;
                  position: relative;
                  height: 5.313rem;
                  display: none;
                `}
              />
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-11xs);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 150%;
                    font-weight: 600;
                  `}
                >
                  Warranty Protection
                </div>
                <div
                  className={css`
                    position: relative;
                    font-size: var(--font-size-xl);
                    line-height: 150%;
                    font-weight: 500;
                    color: var(--color-gray-3);
                  `}
                >
                  Over 2 years
                </div>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: var(--gap-3xs);
              `}
            >
              <img
                className={css`
                  width: 3.75rem;
                  position: relative;
                  height: 3.75rem;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src="/shipping.svg"
              />
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-11xs);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 150%;
                    font-weight: 600;
                  `}
                >
                  Free Shipping
                </div>
                <div
                  className={css`
                    position: relative;
                    font-size: var(--font-size-xl);
                    line-height: 150%;
                    font-weight: 500;
                    color: var(--color-gray-3);
                  `}
                >
                  Order over 150 $
                </div>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: var(--gap-3xs);
              `}
            >
              <img
                className={css`
                  width: 3.75rem;
                  position: relative;
                  height: 3.75rem;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src="/customersupport.svg"
              />
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-11xs);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 150%;
                    font-weight: 600;
                  `}
                >
                  24 / 7 Support
                </div>
                <div
                  className={css`
                    position: relative;
                    font-size: var(--font-size-xl);
                    line-height: 150%;
                    font-weight: 500;
                    color: var(--color-gray-3);
                  `}
                >
                  Dedicated support
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 77.563rem;
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
          placement="Top left"
          top={-187}
          left={-30}
          relativeLayerRef={partsTabTextRef}
          onOutsideClick={closeFrame1}
        >
          <Frame7  />
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
          <Frame4  />
        </PortalPopup>
      )}
      {isCartSliderOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          top={-300}
          right={-10}
          relativeLayerRef={antDesignshoppingCartOutliIconRef}
          onOutsideClick={closeCartSlider}
        >
          <CartSlider1 />
        </PortalPopup>
      )}
    </>
  );
};

export default Cart;
