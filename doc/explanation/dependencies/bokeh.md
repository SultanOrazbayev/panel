# Panel and Bokeh

Bokeh is a well-established library for building JavaScript-based plots and applications in Python. Panel is not tied to Bokeh's plotting support in any way, but it does build on infrastructure provided by Bokeh, specifically Bokeh's model base classes, layouts, widgets, and (optionally) its server. Using Bokeh components in the higher-level Panel library lets you make use of a solid, well supported low-level toolkit to build apps and dashboards, while letting you include plots from any supported library.

Conversely, what Panel adds on top of Bokeh is full bidirectional communication between Python and JavaScript both in a Jupyter session (classic notebook or Jupyter Lab) and in a standalone Bokeh server, making it trivial to move code between Jupyter and server contexts. It then uses this two-way "comms" support to provide reactive widgets, containers, and views that make it simple to put together widget-controlled objects accessible from either Python or JavaScript. Finally, Panel adds a large set of wrappers for common plot and image types so that they can easily be laid out into small apps or full dashboards.