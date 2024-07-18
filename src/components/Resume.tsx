import { ReactNode } from "react";
import Template from "./Template";

interface ResumeItemProps {
	children: ReactNode;
}
function ResumeItem({ children }: ResumeItemProps) {
	return (
		<div className="flex">
			<div className="absolute left-[14px] bg-white">
				<div className="size-4 border-2 border-blue-800 rounded-full"></div>
			</div>
			<div className="pl-4 border-blue-800 border-l-2">{children}</div>
		</div>
	);
}

function Resume() {
	return (
		<Template title="Resume">
			<div className="mb-6">
				<h1 className="text-2xl font-semibold">Summary</h1>
				<ResumeItem>
					<p className="font-semibold">RAYMOND KEMBOI</p>
					<p>
						Passionate engineer with experience in back-end and front-end
						development. Eager to work with teams to produce efficient scalable
						and maintainable software solutions.
					</p>
				</ResumeItem>
			</div>
			<div className="mb-6">
				<h1 className="text-2xl font-semibold">Experience</h1>
				<ResumeItem>
					<p className="font-semibold">
						SOFTWARE ENGINEERING INTERN,{" "}
						<span className="font-bold">LUPLEG LLC</span>
					</p>
					<p className="bg-[#e4edf9] font-semibold font-serif w-fit my-1 text-sm">
						FEBRUARY 2024 – MAY 2024
					</p>
					<li>
						Developed a mentor information management system:
						<ul className="pl-8 md:pl-10">
							<li className="list-disc">
								Created a beautiful and responsive UI using React
							</li>
							<li className="list-disc">
								Implemented a robust backend based on ExpressJS and MongoDB
							</li>
						</ul>
					</li>
					<li>
						Made extensive use of Git to track the project and effectively
						collaborate with peers
					</li>
				</ResumeItem>
				<ResumeItem>
					<p className="font-semibold">
						INDIVIDUAL CONTRIBUTOR,{" "}
						<span className="font-bold">SELF-EMPLOYED</span>
					</p>
					<p className="bg-[#e4edf9] font-semibold font-serif w-fit my-1 text-sm">
						SEPTEMBER 2022 – PRESENT
					</p>
					<li>
						Created a TCP socket server to service multiple concurrent
						connections
					</li>
					<li>
						Created Shusha, a desktop download manager running aria2c under the
						hood
					</li>
					<li>
						Created PataNgoma, a command line audio tagger interfacing with
						Spotify, MusicBrainz and Deezer services
					</li>
					<li>Created a simple unix command-line interpreter (emulating sh)</li>
				</ResumeItem>
			</div>
			<div>
				<h1 className="text-2xl font-semibold">Education</h1>
				<ResumeItem>
					<p className="font-semibold">
						CERTIFICATE IN SOFTWARE ENGINEERING,{" "}
						<span className="font-bold">AFRICAN LEADERSHIP X, NAIROBI</span>
					</p>
					<p className="bg-[#e4edf9] font-semibold font-serif w-fit my-1 text-sm">
						SEPTEMBER 2022 – JANUARY 2024
					</p>
					<div>
						Full stack software development:
						<ul className="pl-8 md:pl-10 columns-2 md:columns-4">
							{[
								"C",
								"Python",
								"JavaScript/TypeScript",
								"HTML/CSS",
								"SQL",
								"NoSQL",
								"Linux",
								"Nginx",
							].map((item, key) => (
								<li className="list-disc ml-4" key={key}>
									{item}
								</li>
							))}
						</ul>
					</div>
				</ResumeItem>
			</div>
		</Template>
	);
}

export default Resume;
