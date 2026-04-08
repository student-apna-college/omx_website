"use client";

export default function RotatingWheel() {
  return (
    <>
      <div className="wrapper">
        <div className="wheel">
          <svg viewBox="0 0 300 300" className="svg">
            <defs>
              <path
                id="circlePath"
                d="M 150,150 m -110,0 a 110,110 0 1,1 220,0 a 110,110 0 1,1 -220,0"
              />
            </defs>

            <text fill="#1e73be" fontSize="16" fontWeight="600">
              <textPath href="#circlePath" startOffset="0%">
                SERVICE • TRUST • COMPETENCE •
              </textPath>
            </text>
          </svg>

          <div className="inner">OMX</div>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .wheel {
          position: relative;
          width: 200px;
          height: 200px;
          animation: rotate 12s linear infinite;
        }

        .svg {
          width: 100%;
          height: 100%;
        }

        .inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          background: #1e73be;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 22px;
          letter-spacing: 2px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}