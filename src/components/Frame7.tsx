import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type Frame7Type = {
  className?: string;
};

const Frame7: FunctionComponent<Frame7Type> = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          width: 7.063rem;
          position: relative;
          height: 10.25rem;
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
          Grids
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 7.688rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
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
          Cables
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 5.125rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
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
          Lamps
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 2.563rem;
          left: 0rem;
          background-color: var(--color-whitesmoke-100);
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
          Collimators
        </div>
      </div>
    </div>
  );
};

export default Frame7;
