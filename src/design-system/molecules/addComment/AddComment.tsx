import Avatar from "@/design-system/atoms/avatar/Avatar";
import Button, { ButtonClass } from "@/design-system/atoms/button/Button";
import { User } from "@/types";
import "./addComment.sass";

type AddCommentProps = Pick<User, "image">;
const AddComment: React.FC<AddCommentProps> = ({ image }: AddCommentProps) => {
  const sources = [
    {
      srcSet: image.png,
      type: "image/png",
    },
    {
      srcSet: image.webp,
      type: "image/webp",
    },
  ];
  return (
    <div data-testid="addComment" className="addComment">
      <textarea
        name="add-comment"
        id=""
        cols={30}
        rows={10}
        placeholder="Add a comment..."
      />
      <span className="control">
        <span>
          <Avatar
            size={{ width: "30", height: "30" }}
            src={image.png}
            sources={sources}
            alt={image.png}
          />
        </span>
        <span>
          <Button type={ButtonClass.primary}>Send</Button>
        </span>
      </span>
    </div>
  );
};
export default AddComment;
