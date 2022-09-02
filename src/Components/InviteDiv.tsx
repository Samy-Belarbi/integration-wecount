import { Button } from "./Button";

export const InviteDiv = () => {
  return (
    <div className="invite-div">
      <div className="user-interface">
        <p>User Interface</p>
      </div>

      <h3>Service Page Website</h3>

      <p className="description">
        Make a page display about services for websites company with blue and
        red colors.
      </p>

      <div className="infos">
        <div className="infos-container">
          <div className="black-circle"></div>
          <p>0/20</p>
        </div>

        <div className="infos-container">
          <div className="icons">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
          </div>

          <Button />
        </div>
      </div>

      <div className="preview-container">
        <div className="preview">
          <div className="black-circle"></div>
          <p>4 attachment</p>
        </div>
        <div className="separator"></div>
        <div className="preview">
          <div className="black-circle"></div>
          <p>10 comments</p>
        </div>
      </div>
    </div>
  );
};
