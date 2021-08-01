# Ace library

![Version](https://img.shields.io/github/v/tag/arcanistzed/acelib) ![Latest Release Download Count](https://img.shields.io/github/downloads/arcanistzed/acelib/latest/module.zip?label=Downloads&style=flat-square&color=9b43a8) ![Foundry Core Compatible Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Farcanistzed%2Facelib%2Fmain%2Fmodule.json&label=Foundry%20Core%20Compatible%20Version&query=$.compatibleCoreVersion&style=flat-square&color=ff6400)

A library module for using the [Ace editor](https://ace.c9.io/) in Foundry VTT.

This library is currently being used by

- [Journal Code Editor](https://foundryvtt.com/packages/jce)
- [VTT Macro Editor](https://foundryvtt.com/packages/macroeditor)
- [Not Enough NPCs: A 5e NPC Generator](https://foundryvtt.com/packages/npcgen)
- [Stream Utils](https://foundryvtt.com/packages/0streamutils)

Let me know and I will add your module to the list.

## Installation

In the setup screen, use the URL `https://raw.githubusercontent.com/arcanistzed/acelib/main/module.json` to install the module.

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

## Contributing

Contributions are welcome via pull request.

## Bugs

You can submit bugs via [Github Issues](https://github.com/arcanistzed/acelib/issues/new/choose).

## License

This package is under an [MIT license](LICENSE) while Ace is under a [BSD license](https://github.com/ajaxorg/ace/blob/master/LICENSE).

## Contact me

Come hang out on [my Discord server](https://discord.gg/AAkZWWqVav) where my username is [@arcanist#4317](https://discord.com/users/455117777745870860) or [click here to send me an email](mailto:arcanistzed@gmail.com?subject=NAME%20module%20for%20Foundry%20VTT).
