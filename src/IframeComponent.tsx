import React, { useEffect } from 'react';
import './IframeComponent.css';

const IframeComponent: React.FC = () => {
  const streamlitURL = "https://dbagent.streamlit.app/?embed=true&embed_options=show_toolbar,show_padding"; // Adjust embed options as needed

  useEffect(() => {
    const iframe = document.getElementById('streamlit-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.onload = () => {
        console.log('Iframe loaded successfully');
      };
      iframe.onerror = (event) => {
        console.error('Iframe failed to load', event);
      };

      const handleIframeMessages = (event: MessageEvent) => {
        if (event.origin !== "https://dbagent.streamlit.app") {
          return;
        }
        console.log("Message from iframe:", event.data);
      };

      window.addEventListener("message", handleIframeMessages);

      return () => {
        window.removeEventListener("message", handleIframeMessages);
      };
    }
  }, []);

  return (
    <div className="iframe-container">
      <iframe
        id="streamlit-iframe"
        src={streamlitURL}
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default IframeComponent;
