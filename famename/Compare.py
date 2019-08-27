# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Compare(Component):
    """A Compare component.
This will be used for searching and comparing names

Keyword arguments:
"""
    @_explicitize_args
    def __init__(self, **kwargs):
        self._prop_names = []
        self._type = 'Compare'
        self._namespace = 'famename'
        self._valid_wildcard_attributes =            []
        self.available_properties = []
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Compare, self).__init__(**args)
