import webpack from "webpack";

export default {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Подключение jQuery глобально
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            })
        );

        // Правило для работы с SVG
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        // Оптимизация для серверной и клиентской сборки
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                path: false,
                os: false,
            };
        }

        return config;
    },
    i18n: {
        locales: ['en', 'ru', 'uk', 'es'],
        defaultLocale: 'ru',
        localeDetection: false,
    },
    env: {
        CUSTOM_VAR: 'my-custom-value',
    },
    // Дополнительные параметры оптимизации
    optimizeFonts: true,
    poweredByHeader: false,
    reactStrictMode: true, // Включение строгого режима React

    // Игнорирование ошибок ESLint и TypeScript во время сборки
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};
