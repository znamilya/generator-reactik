var generators = require('yeoman-generator');
var mkdirp     = require('mkdirp');
var chalk      = require('chalk');
var fs         = require('fs');


var SEPARATOR = '-';
var FILES = {
    REACT:  'react.jsx',
    STYLUS: 'stylus.styl'
}


module.exports = generators.Base.extend({
    _isUpper: function (letter) {
        return letter === letter.toUpperCase();
    },

    _nameToCSSClass: function (str) {
        var res = '';
        var letter;

        for (var i = 0; i < str.length; i++) {
            letter = str[i];

            if (this._isUpper(letter)) {
                if (i > 0) {
                    res += SEPARATOR;
                }
                res += letter.toLowerCase();
            } else {
                res += letter;
            }
        }

        return res;
    },

    _upFirstLatter: function (str) {
        return str[0].toUpperCase() + str.slice(1);
    },

    _checkTech: function (name) {
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
            this._name = this._upFirstLatter(answers.name);
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
        if (this._checkTech('react')) {
            this.fs.copyTpl(
                this.templatePath(FILES.REACT),
                this.destinationPath(this._name + '/' + this._name + '.js'),
                {
                    name: this._name,
                    cssClass: this._nameToCSSClass(this._name),
                    addStyles: this._checkTech('stylus')
                }
            );
        }

        // Create stylus file
        if (this._checkTech('stylus')) {
            this.fs.copyTpl(
                this.templatePath(FILES.STYLUS),
                this.destinationPath(this._name + '/' + this._name + '.styl'),
                {
                    name: this._name,
                    cssClass: this._nameToCSSClass(this._name)
                }
            );
        }

        // Create images folder
        if (this._checkTech('images')) {
           mkdirp.sync(this._name + '/' + 'img/');
        }
     }
});
