
import headerImg from '../assets/images/headerPhoto.jpg';
import SearchBar from './SearchBar';
import "./Header.css";

const Header = () => {
    return (
      <div>
<div className="container hero-image">
				<div className="row">
					<div className="col-lg-6 mb-3 d-flex justify-content-center mt-4">
						<div className="col-lg-6 mb-3 d-flex justify-content-center mt-3">
						</div>
					</div>
					<div className="col-lg-6 mb-3 d-flex justify-content-center">
						<div className=" sm-px-5 mb-4 rounded-3">
							<div className="container-fluid sm-py-1 py-5">
								<h3 style={{color:"#662549", fontFamily:"Quicksand",
  fontWeight:"400"}} className=" mb-4">
									<span className="underline-text display-5 fw-semibold">
										LivingData
									</span>
								</h3>
								<p className="col-md-8 tag-line-text body-text"></p>
								<article>
									<h5 style={{color:"#662549", fontFamily:"Source Sans 3",
  fontWeight:"200"}}>
										Your dream house is just one click away...
										<br />
										Are you looking for your next rental, but you're tired of opening hundreds of tabs on your browser to get as many info about the area you're checking out? <br />
										With LivingData 
										<br />
										you only need to type once et Voila! All you need is already there.
									</h5>
								</article>
								<a
									href="#about"
									className="btn-header mt-3"
								>
									Learn More
									<i className="fas fa-chevron-right"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid custom-bg search-bar">
        <SearchBar />
        </div>

      </div>
   );
}

export default Header     

