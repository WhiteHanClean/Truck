import n from './Header.module.scss'

import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {useRef} from "react";
import {RxHamburgerMenu} from "react-icons/rx";
import {motion} from "framer-motion";

const leftAnimation = {
    hidden: {
        scale: 0,
        opacity: 0
    },
    visible: custom => ({
        scale: 1.0,
        opacity: 1,
        transition: {duration: 0.2, delay: custom * 0.2}
    })
}

const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <motion.nav className={n.nav}
                    initial="hidden"
                    whileInView="visible"
        >
            <div className="container">
                <motion.div
                    variants={leftAnimation}
                    className={n.nav__content}>
                    <div className={n.nav__left}>
                        <img src="/tuck.png" alt=""/>
                    </div>

                    <motion.div className={n.nav__drawer}
                                variants={leftAnimation}>
                        <button className={n.nav__drawer_btn} ref={btnRef} onClick={onOpen}>
                            <RxHamburgerMenu size={25}/>
                        </button>
                        <Drawer
                            isOpen={isOpen}
                            placement='right'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />

                                <DrawerHeader bg="#1e1e1e">Навигация</DrawerHeader>

                                <DrawerBody bg="#1e1e1e" className={n.nav__drawer_box}>
                                    <p className={n.nav__drawer_link}>
                                        услуги
                                    </p>
                                    <p className={n.nav__drawer_link}>
                                        О компании
                                    </p>
                                    <p className={n.nav__drawer_link}>
                                        Позвонить
                                    </p>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </motion.div>

                    <div
                        className={n.nav__right}>
                       <motion.p
                           custom={1}
                           variants={leftAnimation}
                           className={n.nav__right_link}>
                           услуги
                       </motion.p>

                        <motion.p
                            custom={2}
                            variants={leftAnimation}
                            className={n.nav__right_link}>
                            О компании
                        </motion.p>

                        <motion.p
                            custom={3}
                            variants={leftAnimation}
                            className={n.nav__right_link}>
                            Позвонить
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Header;