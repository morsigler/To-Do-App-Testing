# To-Do-App-Testing
## Project requirements
1. Verify node.js installed (on cmd/terminal run node -v). If not, install node.js latest version (https://nodejs.org/en/download)
2. **Optional** - If you want to edit or write new tests download and install visual studio code latest version (https://code.visualstudio.com/download). For run purpose only there is no need in IDE.
3. Clone this repo to your local directory.
4. If using VS code:
          - Open new terminal in VS code
   If **not** using VS code:
          - Open cmd/terminal and navigate to your local directory where the project is cloned
6. Run ```npm install --save-dev typescript``` (You may need to restart VS code after installation)
7. Run ```npm install cypress```

## How to run tests
1. From cmd/termial/VS code terminal > run ```npx cypress open```
2. Cypress window should open > Click E2E testing
3. Choose chrome > click start testing
4. Cypress window should be opened with specs files
5. Click on any spec file you would like to run
