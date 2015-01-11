UdaciFeeds Testing Project
==================
#####Udacity FE Web Developer Nanodegree - Project 6#####
---
In this project, I developed a Jasmine script that runs various tests against the UdaciFeeds application, to ensure that it is behaving as designed. The Jasmine script is named feedreader.js and can be found in the jasmine -> spec folder.

Contents
--------

1. [How to Run / Test](#chapter-1)  
2. [Test Suites](#chapter-2)  
3. [Resources Used](#chapter-3)    

How to Run / Test <a id="chapter-1"></a>
-----------------
First, download the GitHub ZIP to your desktop and extract it.  

Run index.html in your favorite browser. At the bottom of the screen, you'll see the various Jasmine test suites (and the results of those tests) displayed:  

![Jasmine Results Screenshot](https://github.com/vincemaling/FE-Web-Dev-Nano-P6/blob/master/screenshot/jasmine%20ss.png)  

To fiddle with the results of these tests, you can access the js -> app.js file and make changes to one or more variables or functions that are test. See [Test Suites](#chapter-2) for more details.

Test Suites <a id="chapter-2"></a>
----------
<dl><dt>(1) RSS Feeds</dt>
<dd>The RSS Feeds test suite includes three tests/specs:  
- *are defined*: ensure that the allFeeds object has at least one feed in it
- *each have a URL*: ensures that each feed in the allFeeds object has a URL defined, and that URL is not empty
- *each have a name*: ensures that each feed in the allFeeds object has a name defined, and that name is not empty
</dd>

<dt>(2) The menu</dt>
<dd>The menu test suite includes two tests/specs:  
- *is hidden by default*: checks to be sure the menu id hidden at launch
- *shows when clicked and hides when clicked again*: executes click events and ensures that the menu shows and hides accordingly
</dd>

<dt>(3) Initial Entries</dt>
<dd>The Initial Entries test suite includes one test/spec  
- *are available for use*: ensures there is at least one entry in the initial feed to display
</dd>

<dt>(4) New Feed Selection</dt>
<dd>The New Feed Selection test suite includes two tests/specs:  
- *takes old content*: ensures existing feed content exists prior to changing the selected feed
- *and exchanges it for new content*: ensures that after a new feed ios selected, the content displayed is different than the content for the previously selected feed
</dd>  

Note that the tests/specs in both the Initial Entries and the New Feed Selection suites realy on asynchronous functions (i.e. content is loaded asynchronously from Google, and therefore the tests must be run asynchronously). 

Resources Used <a id="chapter-3"></a>
---------
<dl><dt>Jasmine Documentation</dt>
<dd>For the bulk of the project, I simply referred to [Jasmine's documentation] (http://jasmine.github.io/2.0/introduction.html)</dd>  

<dt>HTML Goodies</dt>
<dd>The following article at HTML Goodies helped me wrap my mind around using Jasmine's asynchronous functionality (i.e. done() function with beforeEach): [HTML Goodies: Jasmine Async] (http://www.htmlgoodies.com/beyond/javascript/stips/using-jasmine-2.0s-new-done-function-to-test-asynchronous-processes.html)</dd>

