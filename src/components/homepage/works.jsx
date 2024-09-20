import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./medcmu.png"
								alt="MedCMU"
								className="work-image"
							/>
							<div className="work-title">Faculty of Medicine, Chiang Mai University</div>
							<div className="work-subtitle">
								Medical Doctor
							</div>
							<div className="work-duration">2020 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./vistec.png"
								alt="vistec"
								className="work-image"
							/>
							<div className="work-title">IST, VISTEC</div>
							<div className="work-subtitle">
								Research Assistant (PT)
							</div>
							<div className="work-duration">2020 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./looloo.png"
								alt="Looloo Technology"
								className="work-image"
							/>
							<div className="work-title">Looloo Technology</div>
							<div className="work-subtitle">
								Medical Consultant
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./ptn.png"
								alt="Phyathai Nawamin"
								className="work-image"
							/>
							<div className="work-title">Phyathai Nawamin Hospital</div>
							<div className="work-subtitle">
								Medical Doctor (PT)
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
