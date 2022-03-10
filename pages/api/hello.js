const os = require("os");

export default function handler(req, res) {
  res.status(200).json({
    client: req.headers,
    server_ip: os.networkInterfaces(),
  });
}
