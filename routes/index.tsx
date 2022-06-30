/** @jsx h */
import { h } from "preact";
import Counter from '../islands/Counter.tsx';
import Countdown from '../islands/Countdown.tsx';

export default function Home() {
  const date = new Date(Date.parse("2022-06-30T18:00:00"));
  //date.setMinutes(date.getMinutes() + 1);

  return (
    <div>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={1}/>
      <p>
        The big event is happening <Countdown target={date.toISOString()}/>
      </p>
    </div>
  );
}
