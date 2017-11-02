# optionize
Easy and clearly add, remove or select option tags from jQuery('select') object

## Usage

```
var $select = $("select");
var s = stiivOptionize.setSelect($select)
    .add(1, "Mirko")
    .add(2, "Pero")
    .addBlank()
    .add(2, "Marko")
    .add(3, "Gjuro")
    .add(4, "Marko")
    .remove(1)
    .render()
    .select(2);

s.change(2, 'John').render().select(2);
```
