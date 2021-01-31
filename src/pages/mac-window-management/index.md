---
title: Mac Window management with Amethyst
date: "2021-01-31"
spoiler: Controlling my mac window positions and tiling.
---

Having clean desktops on my mac increases my productivity. Indeed, I am pleased to see all my windows well organized on my screen:

- no information hides in some app that is behind another;
- I focus on what windows are important to my task;

Looking for a window on another screen or another desktop is a waste.

# Organize your desktops

## Use 5 desktops (at most)

I use 5 desktops on my mac book:

- 1st: my chats - whatsapp, slack, teams
- 2nd: internet browser - chrome
- 3rd: my IDE
- 4th: debugging tools
- 5th: my other desktop for more debugging

Why ?

- Manage stuff, organize, plan, collaborate: I switch between the 1st and 2nd desktops.
- Code: I switch between internet (browsing docs and GitHub) and my IDE.
- Debug: I switch between 3rd and 4th or 5th desktop.

Each desktop is next to a relevant neighbor.

## Stop your mac book from rearranging desktops

On a mac book, as you might know, you can use virtual desktops. Desktops reorganize when you switch to some application. Magically. The most recent app's desktop goes next to the previous one.
To disable this horrible default setting, either:

- open your settings > mission control > untick Automatically rearrange Spaces based on most recent use.
- run `defaults write com.apple.dock mru-spaces -bool false` in a terminal

## Do NOT use fullscreen mode

Clicking on the green button on a window makes it fullscreen. Fullscreen lets you focus on one window only. Perhaps two if you use Side-by-side views. However, this has two cons:

- setting fullscreen side-by-side view is time-consuming;
- it moves the fullscreen desktop at the right end of the desktops, breaking your organization.

# Organize your windows with Amethyst

Amethyst is [available on Github](https://github.com/ianyh/Amethyst).

## Why Ametyst and not Spectable or other window manager ?

Amethyst is the quickest way to bring the layout I have in mind to life.

Spectacle or other window manager offer window positionning.
Amethyst offers window layout.

Spectacle is like positioning all HTML divs in absolute mode.
Amethyst is like tiling elements in flex mode.

## How to use Amethyst ?

You just need 5 shortcuts to become a window ninja.

- A window has two states: float or tile.
  - Toggle float for focused window with `option+shit+t`
- A desktop can have several layouts but you only need two:
  - Select tall layout with `option+shit+a`
  - Select fullscreen layout with `option+shit+d`
- The tall layout has a main pane that can be resized:
  - Expand the main pane with `option+shift+l`
  - Decrease the main pane with `option+shift+h`

Thats's all ! You are ready to be in control of your mac windows.
