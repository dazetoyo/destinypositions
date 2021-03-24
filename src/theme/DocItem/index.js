import React, { useEffect } from 'react';
import OriginalDocItem from '@theme-original/DocItem';

// handles injecting the google schema into the specified ID
function DocItem(props) {
  return (
    <OriginalDocItem {...props} />
  );
}

export default DocItem;
