import * as motion from "framer-motion/client";

export default function FadeRight({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 0.5,
        delay: delay / 3,
      }}>
      {children}
    </motion.div>
  );
}
