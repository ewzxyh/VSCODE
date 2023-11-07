import styles from "./Home.module.css";
import Formulario from "../layout/Formulario";
import VisionProLogo from "../../img/VisionProLogo.png";
import VisionPro from "../../img/VisionPro.jpg";
import VisionProBack from "../../img/VisionProBack.png";
import VisionProShow from "../../img/VisionProShow.png";
import BannerVision from "../../img/AppleVisionCase.jpg";
import Banner from "../layout/Banner";

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.bannerHero}>
            <Banner />
            </div>
            <div className="d-flex position-relative justify-content-center text-center">
                <div className="row mt-5">
                    <h1 className="text-center mb-3 mt-5">Bem-vindo à era da computação espacial.</h1>
                    <p className="text-center mb-5">Faça parte dessa jornada, garanta seu Vision Pro na Pré-venda!</p>
                </div>
            </div>
            <div className={styles.VisionProBackImg}>
                <img src={VisionProBack} alt="Vision Pro" style={{ width: "100%", height: "auto" }} />
            </div>
            <h4 className={styles.formText}>Inscreva-se</h4>
            <div className={styles.form}>
                <Formulario />
            </div>
            <div className="d-flex position-relative justify-content-center text-center">
                <h1 className="text-center mb-3 mt-5 w-50">O primeiro sistema operacional espacial da Apple.
                </h1>
            </div>
            <div className={styles['video-container']}>
                <video controls className={styles.video}>
                    <source src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="d-flex position-relative justify-content-center text-center">
                <h1 className="text-center mb-3 mt-5">O Apple Vision Pro combina perfeitamente conteúdo digital com seu espaço físico.</h1>
            </div>
            <div className={styles['video-container']}>
                <video controls className={styles.video}>
                    <source src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-digital-canvas/large.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="d-flex position-relative justify-content-center text-center">
                <h1 className="text-center mb-3 mt-5">Você navega simplesmente usando os olhos, as mãos e a voz.</h1>
            </div>
            <div className={styles['video-container']}>
                <video controls className={styles.video}>
                    <source src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-inputs/large.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="d-flex position-relative justify-content-center text-center">
                <h1 className="text-center mb-3 mt-5">Assim, você pode fazer as coisas que ama de maneiras nunca antes possíveis.</h1>
            </div>
            <div className={styles['video-container']}>
                <video controls className={styles.video}>
                    <source src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-entertainment/large.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="d-flex position-relative justify-content-center text-center">
                <h1 className="text-center mb-3">Você nunca viu tudo assim antes.</h1>
            </div>
            <div className={styles.VisionProLogo}>
                <img src={VisionProLogo} alt="Vision Pro" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className={styles.WatchVideo}>
                <h4 className="text-center mb-3">Assista o filme</h4>
            </div>
            <div className={styles.Text}>
                <h4 className="text-center mb-3">Disponível no início do próximo ano nos EUA.</h4>
            </div>
            <div className={styles.VisionProImg}>
                <img src={VisionPro} alt="Vision Pro" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className={styles.TextForm}>
                <h1 className="text-center mb-3">Inovação que você pode ver, ouvir e sentir.</h1>
            </div>
            <div className={styles.Text}>
                <h4 className="text-center mb-3">Faça sua reserva.</h4>
            </div>
            <div className={styles.VisionProShowImg}>
                <img src={VisionProShow} alt="Vision Pro" style={{ width: "100%", height: "auto" }} />
            </div>
            <h4 className={styles.formTextShow}>Inscreva-se</h4>
            <div className={styles.formShow}>
                <Formulario />
            </div>
            <div className={styles.banner}>
                <img src={BannerVision} alt="Vision Pro" style={{ width: "100%", height: "auto" }} />
            </div>
        </section>
    );
}

export default Home;
