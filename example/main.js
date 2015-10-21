require('../src/index');

var $ = require('jquery');
var Handlebars = require('handlebars/runtime');
var data = {
    name: 'Chunda Love',
    gender: 'M',
    fruits: ['apple', 'strawberry'],
    hobby: {name: 'games'},
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque beatae eaque pariatur, sint quia, placeat qui aut tempora hic ipsum voluptatem ducimus ab cum? Veniam error obcaecati quae deserunt perspiciatis.'
};

function compile(template) {
    return Handlebars.compile(template)(data);
}

var input = '{{input name="name" label="Name:"}}';

var radio = [
    '{{radio name="gender" value="M" label="Male"}}',
    '{{radio name="gender" value="F" label="Female"}}'
].join('\n');

var checkbox = [
    '{{checkbox name="fruits" value="apple" label="Apple"}}',
    '{{checkbox name="fruits" value="orange" label="Orange"}}',
    '{{checkbox name="fruits" value="strawberry" label="Strawberry"}}'
].join('\n');

var select = [
    '{{#select name="hobby.name" label="Hobby:"}}',
    '    <option value="">-- choose --</option>',
    '    <option value="games">Games</option>',
    '    <option value="soccer">Soccer</option>',
    '    <option value="music">Music</option>',
    '{{/select}}'
].join('\n');

var textarea = '{{textarea name="bio" label="Bio:" rows="2" style="resize:none"}}';

$('.container').append('<h3>Input:</h3>');
$('.container').append('<pre>' + input + '</code>');
$('.container').append('<div class="well well-sm">' + compile(input) + '</div>');

$('.container').append('<h3>Radio:</h3>');
$('.container').append('<pre>' + radio + '</code>');
$('.container').append('<div class="well well-sm">' + compile(radio) + '</div>');

$('.container').append('<h3>Checkbox:</h3>');
$('.container').append('<pre>' + checkbox + '</code>');
$('.container').append('<div class="well well-sm">' + compile(checkbox) + '</div>');

$('.container').append('<h3>Select:</h3>');
$('.container').append('<pre>' + select.replace(/</g, '&lt;') + '</code>');
$('.container').append('<div class="well well-sm">' + compile(select) + '</div>');

$('.container').append('<h3>Textarea:</h3>');
$('.container').append('<pre>' + textarea + '</code>');
$('.container').append('<div class="well well-sm">' + compile(textarea) + '</div>');