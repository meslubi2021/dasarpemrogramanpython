import React from 'react';
import Content from '@theme-original/DocItem/Content';

const SubStack = () => {
  return <>
    <iframe
      src="https://novalagung.substack.com/embed"
      width="100%"
      height="320"
      style={{ border: "1px solid #EEE", background: "white" }}
      frameborder="0"
      scrolling="no"
    ></iframe>
  </>
}

export default function ContentWrapper(props) {
  return (
    <>
      <Content {...props} />
      <hr />
      <SubStack />
    </>
  );
}
