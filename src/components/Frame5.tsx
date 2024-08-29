import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type Frame5Type = {
  className?: string;
};

const Frame5: FunctionComponent<Frame5Type> = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          width: 7.063rem;
          position: relative;
          height: 30.75rem;
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
          D.R. Product
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 28.188rem;
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
          Veterinary
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 25.625rem;
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
          Ultrasound
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 23.063rem;
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
          Proctection
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 20.5rem;
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
          Technologist
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 17.938rem;
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
          Seating
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 15.375rem;
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
          Q/C Test
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 12.813rem;
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
          Care
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 10.25rem;
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
          MRI
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
          Storage
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
          F. I. Markers
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
          E.R. Products
        </div>
      </div>
    </div>
  );
};

export default Frame5;
