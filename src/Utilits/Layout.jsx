
export const WhyStudy = ({ item }) => {
    return (
        <>
            <div className="card h-100 text-center my-5 shadow-none border-0">
                <span className="border-end">
                    <div className="card-body">
                        <img src={item.img} className="card-img-top m-auto" style={{ height: "100px", width: "100px" }} alt={item.title} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title lh-sm fw-normal fs-4">{item.title}</h5>

                        </div>
                    </div>
                </span>
            </div>
        </>
    )
}

export const TopCoursesUi = ({ item }) => {
    return (
        <>
            <div className="card p-3 border-0">
                <div className="card-body">
                    <img src={item.img} alt={item.title} className="object-fit-cover align-center" height="180px" width="300px" />
                    <div className="mt-3">
                        <h3 style={{ fontSize: "20px" }}>{item.title}</h3>
                        <p className="">
                            <span className="card-title fw-normal pe-1">{item.rating}</span>
                            <span className="card-title d-inline pe-1 fs-4" style={{ color: "#f7b731" }}>{item.ratingicon}</span>
                            <span className="text-muted mb-1">({item.students})</span>
                        </p>
                        <p className="fw-bold" style={{ fontSize: "20px" }}>{item.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export const PopularTopicUi = ({ item }) => {
    return (
        <>
            <div className="text-center border-0 shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="card-body">{item?.title}</div>
            </div>
        </>
    )
}

export const LearningJourneyUi = ({ item }) => {
    return (
        <>
            <div class="d-flex align-items-center mb-3 gap-4 flex-column flex-md-row text-center text-md-start bg-white px-4 py-3">
                <img src={item.img} style={{ width: "60px", height: "60px" }} class="me-3" alt={item.title} />
                <div>
                    <div class="fw-bold">{item.title}</div>
                    <div class="text-muted" >{item.desc}</div>
                </div>
            </div>
        </>
    )
}

export const PickCourseUi = ({ item }) => {
    return (
        <>
            <div className="card p-3 border-0">
                <div className="card-body">
                    <img src={item.img} alt={item.title} className="object-fit-cover align-center" height="180px" width="300px" />
                    <div className="mt-3">
                        <h3 style={{ fontSize: "20px" }}>{item.title}</h3>
                        <p className="">
                            <span className="card-title fw-normal pe-1">{item.rating}</span>
                            <span className="card-title d-inline pe-1 fs-4" style={{ color: "#f7b731" }}>{item.ratingicon}</span>
                            <span className="text-muted mb-1">({item.students})</span>
                        </p>
                        <p className="fw-bold" style={{ fontSize: "20px" }}>{item.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export const NumbersUi = ({ item }) => {
    return (
        <>
            <div className="card h-100 text-center my-5 shadoow-none border-0 ">
                <span class="border-end">
                    <div className="card-body">
                        <h1 className='card-title lh-sm fw-normal'>{item.number}</h1>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title lh-sm fw-normal">{item.desc}</h5>
                        </div>
                    </div>
                </span>
            </div>
        </>
    )
}

export const ReviewUi = ({ item }) => {
    return (
        <>
            <div className="card h-100 text-center border-0" style={{ backgroundColor: "#ffffff" }}>
                <div className="review card-body" style={{ padding: "60px 30px", outline: "2px sloid gray" }}>
                    <img src={item.img} className="rounded-circle mb-3" style={{ width: "80px", height: "80px", objectFit: "cover" }} alt={item.name}/>
                    <h5 className="card-title m-4">{item.name}</h5>
                    <p className="card-text fw-normal">{item.msg}</p>
                </div>
            </div>
        </>
    )
}