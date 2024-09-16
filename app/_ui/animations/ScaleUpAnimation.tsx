import * as motion from "framer-motion/client";

export default function ScaleUpAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}>
      {children}
    </motion.div>
  );
}
