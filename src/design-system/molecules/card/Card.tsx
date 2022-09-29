/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import Avatar from "@/design-system/atoms/avatar/Avatar";
import { ReactComponent as PlusIcon } from "@/icons/icon-plus.svg";
import { ReactComponent as LessIcon } from "@/icons/icon-minus.svg";
import { ReactComponent as ReplyIcon } from "@/icons/icon-reply.svg";
import { ReactComponent as DeleteIcon } from "@/icons/icon-delete.svg";
import { ReactComponent as EditIcon } from "@/icons/icon-edit.svg";
import "./card.sass";
import Icon from "@/design-system/atoms/icon/Icon";
import Button, { ButtonClass } from "@/design-system/atoms/button/Button";
import { CommentType, ReplyType, User } from "@/types";

type CardProps = {
  data: CommentType;
  currentUser: User;
  setter: React.Dispatch<any>;
};
const Card: React.FC<CardProps> = ({
  data,
  currentUser,
  setter,
}: CardProps) => {
  const commonProps: CommentType | ReplyType = data;
  const { content, createdAt, id, score, user } = commonProps;

  const sources = [
    {
      srcSet: user?.image.png,
      type: "image/png",
    },
    {
      srcSet: user?.image.webp,
      type: "image/webp",
    },
  ];
  const isCurrentUser = currentUser.username === user.username;
  return (
    <div data-testid="card" className="card" key={id}>
      <div className="card__header">
        <Avatar
          src={user?.image.png}
          alt={user?.username}
          className="round"
          sources={sources}
          size={{ height: "30", width: "30" }}
        />
        <span className="card__username">{user?.username}</span>
        {isCurrentUser && (
          <span className="card__header-isCurrentUser">you</span>
        )}
        <span>{createdAt}</span>
      </div>
      <div className="card__content">
        <span>
          {" "}
          {data.replyingTo && (
            <span className="card__replied">{`@${data.replyingTo}`}</span>
          )}
          {content}
        </span>
      </div>
      <div className="card__footer">
        <span className="card__voting">
          <Icon name="plus" src={<PlusIcon />} />
          <span className="card__voting__score">{score}</span>
          <Icon name="less" src={<LessIcon />} />
        </span>
        {isCurrentUser ? (
          <>
            <span className="edit">
              <Button type={ButtonClass.affordance}>
                <Icon src={<EditIcon />} name="edit" />
                Edit
              </Button>
            </span>
            <span className="delete">
              <Button type={ButtonClass.affordance} onClick={setter}>
                <Icon src={<DeleteIcon />} name="delete" />
                Delete
              </Button>
            </span>
          </>
        ) : (
          <span className="reply">
            <Button type={ButtonClass.affordance}>
              <Icon src={<ReplyIcon />} name="reply" />
              Reply
            </Button>
          </span>
        )}
      </div>
    </div>
  );
};
export default Card;
