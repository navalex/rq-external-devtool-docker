import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    return {
        define: {
            __SOCKET_PORT__: env.SOCKET_PORT
        },
        server: {
            port: parseInt(env.DT_PORT || '3006'),
            host: '0.0.0.0'
        }
    }
})