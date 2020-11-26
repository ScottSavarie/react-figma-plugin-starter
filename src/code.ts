// Show the plugin
figma.showUI(__html__);

// Capture messages from App.tsx
figma.ui.onmessage = ({ type }) => {
  switch (type) {
    case 'onMount':
      figma.ui.postMessage({
        message: 'setMountMessage',
        value: 'Hey, from the plugin!',
      });
      break;
  }
};

// When the selection changes, post a message to be captured in App.tsx
figma.on('selectionchange', () => {
  const { length } = figma.currentPage.selection;
  figma.ui.postMessage({
    message: 'setSelectedLayerCount',
    value: length,
  });
});
