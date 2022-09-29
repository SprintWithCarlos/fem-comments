import { useState } from "react";
import AddComment from "@/design-system/molecules/addComment/AddComment";
import Card from "@/design-system/molecules/card/Card";
import { AppData, CommentType, ReplyType } from "@/types";
import Modal from "../modal/Modal";
import "./cardList.sass";
import Button, { ButtonClass } from "@/design-system/atoms/button/Button";

type CardListProps = {
  data: AppData;
};
const CardList: React.FC<CardListProps> = ({ data }: CardListProps) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  return (
    <div data-testid="cardList" className="cardList">
      {isDeleting && (
        <Modal>
          <div className="cardList__container">
            <div className="card">
              <h2>Delete comment</h2>
              <p>Are you sure you want to delete the comment?</p>
              <span className="buttons">
                <Button
                  type={ButtonClass.primary}
                  onClick={() => setIsDeleting(!isDeleting)}
                >
                  No, close
                </Button>
                <Button
                  type={ButtonClass.secondary}
                  onClick={() => setIsDeleting(!isDeleting)}
                >
                  Yes, delete
                </Button>
              </span>
            </div>
          </div>
        </Modal>
      )}
      {data.comments.map((comment) => (
        <>
          <Card
            data={comment}
            currentUser={data.currentUser}
            setter={setIsDeleting}
          />
          {comment.replies && (
            <div className="cardList__reply">
              {comment.replies.map((reply: ReplyType) => (
                <Card
                  data={reply}
                  currentUser={data.currentUser}
                  setter={setIsDeleting}
                />
              ))}
            </div>
          )}
        </>
      ))}
      <AddComment image={data.currentUser.image} />
    </div>
  );
};
export default CardList;
