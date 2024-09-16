import { motion } from "framer-motion";

export const WhileInView = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: false,
        // margin: "-500px",
        // amount: "all",
      }}
      onViewportEnter={() => console.log("Enter!")}
      onViewportLeave={() => console.log("Exit!")}
      className='mb-24 lg:mb-32 mt-24 lg:mt-0 border border-spacing-2'>
      {children}
    </motion.div>
  );
};
