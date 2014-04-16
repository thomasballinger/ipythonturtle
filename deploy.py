"""link to static files from
~/.ipython/profile_default/static/custom/custom.*"""

import os

def main():
    files = ['turtle.js', 'turtle.css']
    for basefn in files:
        link = os.path.expanduser('~/.ipython/profile_default/static/custom/{}'.format(basefn))
        #TODO use ipython to figure out where these go
        orig = os.path.abspath(basefn)
        assert os.path.exists(orig)
        if os.path.lexists(link) and os.path.islink(link):
            os.remove(link)
        assert not os.path.exists(link)
        os.symlink(orig, link)
    customjs = os.path.expanduser('~/.ipython/profile_default/static/custom/custom.js')
    for basefn in files:
        if basefn.endswith('.js'):
            static_link = "require(['/static/custom/{}'])".format(basefn)
            with open(customjs, 'r') as f:
                if static_link not in f.read():
                    with open(customjs, 'a') as f:
                        f.write('\n')
                        f.write(static_link)
                        f.write('\n')
if __name__ == '__main__':
    main()
