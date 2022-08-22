/**
 * Defines a set of configuration options for Ace editors
 */
Hooks.once("init", () => {
	const namespace = "acelib";
	const settings = [];

	/**
	 * Registers a single game setting for this module.
	 *
	 * The settings is registered with the module's namespace,
	 * and the name and hint are assigned translated values
	 * based on the setting name.
	 *
	 * All the settings are world scoped.
	 *
	 * @param {string} name - The name of the setting
	 * @param {type} type - The data type of the setting value.
	 * @param {object} choices - The choices object
	 * @param {Number|Boolean|String} def - The default value of the setting.
	 * @param {Boolean} show - Should this appear in the module settings?
	 */
	const register = (name, type, choices = undefined, def, show = true) => {
		game.settings.register(namespace, name, {
			name: `${namespace}.settings.${name}.Name`,
			hint: `${namespace}.settings.${name}.Hint`,
			scope: "client",
			config: true,
			type: type,
			choices: choices,
			default: def ?? type(""),
			config: show
		});
		settings.push(name);
	}

	/**
	 * Add a getter to Ace that returns an object containing all the settings
	 * from the settings array. These can be passed directly to the Ace initialization.
	 */
	Object.defineProperty(ace, "userSettings", {
		get: () => {
			return Object.fromEntries(
				settings.map(name => [name, game.settings.get(namespace, name)])
			)
		},
		set: () => { throw `ace: Not allowed to re-assign the global instance of ace.userSettings` },
		configurable: false
	});

	register("selectionStyle", String, { "line": "line", "text": "text" }, "text");
	register("highlightActiveLine", Boolean, undefined, false);
	register("highlightSelectedWord", Boolean, undefined, true);
	register("readOnly", Boolean, undefined, false, false);
	register("cursorStyle", String, { "ace": "ace", "slim": "slim", "smooth": "smooth", "wide": "wide" }, "smooth");
	register("mergeUndoDeltas", String, undefined, "always", false);
	register("behavioursEnabled", Boolean, undefined, true, false);
	register("wrapBehavioursEnabled", Boolean, undefined, true, false);
	register("autoScrollEditorIntoView", Boolean, undefined, undefined, false);
	register("showInvisibles", Boolean, undefined, false);
	register("displayIndentGuides", Boolean, undefined, true);
	register("navigateWithinSoftTabs", Boolean, undefined, true);
	register("enableMultiselect", Boolean, undefined, true);
	register("highlightGutterLine", Boolean, undefined, true);
	register("animatedScroll", Boolean, undefined, true, false);
	register("showPrintMargin", Boolean, undefined, false);
	register("printMarginColumn", Number, undefined, 80);
	register("printMargin", Number, undefined, undefined, false);
	register("showFoldWidgets", Boolean, undefined, true);
	register("fadeFoldWidgets", Boolean, undefined, true);
	register("showLineNumbers", Boolean, undefined, true);
	register("showGutter", Boolean, undefined, true);
	register("fontSize", Number, undefined, 15);
	register("fontFamily", String, undefined, "monospace");
	register("scrollPastEnd", Number, undefined, 0.5);
	register("fixedWidthGutter", Boolean, undefined, false, false);
	register("theme", String, { "ace/theme/ambiance": "ambiance", "ace/theme/chaos": "chaos", "ace/theme/chrome": "chrome", "ace/theme/clouds": "clouds", "ace/theme/clouds_midnight": "clouds_midnight", "ace/theme/cobalt": "cobalt", "ace/theme/crimson_editor": "crimson_editor", "ace/theme/dawn": "dawn", "ace/theme/dracula": "dracula", "ace/theme/dreamweaver": "dreamweaver", "ace/theme/eclipse": "eclipse", "ace/theme/github": "github", "ace/theme/gob": "gob", "ace/theme/gruvbox": "gruvbox", "ace/theme/idle_fingers": "idle_fingers", "ace/theme/iplastic": "iplastic", "ace/theme/katzenmilch": "katzenmilch", "ace/theme/kr_theme": "kr_theme", "ace/theme/kuroir": "kuroir", "ace/theme/merbivore": "merbivore", "ace/theme/merbivore_soft": "merbivore_soft", "ace/theme/mono_industrial": "mono_industrial", "ace/theme/monokai": "monokai", "ace/theme/nord_dark": "nord_dark", "ace/theme/pastel_on_dark": "pastel_on_dark", "ace/theme/solarized_dark": "solarized_dark", "ace/theme/solarized_light": "solarized_light", "ace/theme/sqlserver": "sqlserver", "ace/theme/terminal": "terminal", "ace/theme/textmate": "textmate", "ace/theme/tomorrow": "tomorrow", "ace/theme/tomorrow_night_blue": "tomorrow_night_blue", "ace/theme/tomorrow_night_bright": "tomorrow_night_bright", "ace/theme/tomorrow_night_eighties": "tomorrow_night_eighties", "ace/theme/tomorrow_night": "tomorrow_night", "ace/theme/twilight": "twilight", "ace/theme/vibrant_ink": "vibrant_ink", "ace/theme/xcode": "xcode" }, "ace/theme/chrome");
	register("newLineMode", String, { "auto": "auto", "unix": "unix", "windows": "windows" }, "unix");
	register("useWorker", Boolean, undefined, true, false);
	register("tabSize", Number, undefined, 4);
	register("wrap", Boolean, undefined, true);
	register("foldStyle", String, { "markbegin": "markbegin", "markbeginend": "markbeginend", "manual": "manual" }, "markbegin");
	register("mode", String, { "ace/mode/html": "html", "ace/mode/text": "plain text", "ace/mode/json": "json", "ace/mode/css": "css", "ace/mode/js": "javascript" }, "ace/mode/text");
	register("enableBasicAutocompletion", Boolean, undefined, true);
	register("enableSnippets", Boolean, undefined, true);
	register("enableLiveAutocompletion", Boolean, undefined, true);
	register("useElasticTabstops", Boolean, undefined, true);
	register("keyboardHandler", String, { "ace/mode/emacs": "emacs", "ace/mode/sublime": "sublime", "ace/mode/vim": "vim", "ace/mode/vscode": "vscode" }, undefined);
	register("hScrollBarAlwaysVisible", Boolean, undefined, false);
	register("vScrollBarAlwaysVisible", Boolean, undefined, false);
	register("maxLines", Number, undefined, undefined, false);
	register("minLines", Number, undefined, 10, false);
	register("maxPixelHeight", Number, undefined, 0, false);
	register("scrollSpeed", Number, undefined, 2);
	register("dragDelay", Number, undefined, 0);
	register("dragEnabled", Boolean, undefined, true);
	register("focusTimeout", Number, undefined, 0, false);
	register("tooltipFollowsMouse", Boolean, undefined, true, false);
	register("firstLineNumber", Number, undefined, 1);
	register("overwrite", Boolean, undefined, false);
	register("useSoftTabs", Boolean, undefined, true);
	register("indentedSoftWrap", Boolean, undefined, true);
});
