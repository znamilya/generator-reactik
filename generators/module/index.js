var generators = require('yeoman-generator');
var mkdirp     = require('mkdirp');
var chalk      = require('chalk');
var fs         = require('fs');
var utils      = require('../../utils');

var TEMPLATES_PATHS = {
    REACT:  'react.jsx',
    STYLUS: 'stylus.styl',
}


module.exports = generators.Base.extend({
    _checkIfTechSelected: function (name) {
        return this._techs.indexOf(name) !== -1;
    },

    // Get component`s name
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

    // Get technologies
    promptingTechs: function () {
        var done = this.async();

        this.prompt({
            type    : 'checkbox',
            name    : 'techs',
            message : 'Выберите технологии',
            choices: ['react', 'stylus', 'images']
        }, function (answers) {
            this._techs = answers.techs;
            done();
        }.bind(this));
    },

    writing: function () {
        if (fs.existsSync(this._name + '/')) {
            console.log(chalk.red('Компонент с именем "' + this._name + '" уже существует'));
            return;
        }

        // Create react file
        if (this._checkIfTechSelected('react')) {
            this.fs.copyTpl(
                this.templatePath(TEMPLATES_PATHS.REACT),
                this.destinationPath(this._name + '/' + this._name + '.jsx'),
                {
                    name: this._name,
                    cssClass: utils.convertNameToCSSClass(this._name),
                    addStyles: this._checkIfTechSelected('stylus'),
                }
            );
        }

        // Create stylus file
        if (this._checkIfTechSelected('stylus')) {
            this.fs.copyTpl(
                this.templatePath(TEMPLATES_PATHS.STYLUS),
                this.destinationPath(this._name + '/' + this._name + '.styl'),
                {
                    name: this._name,
                    cssClass: utils.convertNameToCSSClass(this._name),
                }
            );
        }

        // Create images folder
        if (this._checkIfTechSelected('images')) {
           mkdirp.sync(this._name + '/' + 'img/');
        }
     }
});
