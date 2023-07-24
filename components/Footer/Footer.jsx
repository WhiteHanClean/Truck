import f from './Footer.module.scss'
import {motion} from "framer-motion";

const leftAnimation = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: custom => ({
        scale: 1.0,
        opacity: 1,
        transition: {duration: 0.3, delay: custom * 0.2}
    })
}

const Footer = () => {
    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            className={f.footer}>
            <div className="container">
                <nav className={f.footer__nav}>
                    <motion.a
                        variants={leftAnimation}
                        href="https://snowflake-team.vercel.app/" className={f.footer__nav_img}>
                        <img src="/snowflake.png" alt="logo"/>
                    </motion.a>

                    <motion.div
                        variants={leftAnimation}
                        className={f.footer__box}>
                        <span className={f.footer__box_link}>
                           Ибраимова 115/1 , Бизнес центр Асыл-Таш
                        </span>
                    </motion.div>

                    <motion.div
                        variants={leftAnimation}
                        className={f.footer__box}>
                        <a href="https://snowflake-team.vercel.app/" className={f.footer__box_link_black}>
                            Разработано - <span>SnowFlakes</span>
                        </a>
                    </motion.div>

                </nav>
            </div>
        </motion.footer>
    );
};

export default Footer;