# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Famename(Component):
    """A Famename component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- genderSelect (string; optional): Selects gender based on user's selection.
- selectedName (list; optional): Name selected by user to display trend graph.
- nameOutput (list; optional): List of names based on gender selected by user.
- currentPage (string; optional): Shows current user page.
- rank5_names (list; optional)
- rank5_count (list; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, genderSelect=Component.UNDEFINED, selectedName=Component.UNDEFINED, nameOutput=Component.UNDEFINED, currentPage=Component.UNDEFINED, rank5_names=Component.UNDEFINED, rank5_count=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'genderSelect', 'selectedName', 'nameOutput', 'currentPage', 'rank5_names', 'rank5_count']
        self._type = 'Famename'
        self._namespace = 'famename'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'genderSelect', 'selectedName', 'nameOutput', 'currentPage', 'rank5_names', 'rank5_count']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Famename, self).__init__(**args)
