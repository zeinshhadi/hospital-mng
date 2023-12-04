const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/hospital_mng/backend",
    createProxyMiddleware({
      target: "http://localhost", // Replace with your PHP server host
      changeOrigin: true,
    })
  );
};
