var generators = require('yeoman-generator');
var mkdirp     = require('mkdirp');
var chalk      = require('chalk');
var fs         = require('fs');
var utils      = require('../../utils');


var TEMPLATES_PATHS = {
    REACT:  'react.jsx',
};


module.exports = generators.Base.extend({
    // Get container`s name
    promptingName: function () {
        var done = this.async();

        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Имя компонента'
        }, function (answers) {
            this._name = utils.upFirstLetter(answers.name);
            done();
        }.bind(this));
    },

    writing: function () {
        if (fs.existsSync(this._name + '/')) {
            console.log(chalk.red('Контейнер с именем "' + this._name + '" уже существует'));
            return;
        }

        // Create react file
        this.fs.copyTpl(
            this.templatePath(TEMPLATES_PATHS.REACT),
            this.destinationPath(this._name + '/' + this._name + '.jsx'),
            {
                name: this._name,
                cssClass: utils.convertNameToCSSClass(this._name),
            }
        );
     }
});
