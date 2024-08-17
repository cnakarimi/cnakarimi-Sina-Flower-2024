import React from "react";

type IconProps = {
  icon: JSX.Element;
  label: string;
  tooltipId: string;
  extraClasses?: string;
};

type TooltipProps = {
  id: string;
  label: string;
};

const icons = {
  shop: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.28869 2.76279C1.41968 2.36983 1.84442 2.15746 2.23737 2.28845L2.50229 2.37675C2.51549 2.38115 2.52864 2.38554 2.54176 2.38991C3.16813 2.59867 3.69746 2.7751 4.11369 2.96873C4.55613 3.17456 4.94002 3.42965 5.23112 3.83352C5.52221 4.2374 5.64282 4.68226 5.69817 5.16708C5.75025 5.62318 5.75023 6.18114 5.7502 6.84139L5.7502 9.49996C5.7502 10.9354 5.7518 11.9365 5.85335 12.6918C5.952 13.4256 6.13245 13.8142 6.40921 14.091C6.68598 14.3677 7.07455 14.5482 7.80832 14.6468C8.56367 14.7484 9.56479 14.75 11.0002 14.75H18.0002C18.4144 14.75 18.7502 15.0857 18.7502 15.5C18.7502 15.9142 18.4144 16.25 18.0002 16.25H10.9453C9.57774 16.25 8.47542 16.25 7.60845 16.1334C6.70834 16.0124 5.95047 15.7535 5.34855 15.1516C4.74664 14.5497 4.48774 13.7918 4.36673 12.8917C4.25017 12.0247 4.25018 10.9224 4.2502 9.55484L4.2502 6.883C4.2502 6.17 4.24907 5.69823 4.20785 5.33722C4.16883 4.99538 4.10068 4.83049 4.01426 4.71059C3.92784 4.59069 3.79296 4.47389 3.481 4.32877C3.15155 4.17551 2.70435 4.02524 2.02794 3.79978L1.76303 3.71147C1.37008 3.58049 1.15771 3.15575 1.28869 2.76279Z"
        fill="currentColor"
      />
      <path
        opacity="0.5"
        d="M5.74512 6C5.75008 6.25912 5.75008 6.53957 5.75007 6.8414L5.75006 9.5C5.75006 10.9354 5.75166 11.9365 5.85321 12.6919C5.86803 12.8021 5.8847 12.9046 5.90326 13H16.0221C16.9815 13 17.4612 13 17.8369 12.7523C18.2126 12.5045 18.4016 12.0636 18.7795 11.1818L19.2081 10.1818C20.0176 8.29294 20.4223 7.34853 19.9777 6.67426C19.5331 6 18.5056 6 16.4507 6H5.74512Z"
        fill="currentColor"
      />
      <path
        d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
        fill="currentColor"
      />
      <path
        d="M18 19.5001C18 18.6716 17.3284 18.0001 16.5 18.0001C15.6716 18.0001 15 18.6716 15 19.5001C15 20.3285 15.6716 21.0001 16.5 21.0001C17.3284 21.0001 18 20.3285 18 19.5001Z"
        fill="currentColor"
      />
    </>
  ),
  favorites: (
    <path d="m10 18-1.45-1.32C4.4 12.36 2 9.28 2 6a5 5 0 0 1 10 0c0 3.28-2.4 6.36-6.55 10.68L10 18Z" />
  ),
  home: (
    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
  ),
  wallet: (
    <>
      <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148Z" />
      <path d="M9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
      <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
    </>
  ),
  newItem: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 1v16M1 9h16"
    />
  ),
  settings: (
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
    />
  ),
  profile: (
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
  ),
};

const IconButton: React.FC<IconProps> = ({
  icon,
  label,
  tooltipId,
  extraClasses = "",
}) => (
  <button
    data-tooltip-target={tooltipId}
    type="button"
    className={`inline-flex flex-col items-center justify-center px-5 hover:bg-green-100 group ${extraClasses}`}
  >
    <svg
      className="w-5 h-5 mb-1 text-green-200 group-hover:text-green-600"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      {icon}
    </svg>
    <span className="sr-only">{label}</span>
  </button>
);

const Tooltip: React.FC<TooltipProps> = ({ id, label }) => (
  <div
    id={id}
    role="tooltip"
    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-white rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
  >
    {label}
    <div className="tooltip-arrow" data-popper-arrow></div>
  </div>
);

const MobileMainPage: React.FC = () => {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 translate-y-4 bg-white border border-gray-200 bottom-4 left-1/2 ">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <IconButton icon={icons.shop} label="Shop" tooltipId="tooltip-shop" />
        <Tooltip id="tooltip-shop" label="Shop" />

        <IconButton
          icon={icons.favorites}
          label="Favorites"
          tooltipId="tooltip-favorites"
        />
        <Tooltip id="tooltip-favorites" label="Favorites" />

        <IconButton icon={icons.home} label="Home" tooltipId="tooltip-home" />
        <Tooltip id="tooltip-home" label="Home" />

        <IconButton
          icon={icons.profile}
          label="Profile"
          tooltipId="tooltip-profile"
        />
        <Tooltip id="tooltip-profile" label="Profile" />

        <IconButton
          icon={icons.settings}
          label="Settings"
          tooltipId="tooltip-settings"
        />
        <Tooltip id="tooltip-settings" label="Settings" />
      </div>
    </div>
  );
};

export default MobileMainPage;
