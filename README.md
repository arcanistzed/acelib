# Ace Library

![Version](https://img.shields.io/github/v/tag/arcanistzed/acelib) ![Latest Release Download Count](https://img.shields.io/github/downloads/arcanistzed/acelib/latest/module.zip?label=Downloads&style=flat-square&color=9b43a8) ![Supported Foundry Versions](https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://raw.githubusercontent.com/arcanistzed/acelib/main/module.json&style=flat-square&color=ff6400) [![Discord Server](https://img.shields.io/badge/-Discord-%232c2f33?style=flat-square&logo=discord)](https://discord.gg/AAkZWWqVav) [![Patreon](https://img.shields.io/badge/-Patreon-%23141518?style=flat-square&logo=patreon)](https://www.patreon.com/bePatron?u=15896855)

A library module for using the [Ace editor](https://ace.c9.io/) in Foundry VTT.

This library is currently being used by

- [Journal Code Editor](https://foundryvtt.com/packages/jce)
- [Export Sheet to PDF](https://foundryvtt.com/packages/pdf-sheet)
- [Macro Editor](https://foundryvtt.com/packages/macroeditor)
- [Not Enough NPCs: A 5e NPC Generator](https://foundryvtt.com/packages/npcgen)
- [Stream Utils](https://foundryvtt.com/packages/0streamutils)
- [DF Flag Editor](https://foundryvtt.com/packages/df-flag-edit)

Let me know and I will add your module to the list.

## Installation

In the setup screen, use the URL `https://github.com/arcanistzed/acelib/releases/latest/download/module.json` to install the module.

## Usage

To easily add an Ace editor, you can create a `<div>` and use `ace.edit` to initialize. You can create multiple editors at once with this method.

```js
let editor = ace.edit("the-id-of-the-div");
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

### Using Ace

Press Ctrl+Alt+h or Cmd+Alt+h to view a list of all the keyboard shortcuts available. You can access the command palette by pressing F1 while focusing on the editor.

## Support

Please consider supporting me on [my Patreon](https://patreon.com/arcanistzed) if you like my work. You can see a list of all my projects on [my website](https://arcanist.me).

## Bugs

You can submit bugs via [Github Issues](https://github.com/arcanistzed/acelib/issues/new/choose) or on [my Discord server](https://discord.gg/AAkZWWqVav).

## Contact me

Come hang out on my [my Discord server](https://discord.gg/AAkZWWqVav) or [click here to send me an email](mailto:arcanistzed@gmail.com?subject=Ace%20Library%20module).

## License

Copyright © 2021 arcanist

This package is under an [MIT license](LICENSE) and the [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/) while Ace Editor is under a [BSD license](https://github.com/ajaxorg/ace/blob/master/LICENSE).