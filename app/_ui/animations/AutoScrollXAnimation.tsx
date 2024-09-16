import * as motion from "framer-motion/client";

export default function AutoScrollXAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{
        ease: "linear",
        duration: 10,
        repeat: Infinity,
      }}
      className='group-hover:pause'>
      {children}
    </motion.div>
  );
}
