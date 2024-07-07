import Link from "next/link";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import Ad from "../Ad";

const leftMenuLinks = [
  {
    link: "/",
    img: "/posts.png",
    title: "My Posts",
  },
  {
    link: "/",
    img: "/activity.png",
    title: "Activity",
  },
  {
    link: "/",
    img: "/market.png",
    title: "Marketplace",
  },
  {
    link: "/",
    img: "/events.png",
    title: "Events",
  },
  {
    link: "/",
    img: "/albums.png",
    title: "Albums",
  },
  {
    link: "/",
    img: "/videos.png",
    title: "Videos",
  },
  {
    link: "/",
    img: "/news.png",
    title: "News",
  },
  {
    link: "/",
    img: "/courses.png",
    title: "Courses",
  },
  {
    link: "/",
    img: "/lists.png",
    title: "Lists",
  },
  {
    link: "/",
    img: "/settings.png",
    title: "Settings",
  },
];

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        {leftMenuLinks.map(
          (link: { link: string; img: string; title: string }) => (
            <Link
              href={link.link}
              className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
            >
              <Image src={link.img} alt="" width={20} height={20} />
              <span>{link.title}</span>
            </Link>
          )
        )}
      </div>
      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;
