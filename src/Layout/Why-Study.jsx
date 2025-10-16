import { studyBannerData } from "../Utilits/data"
import { WhyStudy } from "../Utilits/Layout"

function Why_Study() {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center">Why Study With E-learn ?</h2>
                    <div className="row justify-content-center mx-auto">
                        {
                            studyBannerData.map(item => (
                                <div className="col-12 col-md-6 col-lg-3" key={item.id}>
                                    <WhyStudy item={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Why_Study