var generators = require('yeoman-generator');
var mkdirp     = require('mkdirp');
var chalk      = require('chalk');
var fs         = require('fs');


module.exports = generators.Base.extend({
    // Get reducer`s name
    promptingName: function () {
        var done = this.async();

        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Имя редьюсера'
        }, function (answers) {
            this._name = answers.name;
            done();
        }.bind(this));
    },

    // Get actions`s name
    promptingActions: function () {
        var done = this.async();

        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Ввидет имя действий (через запятую)'
        }, function (answers) {
            this._actions = answers.name ? answers.name.replace(/\s+/ig, '').toUpperCase().split(',') : [];
            done();
        }.bind(this));
    },

    writing: function () {
        if (fs.existsSync(this._name)) {
            console.log(chalk.red('Reducer с именем "' + this._name + '" уже существует'));
            return;
        }

        // Create react file
        this.fs.copyTpl(
            this.templatePath('index.jsx'),
            this.destinationPath(this._name + '.jsx'),
            {
                name: this._name,
                constants: this._name,
                actions: this._actions,
            }
        );
     }
});
