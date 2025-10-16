import { learningData } from "../Utilits/data"
import { LearningJourneyUi } from "../Utilits/Layout"

function LearningJourney() {
    return (
        <>
            <div className="row align-items-center g-4 p-5 my-5" style={{ backgroundColor: '#f8f9fa', color: '#212529' }}>
                {/* Left side: Heading */}
                <div className="col-lg-5 text-start px-5">
                    <h1 className="lh-sm fw-normal  ">Start Your Learning
                        <br /> Journey Today.</h1>
                    <button className="btn btn-warning rounded-0 text-white py-2 fs-5 mt-4 ">Signup Now</button>
                </div>


                <div className="col-lg-7" >
                    <div className="row g-4">
                        {
                            learningData.map(item => (
                                <div className="col-md-6" key={item.id}>
                                    {/* Box content */}
                                    <LearningJourneyUi item={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LearningJourney