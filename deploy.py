"""link to static files from
~/.ipython/profile_default/static/custom/custom.*"""

import os

def main():
    for basefn in ['turtle.js', 'turtle.css']:
        link = os.path.expanduser('~/.ipython/profile_default/static/custom/{}'.format(basefn))
        #TODO use ipython to figure out where these go
        orig = os.path.abspath(basefn)
        assert os.path.exists(orig)
        if os.path.lexists(link) and os.path.islink(link):
            os.remove(link)
        assert not os.path.exists(link)
        os.symlink(orig, link)

if __name__ == '__main__':
    main()
