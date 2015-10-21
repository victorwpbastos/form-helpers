# Form Helpers
> A collection of Handlebars form helpers.

This:
```handlebars
{{input name="name" label="Name:"}}
```
Becomes:
<img src="https://cloud.githubusercontent.com/assets/1017515/10640840/560c9f4a-77f5-11e5-8443-db11c7b45c9b.png"/>

This:
```handlebars
{{radio name="gender" value="M" label="Male"}}
{{radio name="gender" value="F" label="Female"}}
```
Becomes:
<img src="https://cloud.githubusercontent.com/assets/1017515/10640847/5a4618b6-77f5-11e5-9e39-9a77901fc841.png"/>

This:
```handlebars
{{checkbox name="fruits" value="apple" label="Apple"}}
{{checkbox name="fruits" value="orange" label="Orange"}}
{{checkbox name="fruits" value="strawberry" label="Strawberry"}}
```
Becomes:
<img src="https://cloud.githubusercontent.com/assets/1017515/10640850/5e0db92c-77f5-11e5-84a7-7fad392531ec.png"/>

This:
```handlebars
{{#select name="hobby.name" label="Hobby:"}}
    <option value="">-- choose --</option>
    <option value="games">Games</option>
    <option value="soccer">Soccer</option>
    <option value="music">Music</option>
{{/select}}
```
Becomes:
<img src="https://cloud.githubusercontent.com/assets/1017515/10640852/618aec1e-77f5-11e5-90b8-d2dac9853fb0.png"/>

This:
```handlebars
{{textarea name="bio" label="Bio:" rows="2" style="resize:none"}}
```
Becomes:
<img src="https://cloud.githubusercontent.com/assets/1017515/10640856/64b4eb42-77f5-11e5-8c36-8b66dd9535b7.png"/>
