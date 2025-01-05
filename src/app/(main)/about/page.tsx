"use client";

import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex max-h-full min-h-screen min-w-full max-w-full justify-center p-3">
        <div className="m-10">
          <div className="my-5">
            <div className="flex justify-start">
              <h1 className="text-center text-3xl font-bold">About Me</h1>
            </div>
            <div className="flex justify-center mt-11">
              <h2 className="text-center text-2xl font-bold">Background</h2>
            </div>
            <div className="m-1 flex-col justify-start px-3 my-3">
              <p>
                Clyde, originally hailing from Virginia, now thrives in the
                vibrant city of Tacoma, Washington. With a passion for coding,
                Clyde continuously explores the ever-evolving world of
                technology, delighting in the challenge of creating innovative
                solutions. When not immersed in code, Clyde finds peace in the
                great outdoors, whether it's hiking through the forests of the
                PNW or capturing the serene beauty of nature through film
                photography. Balancing a love for tech and the natural world,
                Clyde's journey is a harmonious blend of digital and organic
                artistry. 🌲📸💻
              </p>
            </div>
          </div>
          <div className="my-5">
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
