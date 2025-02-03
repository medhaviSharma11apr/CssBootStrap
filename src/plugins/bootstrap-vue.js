import { defineAsyncComponent } from 'vue';

// Dynamically import all BootstrapVueNext components
const requireComponent = require.context('bootstrap-vue-next', true, /\.vue$/);

export default {
  install(app) {
    requireComponent.keys().forEach((fileName) => {
      const componentConfig = requireComponent(fileName);
      const componentName = fileName
        .replace(/^\.\/(.*)\.\w+$/, '$1') // Extract component name
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert PascalCase to kebab-case
        .toLowerCase();

      app.component(
        componentName,
        defineAsyncComponent(() => componentConfig.default || componentConfig)
      );
    });
  },
};
