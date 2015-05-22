Hello Selenium
==============

Simple example demonstrating docker container running Firefox & Chrome with selenium.

Setup
-----

    docker run --privileged -p 4444:4444 -p 5999:5999 -d vvoyer/docker-selenium-firefox-chrome
    npm i

Run
---

    # open vnc viewer & connect to docker container
    node detect_browser.js
