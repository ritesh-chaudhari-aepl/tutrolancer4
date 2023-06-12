

export default function ServiceCard({icon,text}) {
  return (
    <div className="bg-lightBg-n hover:bg-lightBg-h shadow-sm hover:shadow-lg w-48 h-28 justif mx-auto my-4  rounded-md">
        <div className="p-3">{icon}</div>
        <div className="p-3 font-normal">{text}</div>
        {/* <p>{children}</p> */}
    </div>
  )
}

 