import Link from "next/link";
import { GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";

export function Resume() {
  return (
    <div className="p-10">
      <div className="border-b-2 border-black pb-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-5xl font-semibold tracking-tighter">
              John Carmack
            </h1>
            <h5 className="mb-2 py-1 text-base font-medium uppercase">
              Staff Software Engineer
            </h5>
            <div className="text-foreground/75 flex flex-col items-start gap-1 text-sm sm:flex-row sm:gap-4">
              <Link
                className="hover:underline"
                href="https://www.linkedin.com/in/johncarmack1984/"
              >
                <Linkedin className="mr-1 inline fill-current stroke-none p-1" />
                linkedin/johncarmack1984
              </Link>
              <Link
                className="hover:underline"
                href="https://github.com/johncarmack1984"
              >
                <GithubIcon className="mr-1 inline p-1" />
                github/johncarmack1984
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-black pt-6 pb-4">
        <h2 className="text-2xl font-bold">SUMMARY</h2>
        <p className="text-sm">
          Experienced Staff Software Engineer with 26 years of delivering
          performant and easy-to-use applications. Proven track record in
          leading software development projects, implementing scalable
          solutions, and mentoring junior engineers. Applying for the position
          of Staff Software Engineer at Tailwind to contribute to the
          development of cutting-edge developer tooling and drive the
          company&apos;s technical growth.
        </p>
      </div>
      <div className="border-b-2 border-black pt-6 pb-4">
        <h2 className="text-2xl font-bold">EXPERIENCE</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold">
              Founding Senior Software Engineer
            </h3>
            <p className="text-sm italic">
              Neem • October 2023 – March 2024, New York, NY (Remote)
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li>
                Owned initiatives on developer tasks, building and maintaining
                company CLI using Rust and common shortcuts across various
                bundler plugins, increasing build speed by 200% and obtaining
                near-universal team adoption.
              </li>
              <li>
                Increased the amount of automated tests in CI by more than 200%
                in 1 month, without increasing the overall runtime, via
                configuration of CI pipelining for maximum efficiency.
              </li>
              <li>
                Introduced team to prettier-plugin-tailwindcss to ensure
                consistent class sorting, eliminating unexpected typography bugs
                in company HeadlessUI components (comboboxes, popovers, etc).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">
              Senior Frontend Engineer / Software Team Lead
            </h3>
            <p className="text-sm italic">
              Tahzoo • October 2022 – June 2023, Washington, DC (Remote)
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li>
                Emphasized mentorship of early-career developers. Maintained
                high velocity and code standards by assigning tasks to match
                skill levels.
              </li>
              <li>
                Convinced Fortune 100 client to use Tailwindcss in new component
                library (over Styled Components) via a 3-hour live demonstration
                of Tailwind&apos;s extensibility, usability, and performance
                benefits.
              </li>
              <li>
                Implemented optimizations to Docker/Kubernetes workflows,
                enhancing performance in production and reducing deployment time
                from 50 minutes to 12, a 75% improvement.
              </li>
              <li>
                Kept dependencies up-to-date using coded tooling; kept
                JavaScript configuration files in sync across repositories by
                running tests in CI to ensure team addressed lint warnings
                before merge.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Software Engineer</h3>
            <p className="text-sm italic">
              Clevyr • March 2022 – September 2022, Oklahoma City, OK (Remote)
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li>
                Implemented documentation, testing, redesigns, and new features
                for multiple projects in company portfolio, increasing test
                coverage on one project from 0% to greater than 90%.
              </li>
              <li>
                Collaborated with DevOps and Backend developer in launching a
                client&apos;s web application in timely manner (within 7 days!)
                to meet seasonal selling timeline.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Software Engineer, Founder</h3>
            <p className="text-sm italic">
              Vepify • October 2017 – March 2022, Irvine, CA (Remote)
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li>
                Solo founder of bootstrapped startup, raised low six-figures.
                Developed application using React / Redux Frontend and
                Express.js backend.
              </li>
              <li>
                Deployed app to combination of AWS Serverless (Lambda, API
                Gateway, S3, ELB) and traditional cloud infrastructure (ECS,
                EC2, CloudFormation, CloudFront, Route53).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">
              Software Engineering Consultant
            </h3>
            <p className="text-sm italic">
              New Earth Technologies • October 2014 – August 2017, Austin, TX
            </p>
            <ul className="list-disc pl-5 text-sm">
              <li>
                Built client websites for small businesses and helped small
                business owners manage online presence via Yelp, Google Reviews,
                Squarespace, and social media.
              </li>
              <li>
                Mentored junior machine learning engineer building
                recommendation algorithm in coding best practices and
                sustainability in software design using Python, pandas, numpy,
                and flask.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">
              Fullstack Developer / Software Initiatives Officer / Managing
              Director
            </h3>
            <p className="text-sm italic">
              Legacy Bank • May 1998 – October 2014, Hinton, OK
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-black pt-6 pb-4">
        <h2 className="text-2xl font-bold">EDUCATION</h2>
        <p className="text-sm">
          Bachelor&apos;s • Baylor University - Waco, TX • 2011
        </p>
      </div>
      <div className="py-7">
        <h2 className="text-2xl font-bold">RELEVANT SKILLS</h2>
        <p className="text-sm">
          CSS, Node.js, HeadlessUI, Tailwindcss, TypeScript, React, Vue,
          Accessibility, Workflows and Automation, NextJS, Vite, CI/CD, Rust,
          GitHub Actions (particularly for Rust binaries), Campaigning Clients
          and Vendors for Needed Features or Approvals, Performance
          optimization, Documentation Writing, Leadership
        </p>
      </div>
    </div>
  );
}
