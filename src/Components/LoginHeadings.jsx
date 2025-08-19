
function LoginHeadings({ content , textSize = "min-[200px]:max-[320px]:text-[16px] min-[321px]:max-[376px]:text-[18px] min-[376.68px]:max-[395px]:text-[23px]  text-[24px] md:text-[36px] 3xl:text-[42px] "}) {
  return (
    <h1 className={`font-inter text-[36px] font-semibold  text-primary_text_heading ${textSize}`}>
      {content}
    </h1>
  );
}

export default LoginHeadings;
