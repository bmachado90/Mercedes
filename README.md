# Mercedes

Step 1) Install dependencies and Cypress
	
	1. Install npm 
	 1.1) Go to the page https://nodejs.org/en/download/ and download the installer exe or download the MAC version
	 1.2) Follow the download instructions on https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac
	
	2. Option 1) Install Cypress via npm:
     Open a cmd/shell window 
     run: npm install cypress@9.7.0 --save -dev
	
	3. Option 2) Installing Cypress via yarn:
     Open a cmd/shell window
     run: yarn add cypress@9.7.0 --save -dev
     
Step 2) Run the code
    
    cd /your/project/path
    run : npx cypress run
    or run: yarn cypress run
    
Step 3) Run on Multiple browsers
    
    cd /your/project/path
    run : npx cypress run --browser chrome (The "browser" argument can be set to chrome, chromium, edge, electron, firefox to launch a browser detected on your system.)
    or run: yarn cypress run --browser chrome (The "browser" argument can be set to chrome, chromium, edge, electron, firefox to launch a browser detected on your system.)
    
Step 4) By default, Cypress will run tests headlessly during cypress run.
        Passing --headed will force the browser to be shown. This matches how you run any browser via cypress open. 
        
    cd /your/project/path
    run : npx cypress run --headed
    or run: yarn cypress run --headed

