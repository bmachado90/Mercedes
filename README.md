# Mercedes

Step 1) Intall dependencies and Cypress

  1. intall npm , run "npm install"
  2.Install Cypress via npm:
     cd /your/project/path
     run: npm install cypress@9.7.0 --save -dev
  
  3 Installing Cypress via yarn:
     cd /your/project/path
     run: yarn add cypress@9.7.0 --dev
     
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
       