# OSU Open Source Lab JavaScript Style Guide, ECMAScript 5

*A sane, reusable Javascript style guide.*

## Table of Contents

1.  [Types](#types)
2.  [Declaration](#declaration)
3.  [Strings](#strings)
4.  [Objects](#objects)
5.  [Arrays](#arrays)
6.  [Functions](#functions)
7.  [Closures](#closures)
8.  [Properties](#properties)
9.  [Hoisting](#hoisting)
10. [Operators](#operators)
11. [Blocks](#blocks)
12. [Comments](#comments)
13. [Whitespace and Indentation](#whitespace-and-indentation)
14. [Commas](#commas)
15. [Semicolons](#semicolons)
16. [Type Coercion](#type-coercion)
17. [Identifiers](#identifiers)
18. [Accessors](#accessors)
19. [Constructors](#constructors)
20. [Events](#events)
21. [Modules](#modules)
22. [jQuery](#jquery)
23. [Testing](#testing)
24. [License](#license)

## Types

-   **Primitive Types**: Primitives are stored directly in memory and operated
on by value. The 5 primitive types are:

    * `string`
    * `boolean`
    * `number`
    * `null`
    * `undefined`

    ```javascript
    var a = 3;
    var b = a; // The value '3' is passed to be, creating two separate values

    b = 9; // We only alter b here

    console.log(a, b); // => 3, 9
    ```

-   **Reference Types**: Also known as **complex types**, reference types are
actually a reference to the object or value. This means that they are operated
on and passed around by their reference. These are types like:

    * `object`
    * `array`
    * `function`

    ```javascript
    var a = {foo: 'bar'};
    var b = a; // Passes the reference to b; both point to the same object

    b.foo = 'baz'; // We now are altering both variables

    console.log(a); // => {"foo": "baz"}
    ```

**[⬆ back to top](#table-of-contents)**

## Declaration

-  **Always use `var`**. Declaring a variable without `var` pollutes the global
namespace, potentially shadowing global variables we might want. Also, when
writing code that will be run in the browser, it' not always clear whether
global variables will be put in the top-level, in `window`, or in `document`,
which just leads to even more confusion.

    ```javascript
    // bad
    a = 3;

    // good
    var a = 3;
    ```

-  **One variable per `var`**. This makes it easier to add and remove variable
declarations, and prevents having worry about swapping your punctuation around
or have punctuation-only diffs.

    ```javascript
    // bad
    var orders = getOrders(),
        customer = getUsername(),
        tax = 0.05;

    // Potential consequence of the above
    // (see if you can spot the difference)
    var orders = getOrders(),
        customer = getUsername();
        tax = 0.05;

    // good
    var orders = getOrders();
    var customer = getUsername();
    var tax = 0.05;
    ```

- **Unassigned variables last**. You never know when you'll change one of your
unassigned variables to instead hold a value based on an earlier variable.

    ```javascript
    // bad
    var i;
    var orders = getOrders();
    var customer = getUsername();
    var tax = 0.05;
    var len;

    // worse; see above
    var i, len, orders = getOrders(), customer = getUsername(), tax = 0.05;

    // good
    var orders = getOrders();
    var customer = getUsername();
    var tax = 0.05;
    var i;
    var len;
    ```

**[⬆ back to top](#table-of-contents)**

## Strings

**[⬆ back to top](#table-of-contents)**

## Objects

**[⬆ back to top](#table-of-contents)**

## Arrays

**[⬆ back to top](#table-of-contents)**

## Functions

**[⬆ back to top](#table-of-contents)**

## Closures

**[⬆ back to top](#table-of-contents)**

## Properties

**[⬆ back to top](#table-of-contents)**

## Hoisting

**[⬆ back to top](#table-of-contents)**

## Operators

**[⬆ back to top](#table-of-contents)**

## Blocks

**[⬆ back to top](#table-of-contents)**

## Comments

**[⬆ back to top](#table-of-contents)**

## Whitespace

**[⬆ back to top](#table-of-contents)**

## Commas

**[⬆ back to top](#table-of-contents)**

## Semicolons

**[⬆ back to top](#table-of-contents)**

## Type Coercion

**[⬆ back to top](#table-of-contents)**

## Identifiers

**[⬆ back to top](#table-of-contents)**

## Accessors

**[⬆ back to top](#table-of-contents)**

## Constructors

**[⬆ back to top](#table-of-contents)**

## Events

**[⬆ back to top](#table-of-contents)**

## Modules

**[⬆ back to top](#table-of-contents)**

## jQuery

**[⬆ back to top](#table-of-contents)**

## Testing

**[⬆ back to top](#table-of-contents)**

## License

(The Apache v2.0 License)

Copyright 2016 OSU Open Source Lab

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

**[⬆ back to top](#table-of-contents)**
