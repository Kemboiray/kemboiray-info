import { ReactNode } from "react";

interface TemplateProps {
	title: string;
	children: ReactNode;
}
function Template({ title, children }: TemplateProps) {
	return (
		<div className="my-8 py-6 min-h-dvh overflow-x-clip">
			<div className="my-auto px-5">
				<h1 className="text-3xl font-semibold text-[#173b6c]">{title}</h1>
				<div className="w-[3.5rem] border-b-[0.25rem] border-[#149ddd] my-4"></div>
				{children}
			</div>
		</div>
	);
}

export default Template;
