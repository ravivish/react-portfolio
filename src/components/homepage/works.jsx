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
								src="./company.png"
								alt="SteepRise"
								className="work-image"
							/>
							<div className="work-title">SteepRise Infotech</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Nov-2019 - Nov-2021</div>
						</div>

						<div className="work">
							<img
								src="./Businessnext.png"
								alt="Businessnext"
								className="work-image"
							/>
							<div className="work-title">BusinessNext</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Nov-2021 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
