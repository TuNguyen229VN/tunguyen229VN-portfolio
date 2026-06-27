// components/FadeInSection.jsx
import { motion } from "motion/react"

export default function FadeInSection({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0 ,filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    )
}