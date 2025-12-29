module.exports = {
  apps: [
    {
      name: "frontend-v28",
      cwd: "/var/www/28/v28", // caminho do projeto
      script: "npm",
      args: "run preview -- --host 0.0.0.0 --port 4175",

      // REMOVI o "interpreter"

      env: {
        NODE_ENV: "production",
      },
      env_production: {
        NODE_ENV: "production",
      },

      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
    },
  ],
};

