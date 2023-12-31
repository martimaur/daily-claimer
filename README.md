# Automatic Daily Claimer Bot

[![Github All Releases](https://img.shields.io/github/downloads/martimaur/daily-claimer/total.svg)]()

<div align="center">
  <img src="https://asset.brandfetch.io/iduOebIV3w/idjVSs_poL.png" width="100" height="100">
  <img src="https://github.com/martimaur/daily-claimer/assets/149742293/f924e958-aac8-4733-8ffb-da45f8b0e3a0" width="100" height="100">
</div>
<!-- Add a CSGO logo image here -->

Automate your daily claiming on a CSGO/CS2 website with ease. This JavaScript script uses Puppeteer and supports multiple accounts as it uses cookies for authentication.

## Disclaimer

Before proceeding with this project, please ensure that you have the correct Node.js version (18.16.0) installed on your system. To check if you have the correct version, open your terminal or command prompt and run the following command:

```sh
node -v
```
- If the output displays `v18.16.0`, you have the correct version installed. Make sure you get it before trying to run the code.

## How to Use

Getting Started

1. **Clone or Download**:
   - First, you can clone this repository or download the ZIP file.
   - You can also download the latest release as a zip file [here](https://github.com/martimaur/daily-claimer/releases/download/v1.0.0/HellCaseBot_firstRelease.zip). (the release zip file contains dependencies already so use it if you can't get the commands below to work:

2. **Get the necessary dependencies**:
   - Before you can run main.js, you need to make sure that you have installed the project's dependencies. Here's how to do it:
    
    1. **Navigate to the Project Directory**:
       - Change your working directory to the project's root folder.
    
       `cd daily-claimer`
    
    3. **Install Dependencies**:
     - Run the following command to install the project's dependencies using the package manager specified in the project (usually npm or yarn).
    
       `npm install`
       **or**
       `yarn install`
    
       This will read the dependencies from the package.json file and install them in the node_modules directory.

That's it! You should now have the project dependencies installed and be able to run main.js without any issues.
  
3. **Get Cookies**:
   - Run `getCookies.js` to authenticate yourself on the website.
   - ```sh
     node getCookies.js
     ```
     - The script will close itself if you're too slow.
     - Once correctly logged in, cookies will be saved in the `./data/cookies1.json` file by default.
     - For additional accounts, create new files (e.g., `./data/cookies2.json`).

4. **Configure Cookies**:
   - In `main.js`, add your cookie files to the `cookieFiles` list:
     ```javascript
     const cookieFiles = [
       'C:/Users/your-user-name/Documents/HellCaseBot/data/cookies1.json',
       'C:/Users/your-user-name/Documents/HellCaseBot/data/cookies2.json'
     ];
     ```
     - You can add more as needed.

5. **Run the Script**:
   - Execute `main.js`, and if everything is set up correctly, check the `log.txt` file for successful claims.
     ```sh
     node main.js
     ```

6. **Automation (Windows)**:
   - To fully automate the process on Windows, set up a scheduled task with the Windows Task Scheduler.
     - Schedule it to run every 24 hours (consider adding a few extra minutes as a buffer).

   [Task Scheduler](https://learn.microsoft.com/en-us/windows/win32/taskschd/task-scheduler-start-page)

   Your CSGO daily claiming is now automated! Enjoy.

