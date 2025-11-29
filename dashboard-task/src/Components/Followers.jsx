import { useState } from "react";

export default function Followers() {
  const [follower, setFollowers] = useState(0);

  return (
    <div className="flex flex-col justify-center gap-6 items-center text-(--text-main)">
      <div className="flex justify-center gap-16 mt-4">
        <div>
          <p className="text-xl font-bold">{follower}</p>
          <p className="text-(--text-secondary) text-sm">Followers</p>
        </div>

        <div>
          <p className="text-xl font-bold">1,278</p>
          <p className="text-(--text-secondary) text-sm">Following</p>
        </div>
      </div>

      <button
        onClick={() => setFollowers(follower + 1)}
        className="py-3 px-6 bg-(--accent) rounded-xl w-[10%] text-white font-bold cursor-pointer"
      >
        Follow Me
      </button>
    </div>
  );
}
