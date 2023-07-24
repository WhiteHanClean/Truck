import f from './First.module.scss';
import {motion} from "framer-motion";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {LiaTelegramPlane} from "react-icons/lia";
import {FiPhoneCall} from "react-icons/fi";

const leftAnimation = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: custom => ({
        scale: 1.0,
        opacity: 1,
        transition: {duration: 0.5}
    })
}

const First = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className={f.first}>

            <div className="container">
                <div className={f.first__box}>
                    <motion.div
                        variants={leftAnimation}
                        className={f.first__content}>

                        <h2 className={f.first__title}>
                            ЭВАКУАТОР КРУГЛОСУТОЧНО
                            ОТ 1500 СОМ
                        </h2>

                        <p className={f.first__text}>
                            У нас имеется патент, все делаем официально. Предоставляем безналичную оплату услуг через О деньги, Мбанк, Оптима Банк и другие банковские переводы.                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default First;