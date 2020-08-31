let ip;

export const getIP = async () => {
  if (!ip) {
    const response = await fetch(
      'https://us-central1-stepzen-production.cloudfunctions.net/get-ip'
    );
    const json = await response.json();
    ip = json.ip;
  }

  return Promise.resolve(ip);
};
