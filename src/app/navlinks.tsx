import TailwindLogo from "@/components/icons/tailwind-logo";

const navlinks: {
  title: React.ReactNode;
  href: string;
  description: string;
}[] = [
  {
    title: (
      <div className="flex">
        <TailwindLogo />
        &nbsp; Cover Letter
      </div>
    ),
    href: "/",
    description:
      "Introduction describing my recent accomplishments and relevant experience.",
  },
  {
    title: "Resume",
    href: "/resume",
    description:
      "Scannable, concise details regarding my work experience and education.",
  },
];

export default navlinks;
