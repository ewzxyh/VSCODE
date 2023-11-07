import appleBanner from "../../img/banner.jpg";

function MainBanner() {
    return (
        <div style={{ maxWidth: "100%", maxHeight: "300px" }}>
            <img src={appleBanner} alt="Vision Pro" style={{ width: "100%", height: "auto" }} />
        </div>
    );
}

export default MainBanner;