Turtle graphics in IPython notebook.

Based on the work of https://github.com/macewanCMPT395/aspidites


Installation
------------

Automatic
* Run ''''python deploy.py'''
* Run '''ipython notebook --profile=turle'''

Manual
* Create a new IPython profile called turtle.
* Copy turtle.js and turtle.css in the profile directory
* (~/.ipython/profile_turtle/static/custom/ by default).
* Add "require(['/static/custom/turtle.js'])" to the custom.js file.
* Run '''ipython notebook --profile=turle'''.
