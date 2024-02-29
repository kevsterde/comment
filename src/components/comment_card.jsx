import { useEffect } from "react";
import viteLogo from "/vite.svg";

function Comment_Card({ data, parentId }) {
  return (
    <>
      <img src={viteLogo} alt="" />
      <h3 className="comment_card_name">{data.full_name}</h3>
      <h4 className="comment_card_date">{data.date}</h4>
      <p className="comment_card_desc">{data.message}</p>
      <p className="comment_card_desc">myId: {parentId}</p>
      <button>reply</button>
    </>
  );
}

export default Comment_Card;
