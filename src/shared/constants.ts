import pythonIcon from "/icons/python.svg"
import jsIcon from "/icons/javascript.svg"
import tsIcon from "/icons/typescript.svg"
import reactIcon from "/icons/react.svg"
import NextjsIcon from "/icons/nextjs.svg"
import nodeIcon from "/icons/node.svg"


export const STACK = {
  Javascript: {
    slug: "javascript",
    name: "JavaScript",
    class: "bg-yellow-500/20 text-black",
    icon: jsIcon,
  },
  Typescript: {
    slug: "typescript",
    name: "TypeScript",
    class: "bg-blue-500/20 text-black",
    icon: tsIcon,
  },
  React: {
    slug: "react",
    name: "React",
    class: "bg-blue-300/20 text-black",
    icon: reactIcon,
  },
  Nextjs: {
    slug: "nextjs",
    name: "Next.js",
    class: "bg-black outline outline-[1px] outline-white/20 text-white",
    icon: NextjsIcon,
  },
  Python: {
    slug: "python",
    name: "Python",
    class: "bg-blue-500/20 text-black",
    icon: pythonIcon,
  },
  nodejs: {
    slug: "nodejs",
    name: "Node.js",
    class: "bg-emerald-500/20 text-black",
    icon: nodeIcon,
  },
  WEB_SCRAPING: {
    slug: "web-scraping",
    name: "Web Scraping",
    class: "bg-gray-100 text-black",
    icon: null,
  }
}

