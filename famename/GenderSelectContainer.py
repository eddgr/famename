# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GenderSelectContainer(Component):
    """A GenderSelectContainer component.


Keyword arguments:
- nameOutput (list; optional)
- selectedName (string; optional)"""
    @_explicitize_args
    def __init__(self, nameOutput=Component.UNDEFINED, selectedName=Component.UNDEFINED, **kwargs):
        self._prop_names = ['nameOutput', 'selectedName']
        self._type = 'GenderSelectContainer'
        self._namespace = 'famename'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['nameOutput', 'selectedName']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GenderSelectContainer, self).__init__(**args)
