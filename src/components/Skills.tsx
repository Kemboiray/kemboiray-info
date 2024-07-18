import ProgressBar from "@ramonak/react-progress-bar";
import skills from "./skills.json";
import Template from "./Template";

function Skills() {
	return (
		<Template title="Skills">
			<h1 className="text-base">
				Progress bar indicates number of hours spent on skill as a percentage of
				10000 hours.
			</h1>
			<div className="flex flex-col justify-center bg-[#f5f8fd] mt-4 p-4">
				{skills.map((skill, key) => (
					<li className="list-none pb-6" key={key}>
						<p className="flex justify-between font-semibold text-sm">
							<span>{skill.name.toUpperCase()}</span>
							<span>{skill.perc}%</span>
						</p>
						<ProgressBar
							completed={skill.perc}
							className="my-1"
							height="10px"
							bgColor="#149ddd"
							baseBgColor="#e4edf9"
							isLabelVisible={false}
						/>
					</li>
				))}
			</div>
		</Template>
	);
}

export default Skills;
