"use client";

import React from "react";
import { useState } from "react";

const UpvoteButton = () => {
  const [upvoteCount, setUpvoteCount] = useState(0);
  return (
    <button
      onClick={() => {
        setUpvoteCount(upvoteCount + 1);
      }}
      className="bg-blue-500 text-white p-2 mt-10"
    >
      {upvoteCount} Upvote
    </button>
  );
};

export default UpvoteButton;
