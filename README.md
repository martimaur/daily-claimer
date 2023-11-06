# csgo automatic daily claimer
Simple script I wrote to automate daily claiming in a csgo website. 
This script supports various accounts and makes use of the cookies for authentification.

# How to use?
1) first clone or download the zip file
2) run getCookies.js and add authentificate yourself in the website, (the script will close itself if you are too slow) the script should add your cookies to the data folder to the filename: './data/cookies1.json' by default, if you want to add more cookies simply create a new cookies2 by changing the filename.
3) add all of your cookie files to main.js to the cookie files list like so: const cookieFiles = ['C:/Users/your-user-name/Documents/HellCaseBot/data/cookies.json'] (you may add more as it is a list)
4) run main.js (if all works out, you should see in the file 'log.txt' that all claims were succesfull.

5) in order to automate this completely, if you are on Windows, you will need to set up a windows automated task with the Windows Task Scheduler and set it to run every 24h, i would recommend adding a little bit more time like 24h and 5 minutes (sometimes the program will take longer to run).
   

