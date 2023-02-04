/**
 * format url
 * @param {string} url
 * @return {string} formatted url
 */
const fixUrl = (url?: string): string => {
  if (url === undefined) {
    return "";
  } else {
    return url;
  }
};

/**
 * check websocket api is available
 *
 */
const checkWindowWebSocket = (): boolean => {
  return WebSocket !== undefined;
};

export { fixUrl, checkWindowWebSocket };
