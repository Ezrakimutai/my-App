import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Job from './job'
import Tool from './tool'

const Resume = (props) => {
	return (
		<section className="about-mf sect-pt4 route">
			<div className="container">
				<div className="row" id="about">
					<div className="col-sm-12">
						<div className="box-shadow-full">
							<div className="row">
								<div className="col-md-6">
									<div className="pt-4 pb-2 mb-5 pt-md-0">
										<div className="title-box-2">
											<h5 className="title-left">
												{props.headline}
											</h5>
										</div>
										{props.summary.map((content) => {
											return <p className="lead">{content}</p>
										})}
									</div>
									<p className="title-s font-weight-light">
										{props.toolsHeadline}
									</p>
									{props.tools.map((tool) => (
										<Tool {...tool} />
									))}
								</div>
								<div className="col-md-6">
									<p className="title-s font-weight-light">
										{props.jobsHeadline}
									</p>
									{props.jobs.map((job) => (
										<Job {...job} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

const mapStateToProps = (state) => {
  return state.portfolio.resume
}

export default compose(
  connect(mapStateToProps)
)(Resume)
