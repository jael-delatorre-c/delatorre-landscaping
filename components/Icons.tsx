import type { SVGProps } from "react";

/** Simple 1.5px line icons, inherit currentColor. Decorative by default. */
function Svg({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </Svg>
);

export const MenuIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const SnowflakeIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M12 2v20M4.5 6.5l15 11M19.5 6.5l-15 11" />
    <path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5M3.2 9.8l3.4.9-.9 3.4M20.8 9.8l-3.4.9.9 3.4M3.2 14.2l3.4-.9M20.8 14.2l-3.4-.9" />
  </Svg>
);

export const TreeIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M12 22v-7" />
    <path d="M12 15c-4.4 0-7-2.4-7-5.5 0-2.2 1.4-3.8 3.2-4.4C8.9 3.3 10.3 2 12 2s3.1 1.3 3.8 3.1c1.8.6 3.2 2.2 3.2 4.4 0 3.1-2.6 5.5-7 5.5z" />
    <path d="M12 15l-3-3M12 13l3-3" />
  </Svg>
);

export const HomeHeartIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M12 17.2l-2.6-2.5a1.6 1.6 0 1 1 2.6-1.9 1.6 1.6 0 1 1 2.6 1.9z" />
  </Svg>
);

export const CalendarCheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4M9 15l2 2 4-4" />
  </Svg>
);

export const SparkleIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
    <path d="M19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z" />
  </Svg>
);

export const SeasonsIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M12 21c-4-2.5-6-6-6-10a6 6 0 0 1 6-6" />
    <path d="M12 21c0-6 2-10 7-13-1 6-3.5 10-7 13z" />
    <path d="M12 5V3" />
  </Svg>
);

export const ArrowRightIcon = (p: SVGProps<SVGSVGElement>) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);
