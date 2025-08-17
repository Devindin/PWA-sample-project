
function LoginSecondaryHeadding({ content, textSize = "min-[200px]:max-[320px]:text-[12px] min-[321px]:max-[376px]:text-[14px] min-[376.68px]:max-[395px]:text-[15px]  text-[18px]  md:text-[20px]  3xl:text-[33px]" }) {
  return (
    <h1 className={`font-inter font-normal  text-secondary_text_heading ${textSize}`}>
      {content}
    </h1>
  );
}

export default LoginSecondaryHeadding;
