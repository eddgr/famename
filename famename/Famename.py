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
- nameOutput (list; optional): List of names based on gender selected by user."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, genderSelect=Component.UNDEFINED, selectedName=Component.UNDEFINED, nameOutput=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'genderSelect', 'selectedName', 'nameOutput']
        self._type = 'Famename'
        self._namespace = 'famename'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'genderSelect', 'selectedName', 'nameOutput']
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
