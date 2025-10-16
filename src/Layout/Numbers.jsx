import { numbersData } from "../Utilits/data"
import { NumbersUi } from "../Utilits/Layout"

function Numbers() {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center">Numbers We Have</h2>
                    <div className="row justify-content-center mx-auto">
                        {
                            numbersData.map(item => (
                                <div className="col-12 col-md-6 col-lg-3" key={item.id}>
                                    <NumbersUi item={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Numbers