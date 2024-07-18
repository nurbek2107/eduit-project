"use client";
const data = {
  title: "Back-end Master",
  link: "backend_master",
  img: "https://www.caramelit.com/images/backend.jpg",
  type: "programming",
  participants: "476 people",
  status: "ended",
  started: "26.10.2023",
};

function competition({ params }) {
  const { title, img, type, started, status, participants } = data;
  return (
    <div className="py-[45px] px-[85px]">
      <img
        src={img}
        width={960}
        className="rounded-2xl mb-10"
        height={500}
        alt=""
      />
      <div className="flex flex-col gap-4 text-black">
        <h1 className="text-3xl">Title: {title}</h1>
        <p>Type: {type}</p>
        <p>Total participants: {participants}</p>
        <p>Started time: {started}</p>
        <p>Status: {status}</p>
      </div>
    </div>
  );
}

export default competition;
