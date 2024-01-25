import { motion } from "framer-motion";

const Fade = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={className ?? ""}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
