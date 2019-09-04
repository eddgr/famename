# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NavBar(Component):
    """A NavBar component.
This is where the NavBar lives

Keyword arguments:
- props (a list of or a singular dash component, string or number; optional): Props being passed down from parent"""
    @_explicitize_args
    def __init__(self, props=Component.UNDEFINED, **kwargs):
        self._prop_names = ['props']
        self._type = 'NavBar'
        self._namespace = 'famename'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['props']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(NavBar, self).__init__(**args)
