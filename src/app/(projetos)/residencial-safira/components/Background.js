

export default function Background({ title, subtitle, className, imagePath }) {
  return (
    <div className="flex flex-col text-center justify-center items-center mx-8 md:mx-52 mt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#995522] mb-4">{title}</h2>
      <p>{subtitle}</p>
      
      <div className={`${className}`} style={{
        backgroundImage: `url("${imagePath}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
      </div>
    </div>
  );
}
