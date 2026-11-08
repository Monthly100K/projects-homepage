import { sgBusMrt } from "@/features/sg-bus-mrt/config";
import type { PrivacyPolicyContent } from "@/types/privacy-policy";

export const privacyPolicy = {
  title: "Privacy Policy",
  eyebrow: "SG BUS MRT",
  updatedAt: "2026-11-08",
  introduction:
    "BusMrtSG (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you use the BusMrtSG mobile application (“App”).",
  sections: [
    {
      id: "information",
      title: "Information We Collect",
      blocks: [
        {
          type: "subsections",
          items: [
            {
              id: "location",
              title: "Location Information",
              paragraphs: [
                "We access your device's location, with your permission, to find nearby bus stops and MRT stations, show your position on the map and help with journey planning. We do not store a history of your locations on our own servers.",
                "Google Maps and your device's geocoding service may process your location or a selected map point to display maps and look up addresses. If you open or share a Google Maps place link with the App, that link may be requested from Google to resolve the place. These providers may receive request information, such as your IP address, under their own privacy policies.",
              ],
            },
            {
              id: "advertising",
              title: "Advertising Identifiers",
              paragraphs: [
                "We use Google AdMob to display advertisements. AdMob may collect and use your device's advertising identifier (IDFA on iOS, GAID on Android) and other data to deliver personalized or non-personalized ads depending on your consent.",
              ],
            },
            {
              id: "analytics",
              title: "Usage Data",
              paragraphs: [
                "We do not collect or store personal usage data or analytics on our own servers. The App uses Google Analytics for Firebase to understand app usage and improve its features. Google may process app-installation identifiers, device and app information, sessions, screen views and feature interactions on its servers.",
                "Our custom analytics events use categories and counts. They do not include precise coordinates, addresses, raw search text, shared URLs or individual stop and station identifiers. In the current Analytics configuration, advertising ID collection and advertising personalization signals are disabled. Analytics collection is separate from AdMob advertising and iOS tracking permission.",
                "Saved favorites, recent searches, app preferences and cached transport data are stored locally on your device.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "providers",
      title: "Third-Party Services",
      blocks: [
        {
          type: "paragraph",
          text: "The App integrates the following third-party services, each with their own privacy policies:",
        },
        {
          type: "services",
          items: [
            {
              label: "Google AdMob",
              href: "https://policies.google.com/privacy",
              description: "Advertising platform.",
            },
            {
              label: "LTA DataMall API",
              href: "https://datamall.lta.gov.sg/content/datamall/en/privacy-statement.html",
              description:
                "Singapore Land Transport Authority bus arrival and stop data.",
            },
            {
              label: "data.gov.sg",
              href: "https://www.tech.gov.sg/privacy/",
              description: "Singapore government open data.",
            },
            {
              label: "Google Maps",
              href: "https://policies.google.com/privacy",
              description:
                "Maps and place information. Address lookups may also use your device's geocoding provider.",
            },
            {
              label: "Google Analytics for Firebase",
              href: "https://firebase.google.com/support/privacy",
              description: "App usage analytics.",
            },
          ],
        },
      ],
    },
    {
      id: "choices",
      title: "Consent and Your Choices",
      blocks: [
        { type: "heading", text: "iOS (App Tracking Transparency)" },
        {
          type: "paragraph",
          text: "On iOS 14.5 and above, the App will ask for your permission before accessing your device's advertising identifier (IDFA). You can change this at any time in Settings → Privacy & Security → Tracking.",
        },
      ],
    },
    {
      id: "retention",
      title: "Data Retention",
      blocks: [
        {
          type: "paragraph",
          text: "We do not maintain our own server-side copy of your favorites, preferences, location history or journey history. App preferences, favorites, recent searches and cached transport data are stored locally on your device until removed, replaced or cleared. Local storage can be removed by uninstalling the App, subject to any backups or restoration features managed by your operating system.",
        },
        {
          type: "paragraph",
          text: "Data processed by Google AdMob, Google Maps, Firebase and other service providers may be retained on their servers according to their privacy policies and service settings. Uninstalling the App does not automatically delete data already processed by those providers. Please contact us if you have questions about data retention or deletion.",
        },
      ],
    },
    {
      id: "updates",
      title: "Changes to This Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the top of this page.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contact Us",
      blocks: [
        {
          type: "paragraph",
          text: [
            "If you have any questions about this Privacy Policy, please contact us at: ",
            {
              label: sgBusMrt.contactEmail,
              href: `mailto:${sgBusMrt.contactEmail}`,
            },
          ],
        },
      ],
    },
  ],
} as const satisfies PrivacyPolicyContent;
