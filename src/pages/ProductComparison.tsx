import { FunctionComponent, useState, useRef, useCallback } from "react";
import Frame6 from "../components/Frame6";
import PortalPopup from "../components/PortalPopup";
import Frame7 from "../components/Frame7";
import Frame5 from "../components/Frame5";
import Frame4 from "../components/Frame4";
import CartSlider1 from "../components/CartSlider1";
import Frame8 from "../components/Frame8";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const ProductComparison: FunctionComponent = () => {
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
  const rectangleRef = useRef<HTMLDivElement>(null);
  const [isFrame4Open, setFrame4Open] = useState(false);
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

  const openFrame4 = useCallback(() => {
    setFrame4Open(true);
  }, []);

  const closeFrame4 = useCallback(() => {
    setFrame4Open(false);
  }, []);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onViewMoreTextClick = useCallback(() => {
    navigate("/shop");
  }, [navigate]);

  const onGroupImageClick = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  return (
    <>
      <div
        className={css`
          width: 100%;
          position: relative;
          background-color: var(--color-white1);
          height: 194.625rem;
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
            height: 26rem;
            overflow: hidden;
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
              font-size: var(--font-size-base);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 6.063rem;
                left: 41.25rem;
                width: 11.188rem;
                height: 7.625rem;
                overflow: hidden;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 6.125rem;
                  left: 0rem;
                  width: 11.188rem;
                  height: 1.5rem;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    font-weight: 500;
                    cursor: pointer;
                  `}
                  onClick={onHomeTextClick}
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
                  Comparison
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
                top: 0rem;
                left: 0rem;
                width: 90rem;
                height: 19.75rem;
                overflow: hidden;
                text-align: center;
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
                  top: 3.813rem;
                  left: 29.313rem;
                  width: 31.375rem;
                  height: 12.125rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: calc(50% - 251px);
                    width: 31.375rem;
                    height: 9.313rem;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 3.813rem;
                      left: 0rem;
                      font-weight: 500;
                    `}
                  >
                    Product Comparison
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 28.125rem;
            left: 0rem;
            width: 90rem;
            height: 166.5rem;
            overflow: hidden;
            font-size: var(--font-size-base);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 134.938rem;
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
          <div
            className={css`
              position: absolute;
              top: 0rem;
              left: 0rem;
              width: 90rem;
              height: 163.188rem;
              overflow: hidden;
              font-size: var(--font-size-lg);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 118.063rem;
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
                top: 8.125rem;
                left: 67.063rem;
                box-shadow: 0px 4px 25px -4px rgba(0, 0, 0, 0.25);
                border-radius: var(--br-7xs);
                background-color: var(--color-white1);
                width: 15.063rem;
                height: 14.25rem;
                display: none;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 6rem;
                width: 78rem;
                height: 11.25rem;
                overflow: hidden;
                font-size: var(--font-size-9xl);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 76.188rem;
                  height: 11.25rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 1.313rem;
                    left: 0rem;
                    line-height: 126.5%;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    width: 13.938rem;
                  `}
                >
                  <span
                    className={css`
                      width: 100%;
                    `}
                  >
                    <p
                      className={css`
                        margin: 0;
                      `}
                    >{`Go to Product page for more `}</p>
                    <p
                      className={css`
                        margin: 0;
                      `}
                    >
                      Products
                    </p>
                  </span>
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 9.188rem;
                    left: 0rem;
                    width: 7.188rem;
                    height: 2.063rem;
                    font-size: var(--font-size-xl);
                    color: var(--color-dimgray);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      font-weight: 500;
                      cursor: pointer;
                    `}
                    onClick={onViewMoreTextClick}
                  >
                    View More
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 2rem;
                      left: -0.062rem;
                      border-top: 2px solid var(--color-dimgray);
                      box-sizing: border-box;
                      width: 7.313rem;
                      height: 0.125rem;
                    `}
                  />
                </div>
                <img
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 38.75rem;
                    width: 18rem;
                    height: 11.063rem;
                    object-fit: cover;
                    cursor: pointer;
                  `}
                  alt=""
                  src="/group-157@2x.png"
                  onClick={onGroupImageClick}
                />
                <img
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 18.625rem;
                    width: 17.5rem;
                    height: 11.063rem;
                    object-fit: cover;
                    cursor: pointer;
                  `}
                  alt=""
                  src="/group-156@2x.png"
                  onClick={onGroupImageClick}
                />
                <div
                  className={css`
                    position: absolute;
                    top: 3.063rem;
                    left: 61.063rem;
                    width: 15.125rem;
                    height: 4.938rem;
                    font-size: var(--font-size-5xl);
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      width: 15.125rem;
                      height: 4.938rem;
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 2.5rem;
                        left: 0rem;
                        border-radius: var(--br-7xs);
                        background-color: var(--primary);
                        width: 15.125rem;
                        height: 2.438rem;
                        cursor: pointer;
                      `}
                      ref={rectangleRef}
                      onClick={openFrame4}
                    />
                    <div
                      className={css`
                        position: absolute;
                        top: 0rem;
                        left: 0rem;
                        line-height: 126.5%;
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        width: 10.875rem;
                        height: 1.625rem;
                      `}
                    >
                      Add A Product
                    </div>
                    <div
                      onClick={openFrame4}
                      className={css`
                        position: absolute;
                        top: 2.875rem;
                        left: 1.125rem;
                        font-size: var(--font-size-sm);
                        line-height: 126.5%;
                        font-weight: 600;
                        color: var(--color-white1);
                        display: flex;
                        align-items: center;
                        width: 9.313rem;
                        height: 1.625rem;
                      `}
                    >
                      Choose a Product
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 3.438rem;
                        left: 13.063rem;
                        width: 1.125rem;
                        height: 0.531rem;
                      `}
                      alt=""
                      src="/vector-63.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 12.188rem;
                left: 24.75rem;
                width: 40.5rem;
                height: 1.875rem;
                overflow: hidden;
                font-size: var(--font-size-5xl);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 34.75rem;
                  height: 1.875rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    line-height: 126.5%;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    width: 12rem;
                  `}
                >
                  PowerMax 1260
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 20.75rem;
                    line-height: 126.5%;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    width: 14rem;
                  `}
                >
                  SR-130
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 14.438rem;
                left: 24.813rem;
                width: 40.375rem;
                height: 1.688rem;
                overflow: hidden;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 29.688rem;
                  height: 1.688rem;
                  overflow: hidden;
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
                  USD. 36,725.00
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 20.75rem;
                    font-weight: 500;
                  `}
                >
                  USD. 23,245.500
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 16.438rem;
                left: 24.813rem;
                width: 40.375rem;
                height: 1.875rem;
                overflow: hidden;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 35.375rem;
                  height: 1.875rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 10.063rem;
                    width: 20.438rem;
                    height: 1.875rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: -0.031rem;
                      left: -0.031rem;
                      border-right: 1px solid var(--color-darkgray-100);
                      box-sizing: border-box;
                      width: 0.063rem;
                      height: 1.938rem;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: -0.031rem;
                      left: 20.406rem;
                      border-right: 1px solid var(--color-darkgray-100);
                      box-sizing: border-box;
                      width: 0.063rem;
                      height: 1.938rem;
                    `}
                  />
                </div>
                <div
                  className={css`
                    position: absolute;
                    top: 0.125rem;
                    left: 0rem;
                    width: 35.375rem;
                    height: 1.688rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 20.75rem;
                      font-weight: 500;
                    `}
                  >
                    4.2
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      font-weight: 500;
                    `}
                  >
                    4.7
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0.188rem;
                      left: 1.938rem;
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
                      src="/carbonstarhalf.svg"
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0.188rem;
                      left: 22.75rem;
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
                      src="/carbonstarhalf.svg"
                    />
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0.188rem;
                      left: 10.625rem;
                      font-size: var(--font-size-smi);
                      color: var(--color-darkgray-100);
                    `}
                  >
                    204 Review
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0.188rem;
                      left: 31rem;
                      font-size: var(--font-size-smi);
                      color: var(--color-darkgray-100);
                    `}
                  >
                    145 Review
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 22rem;
                left: 3.375rem;
                width: 83.25rem;
                height: 141.188rem;
                overflow: hidden;
                font-size: var(--font-size-xl);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 2.625rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 2.188rem;
                  overflow: hidden;
                  font-size: var(--font-size-9xl);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    line-height: 126.5%;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    width: 10.938rem;
                  `}
                >{`General `}</div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 43.563rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 2.188rem;
                  overflow: hidden;
                  font-size: var(--font-size-9xl);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    line-height: 126.5%;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    width: 10.938rem;
                  `}
                >
                  Warranty
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 72rem;
                  left: 2.438rem;
                  width: 78.375rem;
                  height: 22.438rem;
                  overflow: hidden;
                  color: var(--color-white1);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 54.563rem;
                    height: 22.438rem;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      width: 54.563rem;
                      height: 15.125rem;
                      color: var(--color-black);
                    `}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0.063rem;
                        left: 0rem;
                        line-height: 126.5%;
                        display: flex;
                        align-items: center;
                        width: 10.938rem;
                      `}
                    >
                      Not Covered in Warranty
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: 13.125rem;
                        left: 0rem;
                        line-height: 126.5%;
                        display: flex;
                        align-items: center;
                        width: 15.063rem;
                      `}
                    >
                      Domestic Warranty
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: 0.063rem;
                        left: 20.063rem;
                        line-height: 126.5%;
                        display: flex;
                        align-items: center;
                        width: 15.063rem;
                      `}
                    >{`The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.`}</div>
                    <div
                      className={css`
                        position: absolute;
                        top: 0rem;
                        left: 39.25rem;
                        line-height: 126.5%;
                        display: flex;
                        align-items: center;
                        width: 15.063rem;
                      `}
                    >{`The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.`}</div>
                    <div
                      className={css`
                        position: absolute;
                        top: 13.125rem;
                        left: 20.063rem;
                        line-height: 126.5%;
                        display: flex;
                        align-items: center;
                        width: 15.063rem;
                      `}
                    >
                      1 Year
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: 13.563rem;
                        left: 39.5rem;
                        line-height: 126.5%;
                        display: flex;
                        align-items: center;
                        width: 15.063rem;
                      `}
                    >
                      3 Months
                    </div>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 18.438rem;
                      left: 18.813rem;
                      width: 13.438rem;
                      height: 4rem;
                      cursor: pointer;
                    `}
                    onClick={onGroupContainerClick}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0rem;
                        left: 0rem;
                        background-color: var(--primary);
                        border: 1px solid var(--primary);
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
                      top: 18.438rem;
                      left: 39rem;
                      width: 13.438rem;
                      height: 4rem;
                      cursor: pointer;
                    `}
                    onClick={onGroupContainerClick}
                  >
                    <div
                      className={css`
                        position: absolute;
                        top: 0rem;
                        left: 0rem;
                        background-color: var(--primary);
                        border: 1px solid var(--primary);
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
                </div>
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  width: 83.25rem;
                  height: 141.188rem;
                  overflow: hidden;
                `}
                alt=""
                src="/frame.svg"
              />
              <div
                className={css`
                  position: absolute;
                  top: 5.75rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 2.375rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 55.688rem;
                    height: 2.375rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0.813rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 10.938rem;
                    `}
                  >
                    kVp Range
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 14.125rem;
                    `}
                  >
                    40 - 120 kVp
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 41.563rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 14.125rem;
                    `}
                  >
                    40 - 100 kVp
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 10.25rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 1.563rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 55.688rem;
                    height: 1.563rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 14.125rem;
                    `}
                  >
                    15 - 60 mA
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 41.563rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 14.125rem;
                    `}
                  >{`Adjustable 15 & 30 mA`}</div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    mA Range
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 13.938rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 1.563rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 56.625rem;
                    height: 1.563rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    mAs Range
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                     0.125 - 200
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 41.563rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    0.15 - 120
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 16.813rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 3.125rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 52.5rem;
                    height: 3.125rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 10.938rem;
                    `}
                  >
                    Total Max Power Output
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0.813rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 10.938rem;
                    `}
                  >
                    3kW
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0.813rem;
                      left: 41.563rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 10.938rem;
                    `}
                  >
                    3kW
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 21.313rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 1.563rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 56.625rem;
                    height: 1.563rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    Input Voltage
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    110 - 230VAC 50/60Hz
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 41.563rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    115 / 230VAC 50/60Hz
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 25rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 1.563rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 56.625rem;
                    height: 1.563rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    Exposure Time
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    0.01 - 3.33 seconds
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 41.563rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    0.01 – 4.00 seconds.
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 28.75rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 1.563rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 55.688rem;
                    height: 1.563rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 10.938rem;
                    `}
                  >
                    Width
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 14.125rem;
                    `}
                  >
                    66 CM
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 41.563rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 14.125rem;
                    `}
                  >
                    53 CM
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 32.438rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 1.563rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 55.688rem;
                    height: 1.563rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 14.125rem;
                    `}
                  >
                    198 CM
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 41.563rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 14.125rem;
                    `}
                  >
                    198 CM
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    Height
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 36.125rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 1.563rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 52.5rem;
                    height: 1.563rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 10.938rem;
                    `}
                  >
                    Weight
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 10.938rem;
                    `}
                  >
                    50 KG
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 41.563rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 10.938rem;
                    `}
                  >
                    45 KG
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 47.5rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 3.375rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 54.125rem;
                    height: 3.375rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 14.563rem;
                    `}
                  >
                    Warranty Summary
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0.25rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 14.125rem;
                    `}
                  >
                    1 Year Manufacturing Warranty
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 40rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 14.125rem;
                    `}
                  >
                    1.2 Year Manufacturing Warranty
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 53rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 7.813rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 54.688rem;
                    height: 7.813rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    <span
                      className={css`
                        width: 100%;
                      `}
                    >
                      <p
                        className={css`
                          margin: 0;
                        `}
                      >{`Warranty Service `}</p>
                      <p
                        className={css`
                          margin: 0;
                        `}
                      >
                        Type
                      </p>
                    </span>
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    For Warranty Claims or Any Product Related Issues Please
                    Email at support@pnwx.com
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0.313rem;
                      left: 39.625rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    For Warranty Claims or Any Product Related Issues Please
                    Email at support@pnwx.com
                  </div>
                </div>
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 62.688rem;
                  left: 2.625rem;
                  width: 78rem;
                  height: 6.25rem;
                  overflow: hidden;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0rem;
                    left: 0rem;
                    width: 54.688rem;
                    height: 6.25rem;
                    overflow: hidden;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0.25rem;
                      left: 0rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    Covered in Warranty
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0.313rem;
                      left: 20.063rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    Warranty Against Manufacturing Defect
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 0rem;
                      left: 39.625rem;
                      line-height: 126.5%;
                      display: flex;
                      align-items: center;
                      width: 15.063rem;
                    `}
                  >
                    Warranty of the product is limited to manufacturing defects
                    only.
                  </div>
                </div>
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
          <Frame4  />
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
      {isFrame4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          top={-120}
          relativeLayerRef={rectangleRef}
          onOutsideClick={closeFrame4}
        >
          <Frame8 />
        </PortalPopup>
      )}
    </>
  );
};

export default ProductComparison;
