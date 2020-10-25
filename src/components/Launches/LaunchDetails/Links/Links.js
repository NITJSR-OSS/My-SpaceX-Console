import React from "react";
import styles from "./Links.css";

const Links = (props) => {
  let data = props.data;
  let RedditCampaign = data.links.reddit.campaign
    ? data.links.reddit.campaign
    : "N/A";
  let RedditLaunch = data.links.reddit.launch
    ? data.links.reddit.launch
    : "N/A";
  let RedditMedia = data.links.reddit.media ? data.links.reddit.media : "N/A";
  let PressKit = data.presskit ? data.presskit : "N/A";
  let WebCast = data.webcast ? data.webcast : "N/A";
  let Article = data.article ? data.article : "N/A";
  let Wikipedia = data.wikipedia ? data.article : "N/A";

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.key}>Reddit Campaign</div>
      <div className={styles.key}>
        <a href={RedditCampaign}>{RedditCampaign}</a>
      </div>

      <div className={styles.key}>Reddit Launch</div>
      <div className={styles.key}>
        <a href={RedditLaunch}>{RedditLaunch}</a>
      </div>

      <div className={styles.key}>Reddit Media</div>
      <div className={styles.key}>
        <a href={RedditMedia}>{RedditMedia}</a>
      </div>

      <div className={styles.key}>Press Kit</div>
      <div className={styles.key}>
        <a href={PressKit}>{PressKit}</a>
      </div>

      <div className={styles.key}>Web Cast</div>
      <div className={styles.key}>
        <a href={WebCast}>{WebCast}</a>
      </div>

      <div className={styles.key}>Article</div>
      <div className={styles.key}>
        <a href={Article}>{Article}</a>
      </div>

      <div className={styles.key}>Wikipedia</div>
      <div className={styles.key}>
        <a href={Wikipedia}>{Wikipedia}</a>
      </div>
    </div>
  );
};

export default Links;
