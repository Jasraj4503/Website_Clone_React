import { populartopicdata } from "../Utilits/data"
import { PopularTopicUi } from "../Utilits/Layout"

function Populartopic() {
    return (
        <>
            <div className="TopicData">
                <div className="container py-5">
                    <h2 className="text-center mb-5 text-white">Popular Topics To Learn</h2>

                    <div className="row justify-content-center text-black fw-bold">
                        {populartopicdata.map((item) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-2-4 mb-3">
                                <PopularTopicUi key={item.id}/>
                                <div className="bg-white text-center p-3 ">
                                    <p className="mb-0">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-warning text-white rounded-0 fw-bold px-4 py-2">
                            Browse More Category
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Populartopic