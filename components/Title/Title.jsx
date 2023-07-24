import s from "@/components/Service/Service.module.scss";
import {motion} from "framer-motion";

const leftAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {duration: 1, delay: custom * 0.4}
    })
}

const Title = ({text}) => {

    return (
        <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={leftAnimation}
            className={s.service__title}>
            {text}
        </motion.h2>
    );
};

export default Title;