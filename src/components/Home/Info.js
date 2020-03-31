import React from 'react';
import { Link } from 'gatsby';
import Title from '../Globals/Title';

const Info = () => {
	return (
		<section className="py-5">
			<div className="container">
				<Title title="our story" />
				<div className="row">
					<div className="col-10 col-sm-8 mx-auto text-center">
						<p className="lead text-muted mb-5">
							It is a long established fact that a reader will be distracted by the readable content of a page when
							looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
							letters, as opposed to using 'Content here, content here', making it look like readable English. Many
							desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
							search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
							over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
						</p>
						<Link to="/about">
							<button className="btn text-uppercase btn-yellow">about page</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Info;
