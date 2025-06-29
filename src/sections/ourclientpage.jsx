import img1 from '../assets/cls1.jpg'; // Make sure this path actually exports an image
import img2 from '../assets/cls2.png'; // Replace with your second image path

const Ourclientpage = () => {
  return (
    <div className="" style={{ height: "auto", padding: "20px" }}>
      <h1 className="text-4xl font-bold mb-4">About Us</h1>

      <div className="flex gap-4 mb-4">
        <img src={img1} alt="Team at work" className="w-32 h-32 object-cover" />
        <img src={img2} alt="Project sample" className="w-32 h-32 object-cover" />
      </div>

      <p className="text-sm bg-white p-2 rounded shadow">
         committed to delivering high-quality solutions that empower businesses to thrive in the digital age.
        Our team combines innovation, expertise, and passion to meet the unique needs of every client.
      </p>
    </div>
  );
}

export default Ourclientpage;
