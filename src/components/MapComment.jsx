import { Children, cloneElement } from "react";
import Comment_Card from "./comment_card";

function MapComment({
  parentId = null,
  comments,
  children,
  ascending = false,
}) {
  return (
    <>
      {comments
        .sort((a, b) => (ascending ? a.date > b.date : a.date < b.date))
        .filter((items) => items.parent_id == parentId)
        .map((items) => (
          <section className="comment_card" key={items.id}>
            <Comment_Card parentId={items.id} data={items} />

            {Children.map(children, (child) =>
              cloneElement(child, {
                parentId: items.id,
              })
            )}
          </section>
        ))}
    </>
  );
}

export default MapComment;
