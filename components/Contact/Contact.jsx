import c from "./Contact.module.scss";
import Title from "@/components/Title/Title";
import InputMask from "react-input-mask";
import { motion } from "framer-motion";

const topAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, delay: custom * 0.2 },
  }),
};

const Contact = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={c.contact}
    >
      <div className="container">
        <Title text="Связаться с нами" />

        <div className={c.contact__content}>
          <ul className={c.contact__left}>
            <motion.li custom={1} variants={topAnimation}>
              <span className={c.contact__left_name}>Телефон:</span>

              <span className={c.contact__left_desc}>
                +996(706)72-52-12
                <br />
                +996(706)72-52-12
                <br />
                +996(706)72-52-12
                <br />
                +996(706)72-52-12
                <br />
              </span>
            </motion.li>

            <motion.li custom={2} variants={topAnimation}>
              <span className={c.contact__left_name}>Адресс:</span>

              <span className={c.contact__left_desc}>
                123456, Бишкек, Невский
              </span>
            </motion.li>

            <motion.li custom={3} variants={topAnimation}>
              <span className={c.contact__left_name}>Инстаграмм:</span>

              <span className={c.contact__left_desc}>kg.evakuator</span>
            </motion.li>

            <motion.li custom={4} variants={topAnimation}>
              <span className={c.contact__left_name}>ТЕЛЕГРАММ:</span>

              <span className={c.contact__left_desc}>kg.evakuator</span>
            </motion.li>
          </ul>

          <motion.form className={c.contact__right}>
            <motion.input
              custom={1}
              variants={topAnimation}
              placeholder="Name"
              type="text"
            />

            <motion.div
              style={{ width: "100%" }}
              custom={2}
              variants={topAnimation}
            >
              <InputMask
                style={{ width: "100%" }}
                mask={`+\\9\\96(999)99-99-99`}
                type="tel"
                className="form__box-field"
                placeholder="Phone number"
              />
            </motion.div>

            <motion.textarea
              custom={3}
              variants={topAnimation}
              placeholder="Message"
            />

            <div className={c.contact__right_box}>
              <button type="submit" className={c.contact__right_btn}>
                отправить
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
