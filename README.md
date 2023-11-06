# CSGO Automatic Daily Claimer
![CSGO Logo](https://example.com/csgo-logo.png) <!-- Add a CSGO logo image here -->

Automate your daily claiming on a CSGO website with ease. This TypeScript script supports multiple accounts and uses cookies for authentication.

## How to Use
1. **Clone or Download**:
   - First, clone this repository or download the ZIP file.

2. **Get Cookies**:
   - Run `getCookies.js` to authenticate yourself on the website.
     - The script will close itself if you're too slow.
     - Cookies will be saved in the `./data/cookies1.json` file by default.
     - For additional accounts, create new files (e.g., `./data/cookies2.json`).

3. **Configure Cookies**:
   - In `main.js`, add your cookie files to the `cookieFiles` list:
     ```javascript
     const cookieFiles = [
       'C:/Users/your-user-name/Documents/HellCaseBot/data/cookies1.json',
       'C:/Users/your-user-name/Documents/HellCaseBot/data/cookies2.json'
     ];
     ```
     - You can add more as needed.

4. **Run the Script**:
   - Execute `main.js`, and if everything is set up correctly, check the `log.txt` file for successful claims.

5. **Automation (Windows)**:
   - To fully automate the process on Windows, set up a scheduled task with the Windows Task Scheduler.
     - Schedule it to run every 24 hours (consider adding a few extra minutes as a buffer).

   ![Task Scheduler](https://example.com/task-scheduler-icon.png) <!-- Add a Task Scheduler icon image here -->

   Your CSGO daily claiming is now automated! Enjoy.

## Icons
You can use icons to make your README more visually appealing. You can find free icons on websites like [FontAwesome](https://fontawesome.com/). For example, the CSGO logo and Task Scheduler icon can be replaced with actual icons.

Remember to replace the image links (`https://example.com/...`) with actual image URLs or upload the images to your repository.

<!-- You can also add a "Download ZIP" button here -->
[![Download ZIP](https://example.com/download-zip-button.png)](https://github.com/your-username/your-repo/archive/main.zip)
