// You don't have to export the function as default. You can also have more than one rule factory
// per file.
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { HelloSchema } from './schema';


// this is a schematic factory function which returns a rule (a function)
export function helloSchematics(_options: HelloSchema): Rule {
  // this is a schematic rule
  return (tree: Tree, _context: SchematicContext) => {
    /*
      SCHEMATIC RULE is called with the Tree and Schematic Context
      Schematic Rule will apply changes to the tree
      and return the changed terre for further processing by the next rule
      that wya, the schematic rules are composable
    */
      const { name } = _options;
      tree.create('/hello.js', `console.log('Hello ${name} !');`);
      return tree;
  };
}
