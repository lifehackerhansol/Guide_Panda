# Troubleshooting

This page offers troubleshooting advice for commonly encountered issues. If you are unable to solve your issue with the advice on this page, please join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) and describe your issue, including what you have already tried.

::: details Table of Contents

Used on multiple pages:
* [SafeB9SInstaller](#issues-with-safeb9sinstaller)

Guide pages:
* [Finalizing Setup](#finalizing-setup)

Issues after installation:
* [Boot issues](#boot-issues-on-consoles-with-custom-firmware)
* [Software issues](#software-issues-on-consoles-with-custom-firmware)

:::

## Issues with SafeB9SInstaller

### Before opening SafeB9SInstaller

::: details Failed to open SafeB9SInstaller.bin

The file `SafeB9SInstaller.bin` is missing or misplaced. Download the latest release of [SafeB9SInstaller](https://github.com/d0k3/SafeB9SInstaller/releases/download/v0.0.7/SafeB9SInstaller-20170605-122940.zip), extract it, and place `SafeB9SInstaller.bin` on the root of your SD card. Do not add the `.bin` extension if you do not already see it.

:::

### SigHaxed FIRM was not installed! Check lower screen for more info.

::: details MicroSD Card - init failed

Your SD card is most likely acting weird. Try reformatting your SD card ([Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux))). If this doesn't work, try another SD card.

:::

::: details SigHaxed FIRM - File not found

You are missing `boot9strap.firm` and `boot9strap.firm.sha` from the `boot9strap` folder, or the `boot9strap` folder is misnamed. Download the latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), and place `boot9strap.firm` and `boot9strap.firm.sha` in the `boot9strap` folder.

:::

::: details SigHaxed FIRM - invalid FIRM

There is an issue with your `boot9strap.firm` and `boot9strap.firm.sha` files. Re-download the latest release of [boot9strap](https://github.com/SciresM/boot9strap/releases/download/1.4/boot9strap-1.4.zip), and place `boot9strap.firm` and `boot9strap.firm.sha` in the `boot9strap` folder.

:::

::: details Secret Sector - File not found

You are missing `secret_sector.bin` from the `boot9strap` folder, or the `boot9strap` folder is misnamed. Download [secret_sector.bin](magnet:?xt=urn:btih:15a3c97acf17d67af98ae8657cc66820cc58f655&dn=secret_sector.bin&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.loadbt.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.ololosh.space%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.pomf.se%3a80%2fannounce&tr=udp%3a%2f%2ftracker.srv00.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.tiny-vps.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.tracker.cl%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.zerobytes.xyz%3a1337%2fannounce&tr=udp%3a%2f%2ftracker1.bt.moack.co.kr%3a80%2fannounce&tr=udp%3a%2f%2fvibe.sleepyinternetfun.xyz%3a1738%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969%2fannounce&tr=udp%3a%2f%2f9.rarbg.com%3a2810%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=http%3a%2f%2fopenbittorrent.com%3a80%2fannounce) using a torrent client, and place it in the `boot9strap` folder.

:::

::: details Something else

Join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance, and describe the message that you see.

:::

## Finalizing Setup

::: details Unable to update console

The steps below can be attempted in any order, but are listed from easiest to hardest to perform.

1. If you are using Pretendo, switch back to Nintendo with Nimbus and try again
1. Set your DNS settings to "Auto"
1. Move closer to your WiFi router
1. Update from Safe Mode by turning off the console, holding (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A) on boot, and following the on-screen prompts
1. Delete your WiFi connection, then reconnect to your WiFi again
1. Reboot your WiFi router
1. Connect to a different WiFi connection, like a mobile hotspot
1. Nintendo servers may be down; Try again later
1. If you still get an error, [follow CTRTransfer](ctrtransfer), then try again
1. For further support (in English), join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp)

:::

::: details Error #22: finalize.romfs is invalid

The file `finalize.romfs` is corrupt or unreadable. [Re-download it](https://github.com/hacks-guide/finalize/releases/latest/download/finalize.romfs) and copy it to the root of the SD card, replacing any existing copy, then try again.


:::

::: details Information #23: finalize.romfs in wrong location

The file `finalize.romfs` was placed in the wrong location instead of root of SD. The script will attempt to resolve this, but requires your permission to do so. Press (A) on the next few prompts to continue.

:::

::: details Error #24: SD is write-protected

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.


:::


::: details Error #02: Missing essential.exefs

You said 'No' to the "Make essential files backup?" prompt in GodMode9. Power off your console, power it on while holding (Start) to re-enter GodMode9, say 'Yes' to the prompt, then try again.

:::

::: details Error #04: No space

You need at least 1.3GB of free space to perform the NAND backup, which is a part of the script. If you don't have enough space, follow these steps:

1. Power off your console
1. Insert your SD card into your computer
1. Copy the `Nintendo 3DS` folder from the root of your SD card to your computer
1. Delete the Nintendo 3DS folder from the SD card
1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Press the (Home) button
1. Select "Scripts..."
1. Select "finalize"
1. Press (A) to create a NAND backup
    + This may take around fifteen minutes
1. Press (A) again
    + The console should automatically power off
1. Insert your SD card into your computer
1. Copy the files in `/gm9/backups/` on your SD to a safe location on your computer
1. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card
1. Copy the `Nintendo 3DS` folder from your computer to the root of your SD card
1. Delete the `Nintendo 3DS` folder from your computer

Now that you have your NAND backup in a safe place:

1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Press the (Home) button
1. Select "Scripts..."
1. Select "finalize"
1. Continue the script as normal
    + The NAND backup will be automatically skipped

:::

::: details Information #05: No title database

Press (A) to import a title database, unlock SysNAND writing by entering the buttons on-screen, then continue the script as normal.

:::

::: details Error #06 or "Error: Could not open directory" when attempting a NAND backup

Make sure you have at least 1.3GB available in your SD card. If you don't have enough space, follow these steps:
1. Power off your console
1. Insert your SD card into your computer
1. Copy the `Nintendo 3DS` folder from the root of your SD card to your computer
1. Delete the Nintendo 3DS folder from the SD card
1. Reinsert your SD card into your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Perform a [NAND Backup](godmode9-usage#creating-a-nand-backup)
1. Copy the files in `gm9/out` on your SD to a safe location on your computer
1. Delete the `<date>_<serialnumber>_sysnand_##.bin` and `<date>_<serialnumber>_sysnand_##.bin.sha` files from the SD card, keeping essential.exefs in `/gm9/out/`
1. Copy the `Nintendo 3DS` folder from your computer to the root of your SD card
1. Delete the `Nintendo 3DS` folder from your computer

If you have enough space on your SD card, your SD might be corrupted or faulty. Check your SD card for any errors by following the guide according to your computer's operating system: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)).

:::

::: details Error #12: Copy (file).db fail

Ensure that your SD card is not [locked](/images/sdlock.png). If the SD card is not locked and you continue to get this error, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

::: details Information #17: Duplicate NAND backup

The script has detected that the Nintendo 3DS folder is missing AND that you have already made a NAND backup before. If you intend to install homebrew applications, you should do the following:

1. Press (B) to cancel making another NAND backup
1. Hold (R) and press (Start) at the same time to power off your console
1. Copy the contents of `/gm9/backups/` to a safe location on your computer
1. Delete `/gm9/backups/` from your SD card
1. If you moved your Nintendo 3DS folder off of your SD card to get to this point, copy it back to your SD card
    + If you do not have a Nintendo 3DS folder, boot into the HOME Menu at least once with the SD card inserted to automatically generate it
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
1. Press (Home) to bring up the action menu
1. Select "Scripts..."
1. Select "finalize"
1. Follow the prompts in the script, answering any questions that you are asked 

:::

::: details Error #18a/18b: MSET9 detected

You didn't remove MSET9 on the previous page. The script will attempt to remove MSET9 for you; follow the instructions given by the script.

:::

---

## Boot issues on consoles with custom firmware

::: info

The steps detailed here generally assume that your console has a modern custom firmware setup (boot9strap + Luma3DS 8.0 or greater). If your console is running an older homebrew setup (for example, something based on arm9loaderhax or menuhax), you should update your setup before trying these instructions.

:::

### Power/notification light indicators

::: details My console powers off when I try to turn it on, and/or the notification LED shows a color on boot

There is an issue with your `boot.firm` file. If you're running [boot9strap 1.4](https://github.com/SciresM/boot9strap/releases/tag/1.4), your 3DS notification LED may flash a certain color. This color is used to diagnose issues involving your `boot.firm` file on SD card or internal memory. On older versions of boot9strap, the blue light will power off almost immediately when trying to turn on the console.

If the notification LED flashes:

+ **White**: Your 3DS was not able to find `boot.firm` on your SD card or on internal memory.
+ **Magenta**: Your 3DS was not able to find `boot.firm` on your SD card. It was able to find `boot.firm` on internal memory, but the file is corrupted.
+ **Red**: Your 3DS was able to find `boot.firm` on both your SD card and on internal memory, but both files are corrupted.

You can get a new `boot.firm` file by downloading the [latest release of Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extracting it, and placing `boot.firm` on the root of your SD card. If your `boot.firm` file is consistently being detected as corrupted, you may want to check your SD card for errors ([Windows](h2testw-(windows)), [Linux](f3-(linux)), or [macOS](f3xswift-(mac))). Also, note that the 3DS tends to have issues with files extracted using WinRAR.

If you hear a "popping sound", potentially accompanied with the backlight turning on for a split second, there is a hardware issue with your console (such as a disconnected backlight cable). You may be able to get your console to boot by holding it at certain angles.

:::

::: details My console gets stuck on a black screen with blue power light staying on

The steps below can be attempted in any order, but are listed from least to most time-consuming.

1. Power off your console, remove the SD card, re-insert it, then power on your console.
1. Power off your console, eject the game cartridge if inserted, power on your console, then wait up to ten minutes. If your console boots within ten minutes, the issue has been fixed and is unlikely to reoccur
1. Rename the `Nintendo 3DS` folder on your SD card to `Nintendo 3DS_BACKUP`, then attempt to boot. If your console successfully boots, there is some issue within your `Nintendo 3DS` folder. Try clearing HOME Menu extdata:
    + Navigate to `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/`
    + Delete the corresponding folder for your 3DS region:
        + **EUR Region**: `00000098`
        + **JPN Region**: `00000082`
        + **USA Region**: `0000008f`
        + **CHN Region**: `000000A1`
        + **KOR Region**: `000000A9`
        + **TWN Region**: `000000B1`
1. Try booting into recovery mode and updating your system:
    + Power off your console
    + Hold (Left Shoulder) + (Right Shoulder) + (D-Pad Up) + (A)
    + Power on your console
    + If you were successful, the console will boot to an "update your system" screen
1. Follow the [CTRTransfer](ctrtransfer) guide
1. For further support, ask for help at [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp)

:::

### Error message on boot

::: details "An error has occurred: Failed to apply 1 FIRM patch(es)" or "An exception has occurred -- Current process: pm"

Your Luma3DS version is outdated. Download the latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest) and place `boot.firm` on the root of your SD card, replacing any existing file. Make sure you are extracting the ZIP file with any tool other than WinRAR, as it is known to cause issues with 3DS-related files.

:::

::: details "Unable to mount CTRNAND or load the CTRNAND FIRM. Please use an external one."

There are a number of reasons as to why this could be happening. In any case, this error can usually be fixed by following the [CTRTransfer](ctrtransfer) guide.

:::

::: details "An error has occurred. Hold down the POWER button to turn off the power..."

ARM11 exception handlers are disabled, or custom firmware is not installed. Try enabling ARM11 exception handlers:
+ Power off your console
+ Hold (Select)
+ Power on your console, while still holding (Select)
+ If the "Disable ARM11 exception handlers" box is checked, uncheck it

:::

::: details HOME Menu is missing installed applications

This could be caused by various reasons, but most likely because your SD card is not being read by the system.
You can check if your SD is being read by holding SELECT on boot and checking the yellow text on the bottom screen; if it says "Booted from CTRNAND via B9S", then your console is booting from the internal memory and not from the SD card.
If this is the case, attempt the steps below, which are listed from easiest to hardest:
1. Power off your console, remove the SD card, re-insert it, then power on your console
1. Power off your console, remove the SD card, insert it on your computer, download the latest release of [Luma3DS](https://github.com/LumaTeam/Luma3DS/releases/latest), extract `boot.firm` from the `Luma3DS.zip` and place it on the root of your SD card (replacing any existing file)
1. Power off your console, remove the SD card, insert it on your computer and reformat your SD card according to your computer's operating system: [Windows](formatting-sd-(windows)), [macOS](formatting-sd-(mac)), [Linux](formatting-sd-(linux)) *(this will wipe your SD card data)*
1. Test your SD card for errors by following the guide according to your computer's operating system: [Windows](h2testw-(windows)), [Linux](f3-(linux)), [macOS](f3xswift-(mac)). If your SD card is marked as faulty, then you will have to replace your SD card
1. Your SD card slot may be broken. Join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for further assistance

:::

::: details Blue "BOOTROM ERROR" screen

Your console is likely hard-bricked. You will need to buy an ntrboot flashcart to reinstall boot9strap in order to attempt to fix your console. This may also indicate a hardware issue that cannot be fixed. In any case, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.
    + It is also possible that someone has set a boot-time splash screen that just looks like a brick. Try leaving your console powered on, waiting on the blue screen, for five minutes.

:::

::: details Some other error

Please take a photo of the error and join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for assistance.

:::

## Software issues on consoles with custom firmware

::: details DSi / DS functionality is broken or has been replaced with Flipnote Studio

1. Download the latest release of [TWLFix-CFW](https://github.com/MechanicalDragon0687/TWLFix-CFW/releases/latest) (the `.3dsx` file)
1. Power off your console
1. Create a folder named `3ds` on the root of your SD card if it does not already exist
1. Copy `TWLFix-CFW.3dsx` to the `/3ds/` folder on your SD card
1. Reinsert your SD card into your console
1. Open the Homebrew Launcher
1. Launch TWLFix-CFW from the list of homebrew
1. Press (A) to uninstall the broken TWL titles
1. Press (Start) to reboot the console
1. Update your console by going to System Settings, then "Other Settings", then going all the way to the right and using "System Update"
    + The update will see that the essential TWL titles have been uninstalled, and will redownload and reinstall them
1. Once the update is complete, tap "OK" to reboot the console

:::

::: details GBA Virtual Console and/or Safe Mode functionality is broken

Your console is running Luma3DS 6.6 or older, likely via arm9loaderhax. You should follow [A9LH to B9S](a9lh-to-b9s) to update your console to a modern custom firmware environment.

:::

::: details Extended memory mode games (Pokemon Sun/Moon, Smash, etc.) don't work

This can occur after a CTRTransfer or region change on Old 3DS / 2DS. Follow the instructions [here](region-changing#section-vi---fixing-locale-related-issues) to fix this issue (skipping steps 3, 4, 5, and 6).

:::

::: details Exception screen when booting/loading an application

Look for your exception screen in [this page](https://wiki.hacks.guide/wiki/3DS:Error_screens/Luma3DS_exception_screen).
If you weren't able to find your error or the instructions didn't work, join [Nintendo Homebrew on Discord](https://discord.gg/MWxPgEp) for further assistance.

:::

::: details Opening the HOME Menu settings crashes the console or loads the Homebrew Launcher

Your console likely still has menuhax67 installed. To uninstall menuhax67, download the latest release of [menuhax67](https://github.com/zoogie/menuhax67/releases/latest) (the menuhax `.zip`), then follow the ["Uninstall menuhax67" section](https://wiki.hacks.guide/wiki/3DS:Alternate_Exploits/menuhax67#Uninstall_menuhax67) here.

:::

---

## Other troubleshooting

::: details Clear HOME Menu extdata

1. Power off your console
1. Insert your SD card into your computer
1. Navigate to the `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` folder on your SD card
1. Delete the corresponding folder for your 3DS region:
    + **EUR Region**: `00000098`
    + **JPN Region**: `00000082`
    + **USA Region**: `0000008f`
    + **CHN Region**: `000000A1`
    + **KOR Region**: `000000A9`
    + **TWN Region**: `000000B1`
1. Reinsert your SD card into your console

:::

::: details Clear HOME Menu theme data

1. Power off your console
1. Insert your SD card into your computer
1. Navigate to the `/Nintendo 3DS/<ID0>/<ID1>/extdata/00000000/` folder on your SD card
1. Delete the corresponding folder for your 3DS region:
    + **EUR Region**: `000002ce`
    + **JPN Region**: `000002cc`
    + **USA Region**: `000002cd`
    + **KOR Region**: `000002cf`
1. Reinsert your SD card into your console

:::

::: details Manually entering Homebrew Launcher

If you are missing the Homebrew Launcher application from your HOME Menu, you can follow these instructions to manually enter the Homebrew Launcher. (You will need [boot.3dsx and boot.firm](https://github.com/LumaTeam/Luma3DS/releases/latest) on the root of your SD card.)

<!--@include: ./_include/launch-hbl-dlp.md -->

:::

::: details Turning off Parental Controls

You can disable the Parental Controls feature by going to System Settings -> Parental Controls and inserting the PIN, then pressing "Clear Settings", then "Delete" to remove it.
However, if you do not know the PIN and therefore cannot access the console's settings, you will need to disable it. In order to do this, you need to obtain your console's master key (mkey):
1. Go to [this website](https://mkey.eiphax.tech/)
1. Fill the following boxes with the information:
    + Device Type: Select "3DS" (the same applies if you are using a 2DS, New 3DS (XL/LL) or New 2DS (XL/LL))
    + System Date: The day and month your console's clock is set to
    + Inquiry Number: Can be obtained by pressing "Forgot PIN" then "I Forgot" in the Parental Controls screen
1. After you have obtained your mkey, press OK on the screen you have obtained your Inquiry Number, then input the master key
1. Press "Clear Settings", then "Delete" to remove all Parental Controls data

:::
