module.exports = {
  apps: [
    {
      name: "node-app",
      script: "app.js",
      instances: 1,
      autorestart: true,
      error_file: "/var/log/kadkahwin/node-error.log",
      out_file: "/var/log/kadkahwin/node-access.log",
      merge_logs: true,
      time: true
    }
  ]
};
