import { dasherize } from '@angular-devkit/core/src/utils/strings';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { dataService } from '../hello-schematics/templates/services/data-service';
import { HelloSchema } from './schema';

export function helloSchematics(_options: HelloSchema): Rule {
  // this is a schematic rule
  return (tree: Tree, _context: SchematicContext) => {
    // Removed original rule implementation
    tree.create(`src/app/features/${dasherize(_options.name)}/services/${dasherize(_options.name)}-data.service.ts`, `${dataService(_options.name)}`);

    return tree;
  };
}
