

export default function FeatureCard({icon,title,msg}) {
    return (
      <div className="  hover:bg-lightBg-h shadow-sm hover:shadow-lg w-60   justif mx-auto my-4   rounded-md">
          <div className="p-3  bg-lightBg-b w-fit  rounded-full">{icon}</div>
          <div className="px-3 pt-3 font-bold  font-serif text-base">{title}</div>
          <div className="p-3 font-sans text-sm font-normal">{msg}</div>
          {/* <p>{children}</p> */}
      </div>
    )
  }