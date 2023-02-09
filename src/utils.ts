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
 * @return {boolean}
 */
const checkWindowWebSocket = (): boolean => {
  return WebSocket !== undefined;
};

/**
 *  log current version of this lib in console
 *
 */
const logVersion = (): void => {
  console.log("Version 0.0.3");
};

export { fixUrl, checkWindowWebSocket, logVersion };
