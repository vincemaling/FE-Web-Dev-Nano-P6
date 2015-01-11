Neighborhood Maps Project
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

![Desktop Screenshot](https://github.com/vincemaling/FE-Web-Dev-Nano-P5/blob/master/images/screenshot%20-%20desktop%20-%20small.png) 

Test Suites <a id="chapter-2"></a>
----------
<dl><dt>(1) Neighborhood Selector</dt>
<dd>I designed the application so that multiple neighborhoods could be loaded and (theoretically) added and removed. By default, three neighborhoods are included: Lindbergh (Atlanta), Shaker Heights (Cleveland), and Cabbagetown (Atlanta). On the desktop version of the application, you can select your neighborhood using the tabs in the top-left. On the mobile version, tapping the neighborhood name drops down a list of neighborhoods to select from.<dd>  

<dt>(2) Weather Widget</dt>
<dd>The Weather Widget displays a snapshot of the current weather conditions in the neighborhood you have selected. In the desktop version of the application, you can hover over the widget with your mouse for additional details. The Weather Widget uses the Open Weather API.</dd>  

<dt>(3) Dynamic Yelp! Search</dt>
<dd>The applications will begin to conduct searches against Yelp's database as soon as you start typing. As you type, results will be displayed both in the search result list view, and on the map. Note that in the mobile version of the application, you'll need to use the menu icons in the top-right to toggle between map view and search list view (see #8 below).</dd>

<dt>(4) Search List View (Desktop)</dt>
<dd>As search results populate, they will appear in the search list view on the left-hand side of your screen. The list view includes location names, a Yelp rating, and a typical user review. When you click on an item in the search list view, the map will pan to its location and additional data will be displayed.</dd>

Resources Used <a id="chapter-3"></a>
---------
<dl><dt>Google Maps API</dt>
<dd>I used the Google Maps API to create the map that serves as the primary application view in both the desktop and mobile version of the application. I wrote custom Knockout JS binding handlers that link the markers on the map (both search results and favorites) to observable arrays.</dd>  

<dt>Yelp! API</dt>
<dd>Of all the business search APIs I researched, Yelp was my favorite. The Yelp Development Guide recommends creating a server-side script (e.g. in PHP) to handle AJAX calls rather than making calls directly from Javascript, so I wrote a PHP script that the application calls (see the PHP folder in this Github project). I used the Yelp API to retrieve rating, review, and location information about businesses.</dd>

