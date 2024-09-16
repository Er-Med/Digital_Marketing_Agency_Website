import * as motion from "framer-motion/client";

export default function TitleAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}>
      {children}
    </motion.div>
  );
}
