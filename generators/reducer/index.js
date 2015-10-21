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

    // Get constants`s name
    promptingConstants: function () {
        var done = this.async();

        this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Ввидет имя файла с константами'
        }, function (answers) {
            this._constants = answers.name;
            done();
        }.bind(this));
    },

    writing: function () {
        if (fs.existsSync(this._name)) {
            console.log(chalk.red('Редьюсер с именем "' + this._name + '" уже существует'));
            return;
        }

        // Create react file
        this.fs.copyTpl(
            this.templatePath('reducer.js'),
            this.destinationPath(this._name + '.js'),
            {
                name: this._name,
                constants: this._constants
            }
        );
     }
});
