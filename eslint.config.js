import { defineConfig, globalIgnores } from "eslint/config";
import css from "@eslint/css";

export default defineConfig([
    // Including or exluding globalIgnores() makes no difference:
    globalIgnores(["node_modules"]),

    {
        files: ["**/*.css"],
        language: "css/css",
        plugins: { css },
        rules: { "css/use-baseline": "warn" },
    },
]);
