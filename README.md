### Note: this repo was setup using https://medium.com/@induwara99/a-step-by-step-guide-to-setting-up-a-node-js-project-with-typescript-6df4481cb335 as an example

# Setup
## install Microsoft Visual Studio Code
    - go to https://code.visualstudio.com/download
    - download installer for Windows
    - execute the installer and follow the instructions
## install nvm (node version manager)
    - go to https://github.com/coreybutler/nvm-windows/releases
    - download nvm-setup.zip and nvm-setup.zip.checksum.txt
    - verify the checksum
        -- execute
        ```powershell
        PS ~\Downloads\nvm> $actualChecksum = (Get-FileHash -Path .\nvm-setup.zip -Algorithm MD5).Hash
        PS ~\Downloads\nvm> $expectedChecksum = cat .\nvm-setup.zip.checksum.txt
        PS ~\Downloads\nvm> $actualChecksum -eq $expectedChecksum
        ```
        -- the output should be `True`
    - unzip the installer
    - execute the installer
## install NodeJS
    - run PowerShell as Administrator
    - execute `nvm install 20`
        -- this will install Node version 20
    - execute `nvm use 20`
        -- this will tell nvm to make the computer use the version of NodeJS you just installed
## create a GitHub account
    - go to https://github.com/
    - sign up for a free account with your email address
        -- ensure Dad gets your username and password so he can save them in case you forget them later
## install git for Windows
    - go to https://git-scm.com/download/win
    - download the standalone installer for 64 bit Windows
    - execute the installer and follow the instructions
## install GitExtensions for Windows
    - go to https://gitextensions.github.io/
    - download the installer
    - follow the instructions
        -- have Dad there with you the whole time.  Some of this installer can be confusing!!
    - open it
        -- it will tell you if there is anything else to do.  fix all the problems
        -- set the diff tool to vscode
        -- you may need to update git.  if you do, open a PowerShell window and execute `git update-git-for-windows`
## clone this repo
    - URL to be determined
## run the tests to verify it works
    - execute `npm test`


