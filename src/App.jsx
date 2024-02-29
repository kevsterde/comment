import { useState } from "react";
import "./App.css";
import Comment_Card from "./components/comment_card";
import MapComment from "./components/MapComment";

const comments = [
  {
    id: 1,
    full_name: "Kevin Parent",
    message:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    parent_id: null,
    date: "2024-02-11 15:38:13",
  },
  {
    id: 2,
    full_name: "Aki parent",
    message:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    parent_id: null,
    date: "2024-02-13 15:38:13",
  },
  {
    id: 3,
    full_name: "Kent Parent",
    message: " chipi chipi chapa chapa dubi dubi daba daba ",
    parent_id: null,
    date: "2024-02-14 15:38:13",
  },
  {
    id: 4,
    full_name: "Webster Child",
    message: " chipi chipi chapa chapa dubi dubi daba daba ",
    parent_id: 1,
    date: "2024-02-14 15:38:13",
  },
  {
    id: 5,
    full_name: "Revalde Child",
    message: " chipi chipi chapa chapa dubi dubi daba daba ",
    parent_id: 2,
    date: "2024-02-14 15:38:13",
  },
  {
    id: 6,
    full_name: "Rhysin Child Child",
    message: " chipi chipi chapa chapa dubi dubi daba daba ",
    parent_id: 4,
    date: "2024-02-14 15:38:13",
  },
  {
    id: 7,
    full_name: "Pepero Child Child",
    message: " chipi chipi chapa chapa dubi dubi daba daba ",
    parent_id: 4,
    date: "2024-02-14 12:38:13",
  },
  {
    id: 8,
    full_name: "Time Child Child",
    message: " chipi chipi chapa chapa dubi dubi daba daba ",
    parent_id: 4,
    date: "2024-02-15 12:38:13",
  },
  {
    id: 9,
    full_name: "Date Child Child",
    message: " chipi chipi chapa chapa dubi dubi daba daba ",
    parent_id: 1,
    date: "2024-02-15 12:38:13",
  },
];

function App() {
  console.log(new Date());

  return (
    <div id="blog">
      <div id="banner">
        <h1>
          Blog Post
          <span> Title Here..</span>
        </h1>
        <h5>
          {" "}
          By Kev Rev | {new Date().toDateString()}
          <br></br>
          By Kev Rev | {Date.now()}
        </h5>
      </div>
      <main>
        <p>
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, a new normal that
          has evolved from generation X is on the runway heading towards a
          streamlined cloud solution. User generated content in real-time will
          have multiple touchpoints for offshoring.
        </p>
        <p>
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps.
        </p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration some form, by injected humour, or
        randomised words which dont look even slightly believable. If you are
        going to use passage of Lorem Ipsum.
        <h3>Phosfluorescently engage worldwide?</h3>
        Proactively envisioned multimedia based expertise and cross-media growth
        strategies. Seamlessly visualize quality intellectual capital without
        superior collaboration and idea-sharing. Holistically pontificate
        installed base portals after maintainable products.
      </main>

      <div id="comment">
        <h2 className="title">
          Comments {comments.filter((item) => !item.parent_id).length}
        </h2>
        <h3>Add your comment</h3>
        <form action="" className="comment_form">
          <input type="text" name="Full_Name" placeholder="Full Name*" />
          <textarea
            name="message"
            id=""
            cols="20"
            rows="1"
            placeholder="Message(s)"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
        {/* 
        {comments.map((item) => (
          <Comment_Card comments={comments} data={item} key={item.id} />
        ))} */}

        {/*   <br />
        {comments
          .filter((item) => !item.parent_id)
          .map((items) => (
            <Comment_Card comments={comments} data={items} key={items.id} />
          ))} */}
        <br />

        {/*         {comments.map((items) => (
          <section className="comment_card" key={items.id}>
            {!items.parent_id && (
              <Comment_Card data={items} />
            )}

            {items.parent_id && (
              <section className="comment_card" key={items.id}>
                <Comment_Card data={items} />
              </section>
            )}
          </section>
        ))} */}

        {/* 
        {comments
          .filter((items) => !items.parent_id)
          .map((items) => (
            <section className="comment_card" key={items.id}>
              {!items.parent_id && <Comment_Card data={items} />}

              {comments
                .filter((children) => children.parent_id === items.id)
                .map((children) => (
                  <section className="comment_card" key={children.id}>
                    <Comment_Card data={children} />
                  </section>
                ))}
            </section>
          ))} */}

        {comments
          .sort((a, b) => a.date < b.date)
          .filter((items) => !items.parent_id)
          .map((items) => (
            <section className="comment_card" key={items.id}>
              {!items.parent_id && (
                <Comment_Card parentId={items.id} data={items} />
              )}

              {comments
                .sort((a, b) => a.date < b.date)
                .filter((children) => children.parent_id === items.id)
                .map((children) => (
                  <section className="comment_card" key={children.id}>
                    <Comment_Card parentId={items.id} data={children} />

                    {comments
                      .sort((a, b) => a.date > b.date)
                      .filter(
                        (children2) => children2.parent_id === children.id
                      )
                      .map((children2) => (
                        <section className="comment_card" key={children2.id}>
                          <Comment_Card
                            parentId={children.id}
                            data={children2}
                          />
                        </section>
                      ))}
                  </section>
                ))}
            </section>
          ))}

        <h1>Minimize Code</h1>

        <MapComment comments={comments}>
          <MapComment comments={comments}>
            <MapComment comments={comments} ascending={true} />
          </MapComment>
        </MapComment>
      </div>
    </div>
  );
}

export default App;
