module.exports = {
  apps: [
    {
      name: "grand_hyatt",
      script: "npm",
      args: ["start"],
      cwd: "/var/www/grand_hyatt",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
