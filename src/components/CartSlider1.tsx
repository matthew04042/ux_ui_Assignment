import { FunctionComponent, useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

export type CartSlider1Type = {
  className?: string;
};

const CartSlider1: FunctionComponent<CartSlider1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  const onFrameContainerClick2 = useCallback(() => {
    navigate("/product-comparison");
  }, [navigate]);

  return (
    <div
      className={[
        css`
          width: 417px;
          position: relative;
          height: 746px;
          max-width: 100%;
          max-height: 100%;
          overflow: auto;
          text-align: left;
          font-size: var(--font-size-base);
          color: var(--color-black);
          font-family: var(--font-poppins);
        `,
        className,
      ].join(" ")}
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
          height: 28.02%;
          width: 83.93%;
          top: 3.75%;
          right: 9.59%;
          bottom: 68.23%;
          left: 6.47%;
          font-size: var(--font-size-5xl);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0%;
            left: 0.86%;
            font-weight: 600;
          `}
        >
          Shopping Cart
        </div>
        <div
          className={css`
            position: absolute;
            height: 0.48%;
            width: 82.29%;
            top: 29.43%;
            right: 17%;
            bottom: 70.1%;
            left: 0.71%;
            border-top: 1px solid var(--color-gainsboro);
            box-sizing: border-box;
          `}
        />
        <img
          className={css`
            position: absolute;
            height: 9.09%;
            width: 4.74%;
            top: 3.35%;
            right: 0.4%;
            bottom: 87.56%;
            left: 94.86%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/group.svg"
        />
        <div
          className={css`
            position: absolute;
            height: 50.24%;
            width: 100%;
            top: 49.76%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            font-size: var(--font-size-base);
          `}
        >
          <img
            className={css`
              position: absolute;
              height: 100%;
              width: 30.86%;
              top: 0%;
              right: 69.14%;
              bottom: 0%;
              left: 0%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
              object-fit: cover;
            `}
            alt=""
            src="/group-1461@2x.png"
          />
          <div
            className={css`
              position: absolute;
              height: 53.33%;
              width: 36.57%;
              top: 22.86%;
              right: 23.43%;
              bottom: 23.81%;
              left: 40%;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0%;
                left: 0%;
              `}
            >
              PowerMax 1260 
            </div>
            <div
              className={css`
                position: absolute;
                height: 42.86%;
                width: 100%;
                top: 57.14%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                font-size: var(--font-size-xs);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0%;
                  left: 0%;
                  font-size: var(--font-size-base);
                  font-weight: 300;
                `}
              >
                1
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 12.5%;
                  left: 15.63%;
                  font-weight: 300;
                `}
              >
                X
              </div>
              <div
                className={css`
                  position: absolute;
                  top: 12.5%;
                  left: 33.59%;
                  font-weight: 500;
                  color: var(--primary);
                `}
              >
                USD 36,725.00
              </div>
            </div>
          </div>
          <img
            className={css`
              position: absolute;
              height: 19.05%;
              width: 5.71%;
              top: 40%;
              right: 0%;
              bottom: 40.95%;
              left: 94.29%;
              max-width: 100%;
              overflow: hidden;
              max-height: 100%;
            `}
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          height: 4.02%;
          width: 88.25%;
          top: 92.23%;
          right: 5.28%;
          bottom: 3.75%;
          left: 6.47%;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 14px;
          font-size: var(--font-size-xs);
        `}
      >
        <div
          className={css`
            border-radius: var(--br-31xl);
            border: 1px solid var(--color-black);
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-7xs) var(--padding-11xl);
            cursor: pointer;
          `}
          onClick={onFrameContainerClick}
        >
          <div
            className={css`
              position: relative;
            `}
          >
            Cart
          </div>
        </div>
        <div
          className={css`
            border-radius: var(--br-31xl);
            border: 1px solid var(--color-black);
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-7xs) var(--padding-11xl);
            cursor: pointer;
          `}
          onClick={onFrameContainerClick1}
        >
          <div
            className={css`
              position: relative;
            `}
          >
            Checkout
          </div>
        </div>
        <div
          className={css`
            border-radius: var(--br-31xl);
            border: 1px solid var(--color-black);
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-7xs) var(--padding-11xl);
            cursor: pointer;
          `}
          onClick={onFrameContainerClick2}
        >
          <div
            className={css`
              position: relative;
            `}
          >
            Comparison
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          height: 0.13%;
          width: 100.24%;
          top: 88.67%;
          right: -0.12%;
          bottom: 11.19%;
          left: -0.12%;
          border-top: 1px solid var(--color-gainsboro);
          box-sizing: border-box;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 82.44%;
          left: 7.43%;
        `}
      >
        Subtotal
      </div>
      <div
        className={css`
          position: absolute;
          top: 82.44%;
          left: 47.96%;
          font-weight: 600;
          color: var(--primary);
        `}
      >
        USD 36,725.00
      </div>
    </div>
  );
};

export default CartSlider1;
