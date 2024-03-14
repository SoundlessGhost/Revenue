/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogsView = () => {
  const { id } = useParams();
  const [blg, setBlg] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlg(data));
  }, [id]);
  const { img, name, date, description } = blg;
  return (
    <div className="mt-32 container grid grid-cols-[9fr,3fr] Website_Name">
      <div className="my-20">
        <img className="rounded-lg w-[900px]" src={img} alt="" />
        <p className="text-gray-400 mt-6">
          <small>{date}</small>
        </p>
        <h1 className="text-4xl my-4">{name}</h1>
        <p className="w-[800px]">{description}</p>
        <div className=" bg-slate-100 px-10 py-6 my-4 rounded-lg">
          <p>
            I still love you But I don't need you anymore. Because I have
            learned How to control my emotions.
          </p>
        </div>
        <p>
          Solet conceptam an quo. Ut tamquam elaboraret quo. Pri ut detraxit
          iudicabit efficiantur. Aeque vitae appetere eu est, duo at aeque
          explicari, laboramus maiestatis quo ex. Ad eam amet simul exerci, cum
          laudem tibique aliquando ei. Mel porro mucius persius at, illum
          officiis no ius. Sea et integre copiosae euripidis, et elit ancillae
          eam, eos ex tation postulant liberavisse. Soleat audire cotidieque eum
          eu, dicat efficiendi duo in. Quo eu legere eligendi, sed ea atomorum
          efficiantur. Id quod dolorem duo, eu mel posse dolores detracto. Eu
          adhuc delenit gloriatur sed, ne omnesque quaerendum nam, dolorum
          perfecto et quo. Solum omnesque insolens mel in, ei meis sonet
          euripidis pro. Te adipisci atomorum assueverit mea, vocibus fierent
          intellegam eu per. Suavitate consequat vel et. Saperet graecis corpora
          est ex. No eripuit voluptatum est. Erant splendide incorrupte in ius,
          his ut quaeque voluptua neglegentur, oblique diceret cum ex. Veniam
          aperiam sea an, ei sale decore melius pro, mei sumo laudem ea.
        </p>
      </div>

      <div>
        <div className="my-10">
          <h1 className="text-2xl mb-2 -ml-4">Recent Post</h1>
          <div className="">
            <Link to="/blogs">
              <div>
                <p className="text-[8px] text-gray-500">{date}</p>
                <p className="text-[20px] mb-4 mt-1 hover:text-lime-700">
                  Paradise should be everyone's dream
                </p>
              </div>
            </Link>
            <Link to="/blogs">
              <div>
                <p className="text-[8px] text-gray-500">{date}</p>
                <p className="text-[20px] mb-4 mt-1 hover:text-lime-700">
                  Patience is never weakness
                </p>
              </div>
            </Link>
            <Link to="/blogs">
              <div>
                <p className="text-[8px] text-gray-500">{date}</p>
                <p className="text-[20px] mb-4 mt-1 hover:text-lime-700">
                  {" "}
                  Stay happy and spread happiness
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="my-10">
          <h1 className="text-2xl mb-2 -ml-4">Tag</h1>
          <div>
            <Link to="#">
              <span className="hover:text-orange-500">advertising</span>,
            </Link>
            <Link to="#">
              <span className="hover:text-orange-500">branding</span>,
            </Link>
            <Link to="#">
              <span className="hover:text-orange-500">business</span>,
            </Link>
            <Link to="#">
              <span className="hover:text-orange-500">news</span>, <br />
            </Link>
            <Link to="#">
              <span className="hover:text-orange-500">seo</span>,
            </Link>
            <Link to="#">
              <span className="hover:text-orange-500">social media</span>,
            </Link>
            <Link to="#">
              <span className="hover:text-orange-500">marketing</span>
            </Link>
          </div>
        </div>

        <div className="my-10">
          <h1 className="text-2xl -ml-4">Follow us</h1>
          <div className=" flex items-center mt-4">
            <Link
              target="blank"
              to="https://www.facebook.com/shahed.abiddarpon"
            >
              <img
                className="w-8 ml-3 rounded-full border-gray-400 cursor-pointer border p-2"
                src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                alt=""
              />
            </Link>
            <Link target="blank" to="https://github.com/SoundlessGhost">
              <img
                className="w-8 ml-3 rounded-full border-gray-400 cursor-pointer border p-2"
                src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
                alt=""
              />
            </Link>
            <Link target="blank" to="https://www.linkedin.com/in/shahed2247/">
              <img
                className="w-8 ml-3 rounded-full border-gray-400 cursor-pointer border p-2"
                src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsView;
