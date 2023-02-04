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
 * check websocket is
 *
 */
const checkWindowWebSocket = (): boolean => {
  return true;
};

export { fixUrl, checkWindowWebSocket };
