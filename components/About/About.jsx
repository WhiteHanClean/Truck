import a from './About.module.scss'
import Title from "@/components/Title/Title";
import { motion } from 'framer-motion'

const leftAnimation = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: custom => ({
        scale: 1.0,
        opacity: 1,
        transition: { duration: 0.5, delay: custom * 0.4 }
    })
}

const About = () => {
    return (
        <section className={a.about}>
            <div className="container">
                <div className={a.about__content}>
                    <div className={a.about__left}>
                        <Title text="О нас" />
                        <p className={a.about__left_text}>
                            Наша компания предоставляет услуги эвакуатора на протяжении более 10 лет. Наши водители очень компетентны в своем деле и имеет стаж работы в сфере транспортных перевозок более 20 лет.
                        </p>
                    </div>
                    <div className={a.about__right}>
                        <motion.div
                            initial="hidden"
                            transition={{ duration: 1 }}
                            whileInView="visible"
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className={a.about__right__block}>
                            <h1>300+</h1>
                            <h3>успешных заказов</h3>
                            <p>в Бишкеке</p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            transition={{ duration: 1.3 }}
                            whileInView="visible"
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className={a.about__right__block}>
                            <h1>361</h1>
                            <h3>грузовиков</h3>
                            <p>различных <br /> моделей</p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            transition={{ duration: 1.6 }}
                            whileInView="visible"
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}

                            className={a.about__right__block}>
                            <h1>24/7</h1>
                            <h3>Диспетчер</h3>
                            <p>всегда онлайн</p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            transition={{ duration: 1.9 }}
                            whileInView="visible"
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className={a.about__right__block}>
                            <h1>1500</h1>
                            <h3>сотрудников</h3>
                            <p>профессионалов</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;