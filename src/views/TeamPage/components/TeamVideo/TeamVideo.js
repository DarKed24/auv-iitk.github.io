import React from "react";
import SectionHeading from "components/UI/SectionHeading";

function TeamVideo() {
  return (
    <section className="oc-section">
      <div className="lm-container lm-container--narrow">
        <SectionHeading
          eyebrow="Watch"
          title={
            <>
              Life in the <span className="lm-grad">AUV room</span>
            </>
          }
          center
        />
        <div className="oc-frame oc-frame--video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/2kunTvZ_zLI"
            title="Team AUV-IITK video"
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default TeamVideo;
