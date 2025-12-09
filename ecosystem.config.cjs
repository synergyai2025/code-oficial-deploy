module.exports = {
  apps: [
    {
      name: "frontend-vite",
      cwd: "/var/www/24/synergy_v24", // caminho do projeto
      script: "npm",
      args: "run preview -- --host 0.0.0.0 --port 4173",

      // REMOVEMOS o "interpreter"

      env: {
        NODE_ENV: "production",
      },
      env_production: {
        NODE_ENV: "production",
      },

      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
    },
  ],
};
