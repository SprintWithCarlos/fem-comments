/* eslint-disable react/jsx-props-no-spreading */
import "./avatar.sass";
import { v1 as uuid } from "uuid";

export enum StatusOptions {
  online = "online",
  offline = "offlines",
}
type SourceType = {
  [key: string]: string;
  media: string;
  srcSet: string;
  type: string;
};
type AvatarProps = {
  src: string;
  alt: string;
  size?: {
    width?: string;
    height?: string;
  };
  className?: string;
  status?: StatusOptions;
  sources: Partial<SourceType>[];
};
const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const { src, alt, size, className, status, sources } = props;
  return (
    <div
      data-testid="avatar"
      className={`avatar ${status ? `avatar--status-${status}` : ""}`}
    >
      <picture>
        {sources.map((source) => (
          <source {...source} key={uuid()} />
        ))}
        <img
          src={src}
          alt={alt}
          className={`avatar--${className}`}
          /*  height={size?.height}
        width={size?.width} */
          // className={`${className} `}
          style={{ height: `${size?.height}px`, width: `${size?.width}px` }}
        />
      </picture>
    </div>
  );
};
export default Avatar;
