const os = require("os");

export default function handler(req, res) {
  res.status(200).json({
    client: req.headers["user-agent"],
    server: `${os.arch()} ${os.platform()} ${os.release()} ${os.hostname()} ${
      os.version
    }`,
  });
}
