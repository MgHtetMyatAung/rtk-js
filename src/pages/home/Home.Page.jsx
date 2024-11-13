import NoteIcon from "../../assets/note.svg";
import TodoIcon from "../../assets/todo.svg";
import LearningIcon from "../../assets/learning.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "@material-tailwind/react";
import { systemLogout } from "../../redux/auth/authSlice";
const features = [
  {
    id: 1,
    title: "Note",
    link: "/note",
    icon: NoteIcon,
  },
  {
    id: 2,
    title: "Todo",
    link: "/todo",
    icon: TodoIcon,
  },
  {
    id: 3,
    title: "Learning",
    link: "/learning",
    icon: LearningIcon,
  },
];
export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <section className=" w-full h-screen container py-[50px] grid place-items-center">
      <div className=" space-y-10 md:space-y-16">
        <div className=" flex gap-5 justify-center">
          <h2 className=" text-2xl md:text-6xl font-light text-[#764abc]">
            RTK Testing Project
          </h2>
          {/* <img src={Logo} alt="" /> */}
        </div>
        <div className=" flex justify-center gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className=" text-center cursor-pointer"
              onClick={() => handleNavigate(feature.link)}
            >
              <div className=" w-[60px] h-[60px] shadow rounded-md grid place-items-center border bg-white">
                <img src={feature.icon} alt="" className="w-[40px] h-[40px]" />
              </div>
              <p className=" font-medium mt-2">{feature.title}</p>
            </div>
          ))}
        </div>
        <Button
          className=" block mx-auto"
          onClick={() => dispatch(systemLogout())}
        >
          Logout
        </Button>
      </div>
    </section>
  );
}
