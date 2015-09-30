CRAFT BEER-ZILLA is an app that uses the BreweryDB API to list
craft breweries, along with the beers they sell, their descriptions,
user comments, and ratings.  It will also show any related images
(beer label, brewery logo).

![ScreenShot](http://i.imgur.com/mjYhmXd.png)


Technologies Used:
- AngularJS, single web page app.
- BreweryDB API, for breweries, beers, guilds, descriptions, and images.
- Express
- Node
- Rating-Widget.com
- Facebooks comments
- Facebook Comments
- Twitter Timeline

Approach:

I wanted to see if I could create a Single Page App while consuming an API.
I chose Angular for the SPA, NgRoute to help with API. I used widgets from
Facebook, Twitter, and rating-widget.com to help with the reviews.

Installing:
After forking the repo, run 'NPM INSTALL' to install dependencies.
'Nodemon server.js' in terminal, then 'localhost:3000' in the browser.

USER STORIES
https://trello.com/b/nR2GU9Ed/project-4

ICEBOX FEATURES:
- I would like to add the ability to locate breweries close to my location,
but I need to get the premium API key.
- Would like to add individual beers to breweries.
- Add pages for individual beers / Guilds./
- If no beers exist in the API for a specific brewery, info telling the user
instead of a blank screen.
- I would like individual twitter feeds for each brewery.
- I would like to replace "LA Breweries" with "My Breweries" that users could
FAV their favorite Beers / Breweries.
- Replace Facebook Comment Widget with hard coded comments.
- Replace Star Rating Widget with hard coded version.

PROBLEMS
- Using widgets with Angular.  Half the time they don't load.
- Loading animation doesn't disapear on Brewery Beer page.

