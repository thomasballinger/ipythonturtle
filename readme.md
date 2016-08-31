Turtle graphics in IPython notebook.

Based on the work of https://github.com/macewanCMPT395/aspidites

Outdated! This was a protype built during PyCon 2014 Sprints at the suggestion
of Greg Wilson to make the turtle module work better with IPython. It was
never completed. The goal was to factor out some of the work in Aspidites into
a new repo.


Installation
------------

Automatic
* Run ''''python deploy.py'''
* Run '''ipython notebook --profile=turtle'''

Manual
* Create a new IPython profile called turtle.
* Copy turtle.js and turtle.css in the profile directory
* (~/.ipython/profile_turtle/static/custom/ by default).
* Add "require(['/static/custom/turtle.js'])" to the custom.js file.
* Run '''ipython notebook --profile=turtle'''.



The Turtle Protocol
-------------------

Just brainstorming for now.

A new turtle context always begins with nothing.
