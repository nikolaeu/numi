# Numi

[Numi](https://numi.app) is a handy calculator app for macOS. It allows you to describe tasks naturally and instantly get an answer. For example, `$20 in euro - 5% discount` or `today + 2 weeks`.

![](https://numi.app/images/numi-screenshot-yellow.png)

You can use Numi from command line on Linux and macOS or as a desktop app on macOS. The recommended way to install CLI version is using [Homebrew](https://brew.sh/):

`brew install nikolaeu/numi/numi-cli`

Desktop version for macOS version can be downloaded from the [app website](https://numi.app). You can also download the most recent CLI, desktop version and new Alfred extension manually from the [releases](https://github.com/nikolaeu/numi/releases/) page. _Note, there's no need to enable Alfred integration in app preferences with the new workflow (just make sure CLI version has been installed)._

CLI usage example (pass `-h` for more options):

`numi-cli "20 inches in cm"`

Most features of the Numi for macOS are supported in CLI. However, these are the features that **has not yet been implemented in CLI**:

-   Localization support
-   Timezone conversion
-   Dates
-   CSS
-   Variables
-   Tokens (sum, prev, avg)
-   Plugins/extension
