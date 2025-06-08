import {config as tsConfig, configs as tsConfigs} from "typescript-eslint";
import {flatConfigs} from "eslint-plugin-import-x";
import {createTypeScriptImportResolver} from "eslint-import-resolver-typescript";
import {globalIgnores} from "eslint/config";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("typescript-eslint").ConfigArray}
 * */
const baseConfig = tsConfig(
  tsConfigs.base,
  flatConfigs.typescript,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: []
        })
      ]
    },
    rules: {
      'import-x/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          groups: ['builtin', 'external', ['internal', 'sibling', 'parent', 'index'], 'object', 'type']
        }
      ],
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      //'import-x/no-restricted-paths': [
        //'error',
        //{
         // zones: [
            // {
            //   target: 'packages/web',
            //   from: ['packages/core/src/infrastructure', 'packages/core/src/application'],
            //   message: 'web should only depend on domain layer for models and presentation layer.'
            // },
            // {
            //   target: 'packages/core/src/presentation',
            //   from: ['packages/web', 'packages/infrastructure'],
            //   message: 'presentation layer can only depend on inner layers: Application and Domain.'
            // },
            // {
            //   target: 'packages/core/src/application',
            //   from: ['packages/web', 'packages/core/src/presentation', 'packages/core/src/infrastructure'],
            //   message: 'Application layer can only depend on Domain layers.'
            // },
            // {
            //   target: 'packages/core/src/domain',
            //   from: [
            //     'packages/web',
            //     'packages/core/src/infrastructure',
            //     'packages/core/src/application',
            //     'packages/core/src/presentation'
            //   ],
            //   message: 'Domain layer cannot depend on outer layers.'
            // },
            // {
            //   target: 'packages/core/src/infrastructure',
            //   from: ['packages/web', 'packages/core/src/presentation'],
            //   message: 'Infrastructure layer can only depend on inner layers: Application and Domain.'
            // }
          //]
        //}
      //]
    }
  },
  globalIgnores([
    '**/dist/',
    '**/node_modules/',
    '**/examples/',
    '**/scripts/',
    '**/dist/',
    '**/app.config.timestamp*'
  ])
)

export default baseConfig
