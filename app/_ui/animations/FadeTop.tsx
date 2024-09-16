import * as motion from "framer-motion/client";

export default function FadeTop({
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
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 0.5,
      }}>
      {children}
    </motion.div>
  );
}
