# import
import famename
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
import plotly.graph_objs as go
import pandas as pd
import pdb
import random
import datetime

# data
df = pd.read_csv('./data/Popular_Baby_Names.csv')
# pdb.set_trace()

# app
app = dash.Dash(__name__)
app.title = 'Fame Name'

# layout
app.layout = html.Div([
    famename.Famename(
        id='react',
        genderSelect='',
        nameOutput=[],
        selectedName='',
    ),
    dcc.Graph(id='output_graph', figure={})
])

# callbacks
@app.callback(
    Output('react', 'nameOutput'),
    [Input('react', 'genderSelect')]
)
def select_gender(gender):
    first_name = df[df['Gender'] == gender]['Child\'s First Name']

    if gender == 'BOTH':
        first_name = df['Child\'s First Name']

    names = []

    for name in first_name:
        names.append(name.lower())

    sorted_names = sorted(set(names))

    return random.sample(sorted_names, k=5)

@app.callback(
    Output('output_graph', 'figure'),
    [Input('react', 'selectedName')]
)

def selected_name_graph(name):
    selected_name = df[df['Child\'s First Name'].str.upper() == name]

    # groups name counts by year
    group_by_year = selected_name.groupby('Year of Birth')['Count'].sum()

    # convert string into datetime
    new_year = []
    for year in group_by_year.keys():
        new_year.append(datetime.datetime(year=year, month=1, day=1))

    figure = {
        'data': [
            go.Scatter(dict(
                x = new_year,
                y = group_by_year,
                mode = 'lines+markers'
            ))
        ],
        'layout': go.Layout(title=name)
    }
    return figure

# server
if __name__ == '__main__':
    app.run_server()
