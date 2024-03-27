function Gallery() {
    return (
    <div className="row">
    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
        src="/image_gallery/train.png"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
        />

        <img
        src="/image_gallery/elephant.png"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
        />
    </div>

    <div className="col-lg-4 mb-4 mb-lg-0">
        <img
        src="/image_gallery/tower.png"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
        />

        <img
        src="/image_gallery/sunset.png"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
        />
    </div>

    <div className="col-lg-4 mb-4 mb-lg-0">
        <img
        src="/image_gallery/pedro.png"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Waves at Sea"
        />

        <img
        src="/image_gallery/sunset2.png"
        className="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
        />
    </div>
    </div>
);
}


export default Gallery;