# Ace library

![](https://img.shields.io/github/v/tag/arcanistzed/acelib)

A library module for using the [Ace editor](https://ace.c9.io/) in Foundry VTT.

This library is currently being used by

- [Journal Code Editor](https://github.com/arcanistzed/jce)

Submit a PR to add your module to the list.

# Installation

In the setup screen, use the URL https://raw.githubusercontent.com/arcanistzed/acelib/main/module.json to install the module.

# Usage

To easily add an Ace editor, you can create a `<div>` and use `ace.edit` to initialize. You can create multiple editors at once with this method.

```js
editor = ace.edit(document.getElementById("the-id-of-the-div"));
```

This will set the Ace options to the ones that the user has configured in module settings.

```js
editor.setOptions(ace.userSettings);
```

Set the editor's contents

```js
editor.setValue("initial value");
```

Get the editor's contents

```js
editor.getValue();
```

Instructions for customizing each editor individually are available on [the official guide](https://ace.c9.io/#nav=howto) which has examples of how to set various options. This is useful when you need an editor to work a certain way (e.g. force the use of JSON), but should be used sparingly since it robs the user of their choice. These will override the user's choices. Different editors can use different options even if they are open simultaneously.

## Using Ace

Press Ctrl+Alt+h or Cmd+Alt+h to view a list of all the keyboard shortcuts available. You can access the command palette by pressing F1 while focusing on the editor.

# Contributing

Contributions are welcome via pull request.

# License

This package is under an [MIT license](LICENSE)

# Bugs

You can submit bugs via [Github Issues](https://github.com/arcanistzed/acelib/issues/new/choose).

# License

This package is under an [MIT license](LICENSE) while Ace is under a [BSD license](https://github.com/ajaxorg/ace/blob/master/LICENSE).

# Contact me

I can be reached on discord [@arcanist#4317](https://discord.com/users/455117777745870860) or by [email](mailto:arcanistzed@gmail.com?subject=Ace%20library%20module%20for%20Foundry%20VTT).
