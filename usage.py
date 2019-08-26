# import
import famename
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import plotly.graph_objs as go
import pandas as pd
import pdb

# data
df = pd.read_csv('./data/Popular_Baby_Names.csv')
# pdb.set_trace()

# app
app = dash.Dash(__name__)

# layout
app.layout = html.Div([
    famename.Famename(
        id='react',
        genderSelect='',
        nameOutput=[],
    ),
    html.Div(id='output')
])

# callbacks
@app.callback(Output('output', 'children'), [Input('react', 'genderSelect')])
def display_output(value):
    return 'You have entered {}'.format(value)

@app.callback(
    Output('react', 'nameOutput'),
    [Input('react', 'genderSelect')]
)
def selectGender(gender):
    if gender == 'BOTH':
        return df['Child\'s First Name']
    return df[df['Gender'] == gender]['Child\'s First Name']

# server
if __name__ == '__main__':
    app.run_server(debug=True)
