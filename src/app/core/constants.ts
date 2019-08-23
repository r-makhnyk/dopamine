import { Language } from "./language";
import { ColorTheme } from "./colorTheme";

export class Constants {
    static readonly applicationName: string = require("../../../package.json").name;
    static readonly applicationVersion: string = require("../../../package.json").version;
    static readonly applicationCopyright: string = "Copyright Digimezzo Ⓒ 2014 - 2019";
    static readonly donateUrl = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MQALEWTEZ7HX8";
    static readonly websiteUrl = "https://www.digimezzo.com";
    static readonly twitterUrl = "https://twitter.com/digimezzo";
    static readonly githubUrl = "https://github.com/digimezzo";

    static readonly themeChangedEvent: string = "f132f4ce-ae3c-4e1d-958a-a9cd28517b68";

    static readonly languages: Language[] = [
        { code: "en", name: "English" },
        { code: "fr", name: "Français" }
    ];

    static readonly colorThemes: ColorTheme[] = [
        { name: "default-blue-theme", displayName: "Default blue", color: "#1D7DD4" },
    ];
}