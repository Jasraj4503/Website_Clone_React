import { pickCourse } from "../Utilits/data"
import { PickCourseUi } from "../Utilits/Layout"

function PickCourse() {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center">Pick A Course To Get Started</h2>
                    <div className="row g-4 mx-auto">
                        {
                            pickCourse.map(item => (
                                <div className="col-md-6 col-lg-4 col-xxl-3" key={item.id}>
                                    <PickCourseUi item={item} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-warning text-white p-2 rounded-0 fs-5 ">Browse All Categories</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PickCourse