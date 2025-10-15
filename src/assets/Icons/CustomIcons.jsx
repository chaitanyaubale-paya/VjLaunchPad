// src/components/CustomIcons.jsx


/* ---------------- ICON 1 ---------------- */
/* Small box with three white squares inside an outlined square */
export const BuildingIcon = (props) => (
  <svg
    width={props.width || 30}
    height={props.height || 30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="9.53" y="12.39" width="2.86" height="2.86" fill="white" />
    <rect x="9.53" y="18.11" width="11.43" height="4.77" fill="white" />
    <rect x="18.11" y="12.39" width="2.86" height="2.86" fill="white" />
    <rect
      x="2.9"
      y="2.9"
      width="24.69"
      height="24.69"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);

/* ---------------- ICON 2 ---------------- */
/* Circular gradient background with a small white outline “L” shape */
export const GradientIcon1 = (props) => (
  <svg
    width={props.width || 44}
    height={props.height || 44}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#A26800" />
        <stop offset="100%" stopColor="#A26800" />
      </linearGradient>
    </defs>
    <circle cx="22" cy="22" r="22" fill="url(#grad1)" />
    <rect
      x="11"
      y="11"
      width="23"
      height="23"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="22.5"
      y="15.6"
      width="4.88"
      height="11.78"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

/* ---------------- ICON 3 ---------------- */
/* Circular gradient background with a centered white rectangle */
export const GradientIcon2 = (props) => (
  <svg
    width={props.width || 44}
    height={props.height || 44}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#A26800" />
        <stop offset="100%" stopColor="#A26800" />
      </linearGradient>
    </defs>
    <circle cx="22" cy="22" r="22" fill="url(#grad2)" />
    <rect x="11" y="14" width="22" height="16" fill="white" />
  </svg>
);

/* ---------------- ICON 4 ---------------- */
/* Simple small white outlined rectangle */
export const OutlineSquareIcon = (props) => (
  <svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);
