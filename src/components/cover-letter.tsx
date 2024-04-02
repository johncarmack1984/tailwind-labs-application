import Link from "next/link";
import { GithubIcon, Linkedin } from "lucide-react";

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4">{children}</p>;
}

export function CoverLetter() {
  return (
    <div className="p-8">
      <div className="mb-6 text-sm">
        <h1 className="text-5xl font-semibold tracking-tighter">
          John Carmack
        </h1>
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <Link href="https://www.linkedin.com/in/johncarmack1984/">
            <Linkedin className="mr-1 inline fill-current stroke-none p-1" />
            linkedin/johncarmack1984
          </Link>
          <Link href="https://github.com/johncarmack1984">
            <GithubIcon className="mr-1 inline p-1" />
            github/johncarmack1984
          </Link>
        </div>
      </div>
      <div>
        <P>Hello Tailwind Labs!</P>
        <P>
          I am thrilled to apply for the Staff Software Engineer position at
          Tailwind Labs. Having served as a Software Engineer and Software Team
          Lead for over 26 years, I first picked up Tailwind in early 2022, and
          have since been repeatedly floored by its ability to maximizing
          developer velocity without negatively impacting application
          performance. I have chosen Tailwind as my styling library in every
          project since, and I am confident in my ability to add value and bring
          worthwhile contributions to the Tailwind team.
        </P>
        <P>
          While leading the developer team at Tahzoo Inc, I prioritized
          mentoring early-career developers, maintaining team velocity and code
          standards by tailoring tasks to individual skill levels. In my most
          notable Tailwind-related achievement, I successfully petitioned a{" "}
          <Link
            className="hover:text-foreground/80 underline"
            href="https://www.mongodb.com/products/platform/cloud"
          >
            Fortune 100 client
          </Link>
          &nbsp; to adopt Tailwind over Styled Components for their new
          component library. For that process, I was asked to give a 3-hour,
          live, improv-comedy-style demonstration, in which I took audience
          recommendations for visual elements while showcasing Tailwind&apos;s
          extensibility, usability, and performance advantages. Ultimately, I
          earned the client&apos;s trust, and our team proceeded with
          implementation of Tailwind.
        </P>
        <P>
          The JD mentions that this role will involve building utilities in
          Rust, which is even further cause to believe I would be a great
          candidate for this role, as I <strong>love</strong> using Rust to
          improve the developer experience. While at Neem, I took initiative on
          developer tasks and dedicated my spare time to crafting the
          company&apos;s CLI using Rust. This initiative led to a multitude of
          benefits, including a remarkable 200% increase in CI build speed and
          even greater improvements in local environments. Moreover, the CLI
          streamlined our processes and accelerated the onboarding of new
          developers, minimizing complexities when integrating new team members
          and enhancing overall team velocity.
        </P>
        <P>
          The opportunity to join Tailwind Labs as a Staff Software Engineer
          excites me profoundly. I am deeply passionate about pushing the limits
          of frontend technologies and am eager to apply my expertise to a team
          esteemed for its cutting-edge solutions. My experience in building
          software teams, fostering technical innovation, and consistently
          delivering exceptional results is aligned with the values and
          objectives of Tailwind Labs.
        </P>
        <P>
          I am confident that my expertise in frontend development, leadership,
          and adept problem-solving make me an ideal fit for this role. I am
          genuinely enthusiastic about the prospect of collaborating with a team
          of skilled engineers at Tailwind Labs to create impactful and
          industry-leading solutions.
        </P>
        <P>
          I would welcome the opportunity to discuss how my background, skills,
          and fervor for frontend technologies can contribute to the pioneering
          work being undertaken at Tailwind Labs. Thank you for considering my
          application. I eagerly look forward to the possibility of exploring
          how I can make meaningful contributions in further discussions.
        </P>
        <P>Warm regards,</P>
        <P>John Carmack</P>
      </div>
    </div>
  );
}
