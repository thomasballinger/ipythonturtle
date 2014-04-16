"""Logging functionality like this should be grafted on to normal turtle
methods, so that turtles still know their internal state at all times."""
import uuid
import json

from IPython.display import display_javascript, display_html


class MockMethod(object):

    def __init__(self, name, turtle):
        self.turtle = turtle
        self.name = name

    def __call__(self, *args, **kwargs):
        self.turtle.log(self.name, args, kwargs)


class Turtle(object):

    def __init__(self):
        self._log = []
        self.last_executed = None

    def __getattr__(self, attr):
        return MockMethod(attr, self)

    def log(self, *args, **kwargs):
        self._log.append([args, kwargs])

    def render(self):
        if self.last_executed is not None:
            already_run = self._log[:self.last_executed]
            to_run = self._log[self.last_executed:]
        else:
            already_run = []
            to_run = self._log[:]
        self.last_executed = len(self._log)
        return Render(already_run, to_run)


class Render(object):

    def __init__(self, already_run, to_run):
        self.already_run = already_run
        self.to_run = to_run
        self.uuid = uuid.uuid4()

    #def __repr__(self):
    #    return ('Render Instructions:\n'+repr(self.already_run)
    #           + repr(self.to_run))
    #def _repr_javascript_(self):
    #    return 'alert("hi!");'

    def _ipython_display_(self):
        json_already = json.dumps(self.already_run)
        json_to_run = json.dumps(self.to_run)
        display_html(
            '<div id="{}" style="height: 300px; width:80%;"'
            'data-already-run="{}" '
            'data-to-run="{}"></div>'.format(self.uuid, json_already,
                                             json_to_run),
            raw=True)
        display_javascript('window.turtle("{}");'.format(self.uuid),
                           raw=True)


if __name__ == '__main__':
    t = Turtle()
    t.do_thing(1, 2, x=123)
    t.do_another_thing(1, 2, x=123)
    print(t.render())
    t.fd(10)
    print(t.render())
