import { dasherize } from '@angular-devkit/core/src/utils/strings';
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { dataService } from '../hello-schematics/templates/services/data-service';
import { HelloSchema } from './schema';

export function helloSchematics(_options: HelloSchema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    //        IGNORE ALL THIS STUFF FROM THE FOLLOWING ARTICLE:
    //        https://medium.com/@tomastrajan/total-guide-to-custom-angular-schematics-5c50cf90cdb4
    /*
      Read 'angular.json' file as buffer
      are we in Angular CLI workspace?
    */
    // const workspaceConfigBuffer = tree.read('angular.json');
    // if (!workspaceConfigBuffer) {
    //   throw new SchematicsException('Not an Angular CLI workspace');
    // }
    // const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
    // const projectName = _options.project || workspaceConfig.defaultProject;
    // const project = workspaceConfig.projects[projectName];
    /*
        FIRST, buildDefaultPath(project) gets us default path for project
        eg: src/app or projects/some-app/src/app (based on workspace)
     */
    // const defaultProjectPath = buildDefaultPath(project);


    //        As of August 2019, the following WORKS:
    //    1) On the NodeJS command prompt, navigate to the Target Project folder
    //    2) Run command: npm link D:\path\toyour\schematics\project\folder
    //    3) Run command: ng generate ../path/toyour/schematics/project/src/collection.json:schema_name


    tree.create(`src/app/features/${dasherize(_options.name)}/services/${dasherize(_options.name)}-data.service.ts`, `${dataService(_options.name)}`);

    return tree;
  };
}
