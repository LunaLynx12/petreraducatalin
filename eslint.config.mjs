import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypeScript,
  {
    ignores: ["out/**", ".next/**", "node_modules/**", "public/**"],
  },
];

export default eslintConfig;