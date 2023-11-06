# CSGO Automatic Daily Claimer
![CSGO Logo](https://asset.brandfetch.io/iduOebIV3w/idjVSs_poL.png) <!-- Add a CSGO logo image here -->

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

   ![Task Scheduler]([(https://gigperformer.com/docs/ultimate-guide-to-optimize-windows-for-stage/images/hmfile_hash_bc24a763.png)]) <!-- Add a Task Scheduler icon image here -->

   Your CSGO daily claiming is now automated! Enjoy.

