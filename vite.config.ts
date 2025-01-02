import react from "@vitejs/plugin-react-swc"
import path, { resolve } from "node:path"
import { defineConfig, loadEnv } from "vite"

export default ({ command, mode }) => {
  console.log("🥧[command]:", command)
  const env = loadEnv(
    mode,
    path.resolve(process.cwd(), "env")
  )
  const {
    VITE_APP_PORT,
    VITE_SERVER_BASEURL,
    VITE_APP_PROXY,
    VITE_APP_PROXY_PREFIX
  } = env

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    server: {
      host: "0.0.0.0",
      hmr: true,
      port: Number.parseInt(VITE_APP_PORT, 10),
      // 仅 H5 端生效，其他端不生效（其他端走build，不走devServer)

      proxy: JSON.parse(VITE_APP_PROXY)
        ? {
            [VITE_APP_PROXY_PREFIX]: {
              target: VITE_SERVER_BASEURL,
              changeOrigin: true,
              secure: false, // 是否支持https
              // bypass(req, res, options: any) {
              //   const proxyURL = options.target + options.rewrite(req.url)
              //   console.log('proxyURL', proxyURL)
              //   req.headers['x-req-proxyURL'] = proxyURL // 设置未生效
              //   res.setHeader('x-req-proxyURL', proxyURL) // 设置响应头可以看到
              // },
              rewrite: (path) => {
                return path.replace(
                  new RegExp(
                    `^${VITE_APP_PROXY_PREFIX}`
                  ),
                  ""
                )
              }
            }
          }
        : undefined
    }
  })
}
