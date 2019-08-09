// You don't have to export the function as default. You can also have more than one rule factory
// per file.
import { Rule, SchematicContext, Tree, url, apply, template, mergeWith } from '@angular-devkit/schematics';
import { HelloSchema } from './schema';

// Object containing helper string functions like dasherize, classify, ...
import { strings } from '@angular-devkit/core';

// this is a schematic factory function which returns a rule (a function)
export function helloSchematics(_options: HelloSchema): Rule {
  // this is a schematic rule
  return (tree: Tree, _context: SchematicContext) => {
    // Removed original rule implementation

    // Fetch template folders and files
    const sourceTemplates = url('./files');

    /*
      PARAMETRIZE our template sources
      APPLY accepts source and array of rules
      'template()' rule processes templates
      PASS IN options and helper strings and get parametrized template source
     */
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        addExclamation
      })
    ]);

    // return mergeWith(sourceParametrizedTemplates);
    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}

function addExclamation(value: string): string {
  return value + '!';
}
