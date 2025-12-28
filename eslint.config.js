import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ["dist", "node_modules", "dev", "goods", "demo", "docs"],
  },
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/ban-types": "off",
      "no-var": "off",
      "prefer-const": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/prefer-namespace-keyword": "off",
      "prefer-rest-params": "off",
      "@typescript-eslint/no-unused-expressions": "off"
    },
  }
);
