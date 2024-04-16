import { LESSONS } from "../lessons";
export default function Lessons() {
  const lessons = LESSONS.map((lessons) => {
    return (
      <li className="lesson">
        <img
          className="lesson-img"
          src={lessons.img.src}
          alt={lessons.img.alt}
        />
        <p className="lesson-name">{lessons.name}</p>
      </li>
    );
  });
  return <div className="lessons-container">{lessons}</div>;
}
