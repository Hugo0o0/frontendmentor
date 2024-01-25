import { motion } from "framer-motion";
import { forwardRef } from "react";

interface SlideProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Slide = forwardRef(({ children, className }: SlideProps, ref) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className={className}
      ref={ref as React.Ref<HTMLDivElement>}
    >
      {children}
    </motion.div>
  );
});

export default Slide;
