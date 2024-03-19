import { Link } from "react-router-dom";

const SomePieceContent = () => {
  return (
    <div>
      <p id="somePiece" className="coding">@ 2024 Coding Interactive</p>
      <p id="somePiece" className="desire">Anyway How Are You</p>
      <div className=" absolute right-6 top-60" id="SomePieceImgContent">
        <Link target="blank" to="https://www.facebook.com/shahed.abiddarpon">
          <img
            className="w-8 mb-4 rounded-full border-gray-400 cursor-pointer border p-2"
            src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
            alt=""
          />
        </Link>
        <Link target="blank" to="https://github.com/SoundlessGhost">
          <img
            className="w-8 mb-4 rounded-full border-gray-400 cursor-pointer border p-2"
            src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
            alt=""
          />
        </Link>
        <Link target="blank" to="https://www.linkedin.com/in/shahed2247/">
          <img
            className="w-8 mb-4 rounded-full border-gray-400 cursor-pointer border p-2"
            src="https://cdn-icons-png.flaticon.com/128/14776/14776505.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default SomePieceContent;
