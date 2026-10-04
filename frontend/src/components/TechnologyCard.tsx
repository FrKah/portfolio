type TechnologyCardProps = {
  name: string;
  iconClass?: string;
  iconSrc?: string;
  mono?: boolean;
};

const TechnologyCard = ({ name, iconClass, iconSrc, mono }: TechnologyCardProps) => {
  let icon = null;
  if (iconClass) {
    icon = <i className={`text-5xl ${iconClass}`}></i>;
  } else if (iconSrc && mono) {
    // single-colour icon: use it as a mask so it takes the text colour
    icon = (
      <span
        aria-hidden="true"
        className="h-12 w-12 bg-current"
        style={{
          mask: `url("${iconSrc}") center / contain no-repeat`,
          WebkitMask: `url("${iconSrc}") center / contain no-repeat`,
        }}
      />
    );
  } else if (iconSrc) {
    icon = <img src={iconSrc} alt="" className="h-12 w-12 object-contain" />;
  }

  return (
    <div className="flex flex-col items-center justify-center text-center border border-base-300 w-24 h-24 rounded-2xl bg-base-200 shadow-md hover:scale-105 transition-transform duration-200">
      {icon ? (
        <>
          {icon}
          <span className="w-full text-xs mt-1">{name}</span>
        </>
      ) : (
        // no icon for this one: show the name in place of the icon
        <span className="w-full px-1 font-mono text-sm font-semibold">
          {name}
        </span>
      )}
    </div>
  );
};
export default TechnologyCard;
