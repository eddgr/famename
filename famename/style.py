# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class style(Component):
    """A style component.


Keyword arguments:
- selectState (string; optional)
- genderEthnicity (string; optional)
- cssArray (list; optional)
- last (boolean; optional)
- ethnicity (boolean; optional)"""
    @_explicitize_args
    def __init__(self, selectState=Component.UNDEFINED, handleButtonClick=Component.UNDEFINED, genderEthnicity=Component.UNDEFINED, cssArray=Component.UNDEFINED, last=Component.UNDEFINED, ethnicity=Component.UNDEFINED, **kwargs):
        self._prop_names = ['selectState', 'genderEthnicity', 'cssArray', 'last', 'ethnicity']
        self._type = 'style'
        self._namespace = 'famename'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['selectState', 'genderEthnicity', 'cssArray', 'last', 'ethnicity']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(style, self).__init__(**args)
