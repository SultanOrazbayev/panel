import argparse

from bokeh.command.subcommand import Argument, Subcommand

from ..io.convert import convert_apps


class Convert(Subcommand):
    ''' Subcommand to convert Panel application to some build target, e.g. pyodide or pyscript.

    '''

    #: name for this subcommand
    name = "convert"

    help = "Convert a Panel App to another format, e.g. a HTML file."

    args = (
        ('files', Argument(
            metavar = 'DIRECTORY-OR-SCRIPT',
            nargs   = '*',
            help    = "The app directories or scripts to serve (serve empty document if not specified)",
            default = None,
        )),
        ('--to', dict(
            action  = 'store',
            type    = str,
            help    = "The format to convert to.",
            default = 'pyodide'
        )),
        ('--out', dict(
            action  = 'store',
            type    = str,
            help    = "The directory to write the file to.",
        )),
        ('--title', dict(
            action  = 'store',
            type    = str,
            help    = "A custom title for the application(s).",
        )),
        ('--skip-embed', dict(
            action  = 'store_true',
            help    = "Whether to skip embedding pre-rendered contennt in the converted file to display content while app is loading.",
        )),
        ('--index', dict(
            action  = 'store_true',
            help    = "Whether to create an index if multiple files are served.",
        )),
        ('--pwa', dict(
            action  = 'store_true',
            help    = "Whether to add files to serve applications as a Progressive Web App.",
        )),
        ('--requirements', dict(
            nargs='+',
            help=("Explicit requirements to add to the converted file.")
        )),
        ('--num-procs', dict(
            action  = 'store',
            type    = int,
            default = 1,
            help    = "The number of processes to start in parallel to convert the apps."
        )),
    )

    _targets = ('pyscript', 'pyodide', 'pyodide-worker')

    def invoke(self, args: argparse.Namespace) -> None:
        runtime = args.to.lower()
        if runtime not in self._targets:
            raise ValueError(f'Supported conversion targets include: {self._targets!r}')
        requirements = args.requirements or 'auto'

        convert_apps(
            args.files, dest_path=args.out, runtime=runtime, requirements=requirements,
            prerender=not args.skip_embed, build_index=args.index, build_pwa=args.pwa,
            title=args.title, max_workers=args.num_procs
        )