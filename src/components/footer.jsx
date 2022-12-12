import logo from "../assets/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <div className="bg-[#030D16] text-white">
      <div className="flex flex-col sm:flex-row justify-evenly items-center py-[70px] border-b-[2px] border-[grey]">
        <div className="mb-[30px] sm:mb-[0px]">
          <img src={logo} alt="" />
        </div>
        <div>
          <h1 className="text-[30px] w-[400px]">
            A Young Digital Agency In The Heart of New Jersey
          </h1>
        </div>
      </div>
      <div>
        <div className=" body-font px-[20px] sm:px-[0px] text-[white]">
          <div className="container lg:px-[150px] py-24 mx-auto flex flex-col items-center sm:flex-row">
            <div className="flex justify-between flex-col sm:flex-row w-1/2 mb-12 ">
              <div className="flex justify-between flex-wrap text-[20px]">
                <div className="w-[250px] mb-[20px] mr-[10px]">
                  <p>Phone</p>
                  <a href="#">908 652 3743</a>
                </div>
                <div className="w-[250px]  mb-[20px]  mr-[10px]">
                  <p>Enquiries</p>
                  <a href="#">saad@gmail.com</a>
                </div>
                <div className="w-[250px] mb-[20px]  mr-[10px]">
                  <p>Address</p>
                  <a href="#">Commercial Area 20 house # 1656</a>
                </div>
                <div className="w-[250px] mb-[20px]  mr-[10px]">
                  <p>Follow us</p>
                  <div className="flex justify-between w-[80px] mt-[10px]">
                  <FontAwesomeIcon icon={faStar} className="text-[15px]" />
                  <FontAwesomeIcon icon={faStar} className="text-[15px]" />
                  <FontAwesomeIcon icon={faStar} className="text-[15px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex sm:justify-center justify-start items-center">
              <div className="flex flex-col w-1/2 ">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                  className="placeholder:text-white w-[200px] sm:w-auto bg-transparent mb-[20px] border-b-[2px] border-white pb-[10px] outline-none"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email Address"
                  className="placeholder:text-white w-[200px] sm:w-auto bg-transparent mb-[20px]  border-b-[2px] border-white pb-[10px] outline-none"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Phone"
                  className="placeholder:text-white w-[200px] sm:w-auto  bg-transparent mb-[20px]  border-b-[2px] border-white pb-[10px] outline-none"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Messege"
                  className="placeholder:text-white w-[200px] sm:w-auto bg-transparent mb-[20px]  border-b-[2px] border-white pb-[10px] outline-none"
                />
                <button className="px-[20px] w-[200px] py-[10px] bg-[#0080FF]">
                  SEND
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[2px] border-[grey] flex justify-center">
            <span className="text-[15px] p-[5px]">
              All Right Reserved By Using this website. you agree to the use of
              cookies
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
