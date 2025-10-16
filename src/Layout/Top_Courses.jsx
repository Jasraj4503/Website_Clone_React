import { topCourses } from "../Utilits/data"
import { TopCoursesUi } from "../Utilits/Layout"

function TopCourse() {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center">Our Top Courses</h2>
                    <div className="row g-4 mx-auto">
                        {
                            topCourses.map(item => (
                                <div className="col-md-6 col-lg-4 col-xxl-3 " key={item.id}>
                                    <TopCoursesUi item={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default TopCourse