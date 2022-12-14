import bg from "../assets/bg.png"
function First() {
    return (
        <section className="text-gray-600 body-font overflow-hidden px-[20px]">
  <div className="container  py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full mb-[50px] lg:pr-10 lg:py-6 mt-[50px] lg:mb-0">
        <h1 className="text-gray-900 text-[3rem] title-font font-medium mb-4">We generate creative & innovation <span className="bg-[#0080ff] text-white">ideas</span></h1>
        <p className="leading-relaxed mb-4 text-[1rem] text-black">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. ghhadfgdfsg Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div className="flex">
            <button className="bg-[#0080ff] px-[20px] py-[10px] text-white">Let's Get Started</button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64  rounded" src={bg} />
    </div>
  </div>
</section>
    )
}
export default First