import { motion, type MotionProps } from 'framer-motion';

type Props = {
  src: string;
  alt: string;
  className?: string;
  withNotch?: boolean;
} & MotionProps;

export function PhoneMockup({
  src,
  alt,
  className = '',
  withNotch = true,
  ...motionProps
}: Props) {
  return (
    <motion.div
      className={`phone-frame relative ${className}`}
      {...motionProps}
    >
      {withNotch && <div className="phone-notch" />}
      <div className="phone-screen">
        <img src={src} alt={alt} />
      </div>
    </motion.div>
  );
}
