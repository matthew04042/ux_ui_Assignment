import { FunctionComponent, useState, useRef, useCallback } from "react";
import Frame6 from "../components/Frame6";
import PortalPopup from "../components/PortalPopup";
import Frame7 from "../components/Frame7";
import Frame5 from "../components/Frame5";
import Frame4 from "../components/Frame4";
import CartSlider1 from "../components/CartSlider1";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Shop1: FunctionComponent = () => {
  const suppliesTabTextRef = useRef<HTMLDivElement>(null);
  const [isFrameOpen, setFrameOpen] = useState(false);
  const partsTabTextRef = useRef<HTMLDivElement>(null);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const accessoriesTAbTextRef = useRef<HTMLDivElement>(null);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const equipmentTabTextRef = useRef<HTMLDivElement>(null);
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
    navigate("/single-product");
  }, [navigate]);

  const onHomeTabTextClick = useCallback(() => {
    navigate("/");
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
          height: 173.188rem;
          overflow: hidden;
          text-align: left;
          font-size: var(--font-size-xl);
          color: var(--color-black);
          font-family: var(--font-poppins);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 26.063rem;
            left: 0rem;
            width: 90rem;
            height: 6.25rem;
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
              top: 2.188rem;
              left: 6.125rem;
              width: 5.313rem;
              height: 1.875rem;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 2.313rem;
              `}
            >
              Filter
            </div>
            <img
              className={css`
                position: absolute;
                top: 0.125rem;
                left: 0rem;
                width: 1.563rem;
                height: 1.563rem;
                overflow: hidden;
              `}
              alt=""
              src="/systemuiconsfiltering.svg"
            />
          </div>
          <img
            className={css`
              position: absolute;
              top: 2.375rem;
              left: 16.125rem;
              width: 1.5rem;
              height: 1.5rem;
              overflow: hidden;
            `}
            alt=""
            src="/biviewlist.svg"
          />
          <img
            className={css`
              position: absolute;
              top: 2.25rem;
              left: 12.875rem;
              width: 1.75rem;
              height: 1.75rem;
              overflow: hidden;
            `}
            alt=""
            src="/cigridbiground.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 1.938rem;
              left: 19.5rem;
              width: 12.875rem;
              height: 2.313rem;
              font-size: var(--font-size-base);
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
                top: 0.438rem;
                left: 2.125rem;
              `}
            >
              Showing 2 of 2 results
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 1.375rem;
              left: 56.063rem;
              width: 7.875rem;
              height: 3.438rem;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0.75rem;
                left: 0rem;
              `}
            >
              Show
            </div>
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 4.438rem;
                width: 3.438rem;
                height: 3.438rem;
                color: var(--color-darkgray-100);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  background-color: var(--color-white1);
                  width: 3.438rem;
                  height: 3.438rem;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 0.75rem;
                  left: 1.125rem;
                `}
              >
                16
              </div>
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 1.375rem;
              left: 65.75rem;
              width: 18rem;
              height: 3.438rem;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0.75rem;
                left: 0rem;
              `}
            >
              Short by
            </div>
            <div
              className={css`
                position: absolute;
                top: 0rem;
                left: 6.25rem;
                width: 11.75rem;
                height: 3.438rem;
                color: var(--color-darkgray-100);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  background-color: var(--color-white1);
                  width: 11.75rem;
                  height: 3.438rem;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 0.75rem;
                  left: 1.875rem;
                `}
              >
                Default
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 35.188rem;
            left: 0rem;
            width: 90rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            color: var(--color-gray-1);
          `}
        >
          <div
            className={css`
              width: 90rem;
              position: relative;
              height: 48.563rem;
              cursor: pointer;
              z-index: 0;
            `}
            onClick={onGroupContainerClick}
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
                top: 1.063rem;
                left: 6.188rem;
                width: 37.625rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
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
                  onClick={onGroupContainerClick}
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
                        USD 23.245.500
                      </div>
                      <div
                        className={css`
                          position: relative;
                          font-size: var(--font-size-base);
                          text-decoration: line-through;
                          line-height: 150%;
                          color: var(--color-gray-4);
                          white-space: pre-wrap;
                        `}
                      >
                        USD 30,039
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        height: 61.62%;
                        width: 49%;
                        top: 0%;
                        right: 51%;
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
                        Portable X-Ray
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
                    src="/images9@2x.png"
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
                    flex: 1;
                    position: relative;
                    height: 27.875rem;
                    cursor: pointer;
                  `}
                  onClick={onGroupContainerClick}
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
                      width: 12.563rem;
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
                      left: 0.063rem;
                      width: 17.75rem;
                      height: 18.813rem;
                      object-fit: contain;
                    `}
                    alt=""
                    src="/images10@2x.png"
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
              </div>
            </div>
          </div>
          <div
            className={css`
              margin: 0 !important;
              position: absolute;
              top: 38.188rem;
              left: 39.188rem;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-11xl) 0rem 0rem;
              gap: 2.375rem;
              z-index: 1;
              color: var(--color-white1);
            `}
          >
            <div
              className={css`
                width: 3.75rem;
                position: relative;
                height: 3.75rem;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  border-radius: var(--br-3xs);
                  background-color: var(--primary);
                  width: 3.75rem;
                  height: 3.75rem;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 0.938rem;
                  left: 1.688rem;
                `}
              >
                1
              </div>
            </div>
            <div
              className={css`
                width: 6.125rem;
                position: relative;
                height: 3.75rem;
                color: rgba(0, 0, 0, 0.4);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 0rem;
                  border-radius: var(--br-3xs);
                  background-color: var(--color-linen-200);
                  width: 6.125rem;
                  height: 3.75rem;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: 0.938rem;
                  left: 1.75rem;
                  font-weight: 300;
                `}
              >
                Next
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
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            font-size: var(--font-size-mini);
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
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
                      cursor: pointer;
                    `}
                    onClick={onHomeTabTextClick}
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
                    ref={accessoriesTAbTextRef}
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
                    ref={equipmentTabTextRef}
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
              align-self: stretch;
              position: relative;
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
                top: 6.563rem;
                left: 20.75rem;
                width: 48.438rem;
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
                DIGITAL Portable X-Ray Systems
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 12.188rem;
                left: 38.25rem;
                width: 23.563rem;
                height: 1.5rem;
                font-size: var(--font-size-base);
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
                Equipment
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 0rem;
                  left: 8rem;
                  font-weight: 300;
                `}
              >
                DIGITAL Portable X-Ray Systems
              </div>
              <img
                className={css`
                  position: absolute;
                  top: 0.125rem;
                  left: 6.375rem;
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
        </div>
        <div
          className={css`
            position: absolute;
            top: 124.75rem;
            left: -0.187rem;
            width: 90rem;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            font-size: var(--font-size-6xl);
            color: var(--color-gray-100);
          `}
        >
          <div
            className={css`
              width: 90rem;
              background-color: var(--color-linen-100);
              height: 16.875rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: var(--padding-81xl) 0rem;
              box-sizing: border-box;
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
              width: 90rem;
              position: relative;
              height: 31.563rem;
              font-size: var(--font-size-base);
              color: var(--color-black);
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
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          top={-600}
          left={-15}
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
          <Frame7  />
        </PortalPopup>
      )}
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          top={-520}
          left={-10}
          relativeLayerRef={accessoriesTAbTextRef}
          onOutsideClick={closeFrame2}
        >
          <Frame5  />
        </PortalPopup>
      )}
      {isFrame3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          top={-315}
          left={-20}
          relativeLayerRef={equipmentTabTextRef}
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
          <CartSlider1  />
        </PortalPopup>
      )}
    </>
  );
};

export default Shop1;
