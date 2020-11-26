import { WINDOW_WIDTH, WINDOW_HEIGHT } from './constants/constants';

figma.showUI(__html__, { width: WINDOW_WIDTH, height: WINDOW_HEIGHT });

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

figma.on('selectionchange', () => {
  const { length } = figma.currentPage.selection;

  figma.ui.postMessage({
    message: 'setSelectedLayerCount',
    value: length,
  });
});
