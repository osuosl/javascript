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

- **Use ALL_CAPS for constants.** ECMAScript 5 doesn't have any concept of
constants, and will allow a developer to modify any variable. To counter this,
make it explicit that your variable is intended to be constant by naming it
with ALL_CAPS, which implicitly alerts other developers not to modify it.

    ```javascript
    // bad
    var constVar = 3;

    // good
    var CONST_VAR = 3;
    ```

**[⬆ back to top](#table-of-contents)**

## Strings

- **Use single quotes.** This is a matter of preference, but it is something
that should always be standardized. We only use single quotes, unless the
string has embedded single quotes, in which case double quotes are acceptable.

    ```javascript
    // bad
    var x = "a string";

    // okay but less preferable
    var y = 'isn\'t this great';

    // good
    var a = 'a string';
    var b = "isn't this great";
    ```

- **Concatenate over line breaks.** If a string is long enough to cause a line
to go over the 80 character limit, split it and concatenate. If you're splitting
between words, put the space at the end of the first line, not the start of the
next.

    ```javascript
    // bad
    var x = 'This is an example of a string that is way too long and just needs to be cut short before it goes off the edge of screens';

    // bad
    var y = 'This is an example of a string that is extremely long but uses \
    escapes to split it over multiple lines. This can cause confusing problems \
    with whitespace and leads to difficult indentation. (Imagine if you \
    declared this string within 3 or 4 nested blocks; the first line is \
    indented a few times to match the surrounding lines, but the rest of the \
    string is stuck pinned to the first column. Weird, right?)';

    // good
    var a = 'This string is properly built, using multiple literal strings ' +
            'which are concatenated together manually. This requires a few ' +
            'more characters per line than escaped linebreaks, but it allows ' +
            'you to use reasonable indentation.';
    ```

- **Only escape when necessary.** Backslashes harm readability, and there's
no real benefit to escaping random characters in a string anyway.

    ```javascript
    // bad
    var x = '\'this\' \strin\g h\a\s \"escapes\"\.';

    //good
    var a = '\'this\' string has "escapes".';
    var b = "'this' string has \"escapes\".";
    ```

**[⬆ back to top](#table-of-contents)**

## Objects

- **Use literal objects over constructor.** For simple custom objects, use the
literal object syntax, instead of extending a constructed object.

    ```javascript
    // bad
    var x = new Object();
    x.a = 'foo';
    x.b = 'bar';
    x.c = 4;

    // good
    var y = {a: 'foo', b: 'bar', c: 4};
    ```

- **Avoid reserved keywords as keys.** In ECMAScript 3, the specification stated
that properties had to be identifiers which are not already reserved words.
Some interpreters, such as IE 7 and IE 8 (which still maintain strong market
share as of this writing), still follow this specification, meaning code which
uses reserved keywords will not be IE 7/8 compatible. If you're writing code
which will *never* run on these platforms, such as for Node.js, you may ignore
this rule with caution.

    ```javascript
    // bad
    var x = {
      default: 'foo',
      private: true,
      class: 'custom',
    };

    // good
    var y = {
      defaultTo: 'foo',
      hidden: true,
      type: 'custom',
    };
    ```

- **Use synonyms over misspellings.** When avoiding reserved keywords as
property names, use a word which is synonymous with the word you are avoiding
over intentionally misspelling the word.

    ```javascript
    // bad, see above
    var x = {
      class: 'dog',
    };

    // bad (looking at you, Java developers)
    var y = {
      clazz: 'dog',
    };

    // bad
    var z = {
      klass: 'dog',
    };

    // good
    var a = {
      type: 'dog',
    };
    ```

- **Only quote properties where necessary.** Properties are allowed to have
names which are not valid identifiers, for example names which contain hyphens,
underscores, or other symbols, but these must always be quoted, and require
bracket notation to access. When using properties which are valid identifiers,
avoid quotes for readability.

    ```javascript
    // bad
    var x = {
      'foo': 'bar',
    };

    // invalid, will cause errors
    var y = {
      foo-bar: 'baz',
    };

    // good
    var a = {
      foo: 'bar',
      'foo-bar': 'baz',
    };
    ```

- **Prefer dot notation where available.** As stated above, properties which
contain hyphens, underscores, or other symbols are not valid identifiers and
require bracket notation to access. When not using these properties, however,
prefer dot notation.

    ```javascript
    var x = {
      foo: 'bar',
      'foo-bar': 'baz',
    };

    // bad
    x['foo'] = 'foobar';

    // invalid, will cause errors
    x.foo-bar = 'foobar';

    // good
    x.foo = 'baz';
    x['foo-bar'] = 'foobar';
    ```

- **Use indirect references to Object properties.** Don't call Object.prototype
methods, such as `hasOwnProperty`, `propertyIsEnumerable`, or `isPrototypeOf`
directly on an object, as the object may have shadowed the method (e.g.
`{'hasOwnProperty': false}`) or the object may be null.

    ```javascript
    // bad
    console.log(object.hasOwnProperty(prop));

    // better
    console.log(Object.prototype.hasOwnProperty.call(object, prop));
    console.log({}.hasOwnProperty.call(object, prop));

    // best
    var hasProperty = Object.prototype.hasOwnProperty;
    console.log(hasProperty.call(object, prop));
    ```

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
