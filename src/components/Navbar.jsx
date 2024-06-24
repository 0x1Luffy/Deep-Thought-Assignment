const Navbar = () => {
  return (
    <div className="bg-[#F0F0F0] h-[70px] md:h-[90px] w-full px-5 md:px-10 flex items-center justify-between">
        <div className="flex items-center">
            <img className="h-[40px] md:h-[50px]" src="https://i.ibb.co/vdQ1nd5/deepLogo.png" alt="Deep Thought Logo" />
        </div>
        <div className="flex items-center gap-3 md:gap-5">
            <img className="h-[25px] md:h-[30px]" src="https://i.ibb.co/mC1CSgP/Home-Logo.png" alt="Home Logo" />
            <img className="h-[25px] md:h-[30px]" src="https://i.ibb.co/q0K81nW/Tookit-Logo.png" alt="Toolbar Logo" />
            <img className="h-[25px] md:h-[30px]" src="https://i.ibb.co/4YGP8tk/Notification.png" alt="Notification" />
            <img className="h-[30px] md:h-[40px]" src="https://i.ibb.co/PMn766V/girlDP.png" alt="Profile Pic" />
            <img className="h-[20px] md:h-[37px] w-[20px] md:w-[37px]" src="https://i.ibb.co/8m38N7q/three-Dots.png" alt="Three" />
        </div>
    </div>
  )
}

export default Navbar
