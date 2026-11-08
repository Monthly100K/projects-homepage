const name = "SG Bus MRT";
const path = "/sg-bus-mrt";

export const sgBusMrt = {
  name,
  homeLabel: "SG Bus Mrt",
  language: "en",
  path,
  privacyPath: `${path}/privacy-policy`,
  contactEmail: "afakafak@gmail.com",
  icon: {
    src: "/sg-bus-mrt/icon.png",
    alt: `${name} app icon: a blue bus with a clock-shaped location pin`,
    width: 1024,
    height: 1024,
    sizes: "(min-width: 768px) 224px, 176px",
  },
  stores: [
    {
      label: "App Store",
      href: "https://apps.apple.com/sg/app/sg-bus-mrt-bus-timing-exits/id6759660895",
      accessibleLabel: `Download ${name} on the App Store (opens in a new tab)`,
      variant: "primary",
    },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.busmrtsg.app",
      accessibleLabel: `Get ${name} on Google Play (opens in a new tab)`,
      variant: "secondary",
    },
  ],
} as const;
