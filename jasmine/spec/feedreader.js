/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('each have a URL', function() {              // Describe the spec's intention
            allFeeds.forEach(function (feeditem) {      // Loop through the allFeeds object
              expect(feeditem.url).toBeDefined();       // Check that for each feed, a url is defined
              expect(feeditem.url).toBeTruthy();        // Check that for each feed, the url is not empty
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each have a name', function() {             // Describe the spec's intention
            allFeeds.forEach(function (feeditem) {      // Loop through the allFeeds object
              expect(feeditem.name).toBeDefined();      // Check that for each feed, a name is defined
              expect(feeditem.name).toBeTruthy();       // Check that for each feed, the name is not empty
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {   

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */        
        
        it('is hidden by default', function() {                                     // Describe the spec's intention
            expect($('body').hasClass('menu-hidden')).toBeTruthy();                 // Check to see if <body> has the "menu-hidden" class
        });     

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
        it('shows when clicked and hides when clicked again', function() {          // Describe the spec's intention
            $('.menu-icon-link').click();                                           // Execute an initial click on the menu icon
            expect($('body').hasClass('menu-hidden')).not.toBeTruthy();             // Ensure that the "menu-hidden" class was removed from <body>
            $('.menu-icon-link').click();                                           // Execute a second click on the menu icon
            expect($('body').hasClass('menu-hidden')).toBeTruthy();                 // Ensure that the "menu-hidden" class was added back to <body>
        }); 

        
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        
        beforeEach(function(done) {                                 // Define the beforeEach function
          loadFeed(0, function () {                                 // Load the initial feed (0) with Jasmine's "done()" callback to handle asynchronicity
              done();
            });
        });
        
        it("are available for use", function() {                      // Describe the spec's intention
          expect($('.entry').length).toBeGreaterThan(0);            // Ensure that at least one .entry div exists after the loadFeed(0) function is complete
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
 
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        
        var currentFeed = -1;                                       // Sets "currentFeed" equal to the initial feed value minus one
        var feedDetails = [];                                       // Creates an empty array to store feed content in
        
        beforeEach(function(done) {                                 // Define the beforeEach function
          currentFeed++;                                            // Increment the currentFeed variable, so that one feed can be compared to the previous one
          loadFeed(currentFeed, function () {                                 
              done();
            });
        });
        
        it("takes old content", function() {                  // This test ensures there is initial content (against which we will compare the new content)
          feedDetails[currentFeed] = $('.entry:first').html();      // Grab the HTML content of the initial feed's first entry
          expect(feedDetails[currentFeed]).toBeTruthy();            // Make sure the initial feed's first entry actually has content
        });
        
        it("and exchanges it for new content", function() {                              // Now, let's compare the next feed's content with previous content                    
          feedDetails[currentFeed] = $('.entry:first').html();                          // Grab the HTML content of the new feed's first array
          expect(feedDetails[currentFeed]).not.toEqual(feedDetails[currentFeed - 1]);   // Make sure the HTML content is different than the previous feed's
        });

        
    });
        
}());
