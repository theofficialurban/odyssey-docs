import { DefaultTheme, defineConfig } from "vitepress";
import { generateNavs } from "./nav";

const nv = generateNavs([["Documents", "./docs"]]);

let sb: DefaultTheme.Sidebar = [];
nv.forEach((v) => {
  sb.push({ text: v.name, items: v.results });
});

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "Urban Odyssey",
  titleTemplate: ":title | Urban Odyssey Database",
  description:
    "Urban Odyssey Notes & Documents - Information for public release, additional notes and more",
  themeConfig: {
    siteTitle: "Urban Odyssey",
    outline: "deep",
    outlineTitle: "Table of Contents",
    logo: "/icons/colored/Spellbook_Sunset.png",
    socialLinks: [
      { icon: "twitter", link: "https://x.com/officialurbanus" },
      { icon: "facebook", link: "https://facebook.com/theurbanodyssey" },
      { icon: "instagram", link: "https://instagram.com/theofficialurban" },
      { icon: "youtube", link: "https://youtube.com/@MastersMahanPodcast" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18v18H3zm7.564 2.536h-4.31v12.928h4.31V15.59H12v1.436h1.436v1.436h4.31v-4.309h-1.437v-1.436h-1.436v-1.436h1.436V9.845h1.436V5.536h-4.309v1.436H12V8.41h-1.436z"/></svg>',
        },
        link: "https://kick.com/officialurban",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2.547 1L1 4.776v15.433h5.5V23h3.093l2.922-2.791h4.47L23 14.462V1zm18.39 12.478L17.5 16.76H12l-2.922 2.791v-2.79h-4.64V2.97h16.499zM17.5 6.747v5.74h-2.063v-5.74zm-5.5 0v5.74H9.938v-5.74z" clip-rule="evenodd"/></svg>',
        },
        link: "https://twitch.tv/theurbanodyssey",
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.453 13.546a1.88 1.88 0 0 0 .275-2.645a2 2 0 0 0-.275-.275A21.2 21.2 0 0 0 10.14 7.85c-1.066-.51-2.256.2-2.426 1.414a23.5 23.5 0 0 0-.14 5.502c.116 1.23 1.292 1.964 2.372 1.492a19.6 19.6 0 0 0 4.506-2.704zm6.932-5.4a5.85 5.85 0 0 1 .014 7.872a26.15 26.15 0 0 1-13.104 7.828a5.116 5.116 0 0 1-6.167-3.578c-1.524-5.2-1.3-11.08.17-16.305C3.07 1.22 5.651-.503 8.308.131c4.925 1.174 9.545 4.196 13.077 8.013z"/></svg>',
        },
        link: "https://rumble.com/c/MastersMahanPodcast",
      },
    ],
    nav: [
      { text: "Substack", link: "https://theofficialurban.substack.com" },
      {
        text: "Main Channels",
        items: [
          { text: "YouTube", link: "https://youtube.com/@MastersMahanPodcast" },
          { text: "Rumble", link: "https://rumble.com/c/MastersMahan" },
          {
            text: "Bitchute",
            link: "https://bitchute.com/channel/mastersmahan",
          },
          { text: "Odysee", link: "https://odysee.com/@UrbanOdyssey:b" },
        ],
      },
      {
        text: "Live Streams",
        items: [
          {
            text: "Rumble Live Link",
            link: "https://rumble.com/c/MastersMahan/live",
          },
          {
            text: "Twitch.tv (TheUrbanOdyssey)",
            link: "https://twitch.tv/theurbanodyssey",
          },
          {
            text: "Kick (OfficialUrban)",
            link: "https://kick.com/officialurban",
          },
        ],
      },
      {
        text: "Donations",
        items: [
          { text: "CashApp", link: "https://cash.app/jsorb84" },
          { text: "Venmo", link: "https://venmo.com/officialurban" },
          {
            text: "PayPal",
            link: "https://paypal.me/officialurban?country.x=US&locale.x=en_US",
          },
        ],
      },
    ],
    sidebar: sb,

    // sidebar: [
    //   {
    //     text: "Documents",

    //     items: [{ text: "Home", link: "/docs/" }],
    //   },
    //   {
    //     text: "Deep Dives",

    //     items: [{ text: "Tavistock", link: "/docs/tavistock" }],
    //   },
    // ],
  },
});
