import React from "react";

// Server Actions
import { createPost } from "@/actions/actions";

const Form = () => {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-[400px] mx-auto gap-2  mt-10"
    >
      <input
        type="text"
        name="title"
        placeholder="title for new post"
        className="border rounded px-3 h-10 p-y2"
        required
      />
      <textarea
        name="body"
        placeholder="Body content for new post"
        className="border rounded px-3"
        rows={6}
        required
      ></textarea>
      <button
        type="submit"
        className="h-10 bg-blue-500 px-5 rounded text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
