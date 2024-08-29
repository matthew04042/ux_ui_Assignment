import { FunctionComponent, useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";
export type Frame8Type = {
  className?: string;
};

const Frame8: FunctionComponent<Frame8Type> = ({ className = "" }) => {
  const navigate = useNavigate();
  const onGroupImageClick = useCallback(() => {
    navigate("/single-product");
  }, [navigate]);
  return (
    <div
      onClick={onGroupImageClick}
      className={[
        css`
          width: 15.125rem;
          position: relative;
          height: 5rem;
          max-width: 100%;
          max-height: 100%;
          overflow: auto;
          text-align: left;
          font-size: var(--font-size-mini);
          color: var(--color-black);
          font-family: var(--font-poppins);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          position: absolute;
          top: 0rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
          width: 15.125rem;
          height: 2.438rem;
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
          PowerMax 1260
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 2.563rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
          width: 15.125rem;
          height: 2.438rem;
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
          SR-130
        </div>
      </div>
    </div>
  );
};

export default Frame8;
