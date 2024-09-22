import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaWeixin } from 'react-icons/fa';

const ContactComponent = () => {
  return (
    <div className="container max-w-[1300px] mx-auto px-[24px] py-[80px]">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 font-poppins">
    <div className="text-center md:col-span-6 justify-center items-center flex">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.487481121965!2d106.6552876!3d10.7626225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752929270f55ab%3A0x2d9e6de4c90840d9!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1672443202023!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className=" md:col-span-6 justify-center  flex flex-col">
        <h2 className="text-xl font-bold my-[30px]">ALTERNATIVE MODES OF CONTACT</h2>
        <div className="space-y-4">
          <div className="flex  space-x-4 pb-[14px]">
            <FaWhatsapp className="text-white bg-[#123774] p-3" size={50} />
            <div>
              <p className="text-[20px] font-bold ">WHATSAPP</p>
              <p className="text-gray-500 font-semibold">Click to message</p>
            </div>
          </div>
          <hr  className='pb-[30px]'/>
          <div className="flex  space-x-4 pb-[14px]">
            <FaPhoneAlt  className="text-white bg-[#123774] p-3" size={50} />
            <div>
              <p className="text-[20px] font-bold ">CALL / SMS</p>
              <p className="text-gray-500 font-semibold">+65 9337 8483</p>
            </div>
          </div>
          <hr  className='pb-[30px]'/>
          <div className="flex  space-x-4 pb-[14px]">
            <FaEnvelope  className="text-white bg-[#123774] p-3" size={50} />
            <div>
              <p className="text-[20px] font-bold ">EMAIL</p>
              <p className="text-gray-500 font-semibold">Jack.Sheo@gmail.com</p>
            </div>
          </div>
          <hr  className='pb-[30px]'/>
          <div className="flex  space-x-4 pb-[14px]">
            <FaWeixin  className="text-white bg-[#123774] p-3" size={50} />
            <div>
              <p className="text-[20px] font-bold ">WECHAT</p>
              <p className="text-gray-500 font-semibold">JackSheoSG</p>
            </div>
          </div>
          <hr  className='pb-[30px]'/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactComponent;
