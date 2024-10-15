function Slider({ className, ...props }) {
  return <input type="range" className={cn("slider", className)} {...props} />;
}

export default Slider;
