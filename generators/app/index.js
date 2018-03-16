'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to  ' + chalk.red('React Native DI')
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Your project name',
      default: this.appname, // Default to current folder name
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath(`${this.props.projectName}/package.json`),
        this.props
      )
    },

    projectfiles: function () {
      const self = this
      const fs = this.fs
      this.fs.copy(
        this.templatePath('assets/logo/Hello.png'),
        this.destinationPath(`${this.props.projectName}/assets/logo/Hello.png`)
      )
        ;[
          'README.md', '.babelrc', '.flowconfig', '.watchmanconfig', 'App.js', 'app.json', 'ChangeLog.md', 'index.js', 'jsconfig.json', 'src/App.js'
        ].forEach(name => fs.copyTpl(self.templatePath(name), self.destinationPath(`${this.props.projectName}/${name}`), self.props))

        ;['setup.js',
          'store/index.js', 'store/FetchAPI.js', 'store/job/index.js',
          'store.fake/index.js', 'store.fake/job/index.js', 'store.fake/job/mockup.js']
          .forEach(name => fs.copyTpl(self.templatePath(`/src/boot/${name}`), self.destinationPath(`${this.props.projectName}/src/boot/${name}`), self.props))

        ;['job-details/index.js', 'job-details/styles.js',
          'job-list/index.js', 'job-list/styles.js',
          'login/index.js', 'login/styles.js',
          'receive-goods/index.js', 'receive-goods/styles.js',
          'sidebar/index.js', 'sidebar/styles.js',
        ].forEach(name => fs.copyTpl(self.templatePath(`/src/screens/${name}`), self.destinationPath(`${this.props.projectName}/src/screens/${name}`), self.props))

        ;['index.js', 'menu-header.js', 'back-header.js', 'styles.js'
        ].forEach(name => fs.copyTpl(self.templatePath(`/src/screens/components/${name}`), self.destinationPath(`${this.props.projectName}/src/screens/components/${name}`), self.props))

        ;['index.js','Body.js', 'Left.js', 'Right.js', 'Header.js', 'Switch.js', 'Thumbnail.js','Container.js', 'Content.js', 'Button.js', 'Title.js', 'Subtitle.js', 'InputGroup.js', 'Badge.js', 'CheckBox.js',
          'Card.js','Radio.js', 'H3.js', 'H2.js', 'H1.js', 'Footer.js', 'FooterTab.js', 'Fab.js', 'Item.js', 'Label.js', 'Textarea.js', 'Text.js', 'Toast.js', 'Tab.js', 'TabBar.js', 'TabContainer.js',
          'View.js', 'TabHeading.js', 'Icon.js', 'Input.js', 'SwipeRow.js', 'Segment.js', 'Spinner.js', 'CardItem.js', 'ListItem.js', 'Form.js', 'Separator.js','Picker.android.js','Picker.ios.js'
        ].forEach(name => fs.copyTpl(self.templatePath(`/src/theme/components/${name}`), self.destinationPath(`${this.props.projectName}/src/theme/components/${name}`), self.props))

        ;['commonColor.js', 'material.js', 'platform.js'
        ].forEach(name => fs.copyTpl(self.templatePath(`/src/theme/variables/${name}`), self.destinationPath(`${this.props.projectName}/src/theme/variables/${name}`), self.props))

    }
  },
});
