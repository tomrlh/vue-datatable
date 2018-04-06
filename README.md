# DataTable Vue component

> Component that abstracts the [jQuery DataTables](https://datatables.net) to Vue components

## About

There are a lot of projects that make the same thing, but this one looks to do as simple as possible, avoiding datatables configuration and table html structure code inside vue components, separating the table responsabilities.

## Requirements

``` bash
# install dependencies
npm install datatables.net

// in App.vue
import 'datatables.net'
```

### or
build your own datatable.js and datatable.css [here](https://datatables.net/download/index) and add to your project.


## Usage

- import the datatable component and pass the required parameters (rows and columns) that must be arrays:

```html
<data-table :id="id" :columns="cols" :rows="rows" :cols="cols"></data-table>
```

- colums must have ```data``` and ```label``` properties (data corresponds to row object/array property);

- to apply vue filters, pass it name as a property to desired column:

```js
cols: [{data: 'price', label: 'Price', filter: 'currency'}]
```

## About

- full support to ajax requests not implemented yet;
- this component is in development;
- any sugestions will be helpful;