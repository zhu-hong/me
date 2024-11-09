import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://me.yanhong.xyz/", // replace this with your deployed domain
  author: "Jimmy",
  profile: "https://me.yanhong.xyz/",
  desc: "hi, im jimmy, im a software engineer, its my personal website, im record something here.",
  title: "Jimmy",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/zhu-hong/me/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/zhu-hong",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:zhudapao888@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/zhudaxianren888",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/zhudaxianren",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
];
