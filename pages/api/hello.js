export default function handler(req, res) {
  res.status(200).json({
    client: req.headers["user-agent"],
    server: process.env["npm_config_user_agent"],
  });
}
