import { CiLocationOn, CiPhone, CiLinkedin } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Template from "./Template";

function Contact() {
	const iconClass =
		"size-fit p-2 rounded-full bg-[#dff3fc] my-auto text-[#149ddd] hover:bg-[#149ddd] hover:text-white";
	return (
		<Template title="Contact">
			<div className="flex-row md:flex gap-6">
				<div className="shadow-lg rounded-md w-full md:w-1/2">
					<div className="flex gap-4 p-6">
						<div className={iconClass}>
							<CiLocationOn size={30} />
						</div>
						<div>
							<p className="text-lg font-semibold">Location</p>
							<p>EMEA</p>
						</div>
					</div>
					<div className="flex gap-4 p-6">
						<div className={iconClass}>
							<TfiEmail size={30} />
						</div>
						<div>
							<p className="text-lg font-semibold">Email</p>
							<p>kemboiray@gmail.com</p>
						</div>
					</div>
					<div className="flex gap-4 p-6">
						<div className={iconClass}>
							<CiPhone size={30} />
						</div>
						<div>
							<p className="text-lg font-semibold">Call</p>
							<p>0710345105</p>
						</div>
					</div>
				</div>
				<div className="shadow-lg rounded-md w-full md:w-1/2">
					<div className="flex gap-4 p-6">
						<div className={iconClass}>
							<FaGithub size={30} />
						</div>
						<div>
							<p className="text-lg font-semibold">GitHub</p>
							<a href="https://github.com/Kemboiray" className="text-[#149ddd]">
								Kemboiray
							</a>
						</div>
					</div>
					<div className="flex gap-4 p-6">
						<div className={iconClass}>
							<CiLinkedin size={30} />
						</div>
						<div>
							<p className="text-lg font-semibold">LinkedIn</p>
							<a
								href="https://linkedin.com/in/raymond-kemboi"
								className="text-[#149ddd]"
							>
								Raymond Kemboi
							</a>
						</div>
					</div>
					<div className="flex gap-4 p-6">
						<div className={iconClass}>
							<FaSquareXTwitter size={30} />
						</div>
						<div>
							<p className="text-lg font-semibold">X</p>
							<a href="https://x/kemboiray717" className="text-[#149ddd]">
								Raymond K
							</a>
						</div>
					</div>
				</div>
			</div>
		</Template>
	);
}

export default Contact;
