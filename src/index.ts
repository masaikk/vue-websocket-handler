const useWebsocket = () => {
  return {
    logVersion: () => {
      console.log("Version 0.0.0");
    },
  };
};
const SocketHandler = { useWebsocket };

export default SocketHandler;
