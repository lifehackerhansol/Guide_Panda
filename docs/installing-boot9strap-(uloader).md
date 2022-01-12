# Installing boot9strap (uloader)

## Required Reading

uloader is a CIA wrapper for [universal-otherapp](https://github.com/TuxSH/universal-otherapp) which is compatible with all 3DS system versions.

## What You Need

* The latest release of [uloader](https://github.com/zoogie/uloader/releases) *(the `.cia` file)*
* The latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/latest)
* The latest release of [boot9strap for devkit](https://github.com/SciresM/boot9strap/releases/download/1.3/boot9strap-1.3-devkit.zip)
* The latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest)

## Instructions

### Section I - Prep Work

1. Power off your console
1. Insert your SD card into your computer
1. Copy `uloader.cia` to the root of your SD card
    + The root of the SD card refers to the initial directory on your SD card where you can see the Nintendo 3DS folder, but are not inside of it
1. Copy everything from the Luma3DS `.zip` to the root of your SD card
1. Create a folder named `boot9strap` on the root of your SD card
1. Copy `boot9strap_dev.firm` and `boot9strap_dev.firm.sha` from the boot9strap `.zip` to the `/boot9strap/` folder on your SD card
1. Copy `SafeB9SInstaller.bin` from the SafeB9SInstaller `.zip` to the root of your SD card
1. Reinsert your SD card into your console
1. Power on your console

### Section II - Launching SafeB9SInstaller

1. Launch the DevMenu application
1. Press (D-Pad Right) until `SDMC` is highlighted
1. Scroll to `uloader.cia`, then press (A) to select it.
1. Press (A) to confirm installation
1. After installing, press the HOME button to return to your HOME menu
1. Launch the uloader application
1. If the exploit was successful, you will have booted into SafeB9SInstaller

### Section III - Installing boot9strap

In this section, you will install custom firmware onto your console.

1. When prompted, input the key combo given on the top screen to install boot9strap
    + If a step on the lower screen has red-colored text, and you are not prompted to input a key combo, [follow this troubleshooting guide](troubleshooting#issues-with-safeb9sinstaller)
1. Once it is complete, press (A) to reboot your console
<!--@include: ./_include/configure-luma3ds.md -->

<!--@include: ./_include/luma3ds-installed-note.md -->

___

::: tip

Continue to [Finalizing Setup](finalizing-setup)

:::
