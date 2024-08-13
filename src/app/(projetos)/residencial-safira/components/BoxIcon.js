

export default function BoxIcon({ icon1, text1, icon2, text2 }) {
  return (
    <div className="md:flex md:flex-row flex-col md:mb-5 md:space-x-16">
      <div className="bg-[#FFFFFF] md:w-[400px] h-[60px] mb-3 flex items-center justify-center rounded-[32px]">
        {icon1}
        &nbsp;&nbsp;
        {text1}
      </div>
      <div className="bg-[#FFFFFF] md:w-[400px] h-[60px] mb-3 flex items-center justify-center rounded-[32px]">
        {icon2}
        &nbsp;&nbsp;
        {text2}
      </div>
    </div>
  );
}
