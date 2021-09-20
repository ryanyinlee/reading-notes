## Terminal Use Notes
---

Explainshell: https://explainshell.com/

Type in a command and it gives a nice explanation of what it does.

#### The Command Line

Text interface to your system whereby you enter commands via text rather than a GUI.

What you'll typically get is the following:

1) A prompt, where you can enter a command.
2) The results from the command (if any)
3) A new prompt that appears after the results.

#### Opening A Terminal

OS dependent:

- Windows 10 just requires searching for Terminal in the search bar.
- Mac - Applications > Utilities
- Linux - Applications > Utilities **or** Applications > System

#### The Shell, Bash

Within this terminal there will be a shell. This is how the operating system that determines how the terminal will function and is what actually executes the commands you enter.

There are multiple shells, but the most common one is the bash shell, short for "Bourne again shell".

#### Shortcuts

Ongoing shortcut notes:

- You can acces prior commands via the up and down arrows keys, and edit them via the left and right keys.

---

### Basic Navigation
---

Commands for getting around the terminal.

**pwd** Stands for print working directory. This tells you which directory you are in. Ths is important as commands to the terminal can be dependent on your current "location".

**ls** Short for list, this tells you what is currently in the directory you're in. 

This can be run by itself or with modifiers

> ls [options] [location]

-l as an [option]

e.g. 
> ls -l 

This will give you a lot more detail in the results, showing if it's a file or directory, permissions, number of blocks, current owner, the group, file size, date/time modified, the actual name of the directory.

> /etc

Instead of listing directories, it lists the contents of the directories. 

> ls -l /etc

This example, it listed the contents and also gave the more detailed information you get via -l.

##### Paths

A reference to a directory or a file via command line is called a Path.

There are two types of path - absolute or relative.

Linux is organized as a hierarchy, so paths originate from the root (despite it's name, this is the *top*), which is denoted by a single / which branches out into further directories which can also contain files.

*Absolute paths*: This is how you specify a location in relation to the root directory.

e.g. This is the entire address. The combination Pizza Hut and Taco bell is on 123 Main Street, New York, NY 10030

*Relative paths*: Rather than start with the entire address, (e.g. the root), this is a path relative to where you are currently in the system.

e.g. Go to the combination Pizza/Hut down the street. It's two blocks east.

##### Path Additional

> ~ (tilde)
Shortcut for the home directory
> . (single)
Refers to your current directory
> .. (dot dot)
Refers to your parent directory

##### Navigation

In order to move directories we need to use the **cd** comand

> cd [location]

**cd** with no other arguments will take you to the home directory.

---

### About Files
---


---
