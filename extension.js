import Gio from 'gi://Gio';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import St from 'gi://St';

import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';

export default class ColorPickerExtension extends Extension {
    enable() {
        this._indicator = new ColorPickerIndicator();
        Main.panel.addToStatusArea("ypsilonpicker", this._indicator);
    }

    disable() {
        if (this._indicator) {
            this._indicator.destroy();
            this._indicator = null;
        }
    }
}

const ColorPickerIndicator = GObject.registerClass(
    class ColorPickerIndicator extends PanelMenu.Button {
        _init() {
            super._init(0.5, "ColorPickerIndicator");

            let icon = new St.Icon({
                gicon: Gio.icon_new_for_string(this._getExtensionPath() + "/icons/ypsilon-picker.svg"),
                style_class: "system-status-icon",
            });

            this.add_child(icon);
            this.connect("button-press-event", () => this._runColorPicker());
        }

        _getExtensionPath() {
            return Extension.lookupByUUID("ypsilonpicker@gnome").path;
        }

        _runColorPicker() {
            let scriptPath = this._getExtensionPath() + "/scripts/colorpicker.sh";
            GLib.spawn_async(
                null,
                ["/usr/bin/gnome-terminal", "--", "bash", "-c", scriptPath],
                null,
                GLib.SpawnFlags.SEARCH_PATH,
                null
            );
        }
    }
);