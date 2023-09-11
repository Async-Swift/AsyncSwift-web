import Script from "next/script";
import "../../../../styles/global.css";
import * as gtag from "../../../../lib/gtag";

export const metadata = {
  title: "SyncSwift2022",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "SyncSwift2022",
    type: "website",
    siteName: "SyncSwift2022",
    description:
      "Apple 생태계 속에서 헤엄치는 사람들의 커뮤니티. AsyncSwift 입니다. AsyncSwift에서 SyncSwift 2022 컨퍼런스를 개최합니다!",
    url: "https://www.asyncswift.com/syncswift/2022",
    images: "/favicons/apple-icon.png",
    card: "/favicons/apple-icon.png",
    locale: "ko_KR",
  },
  twitter: {
    title: "SyncSwift2022",
    card: "/favicons/apple-icon.png",
    description:
      "Apple 생태계 속에서 헤엄치는 사람들의 커뮤니티. AsyncSwift 입니다. AsyncSwift에서 SyncSwift 2022 컨퍼런스를 개최합니다!",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["/favicons/apple-icon.png"],
  },
  themeColor: "#000000",
  generator: "AsyncSwift",
  applicationName: "AsyncSwift Webpage",
  referrer: "origin-when-cross-origin",
  keywords: [
    "AsyncSwift",
    "Swift Conference",
    "async swift",
    "SyncSwift 2022",
    "SyncSwift 2023",
    "AsyncsSwift 2022",
    "swift conference",
    "에이싱크스위프트",
    "에이싱크 스위프트",
    "싱크스위프트 2022",
    "싱크스위프트 2023",
    "스위프트단체",
  ],
  authors: [{ name: "Raven" }, { name: "Song Cool" }, { name: "Daisy" }],
  creator: "Black Raven",
  publisher: "AsyncSwift",
  description:
    "Apple 생태계 속에서 헤엄치는 사람들의 커뮤니티. AsyncSwift 입니다. AsyncSwift에서 SyncSwift 2022 컨퍼런스를 개최합니다!",
  publishedTime: "Wed, 05 Oct 2022 20:00:00",
  manifest: "/favicons/manifest.json",
  icons: {
    icon: [
      {
        url: "/favicons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicons/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-76x76.png",
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-114x114.png",
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/favicons/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  // verification: {
  //   google: 'google',
  //   yandex: 'yandex',
  //   yahoo: 'yahoo',
  //   other: {
  //     // me: ['my-email', 'my-link'],
  //   },
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
