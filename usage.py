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
options = []
first_name = df['Child\'s First Name']
for name in first_name:
    options.append({'label': name.capitalize(), 'value': name.upper()})

app.layout = html.Div([
    famename.Famename(
        id='react',
        genderSelect='',
        nameOutput=[],
        selectedName=''
    ),
    dcc.Graph(id='output_graph', style={'display': 'none'}),
    dcc.Dropdown(id='compare_dropdown', options=options, placeholder='Select names to compare...', multi=True)
])

# callbacks
# select gender
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
        names.append(name.capitalize())

    sorted_names = sorted(set(names))

    return random.sample(sorted_names, k=5)

# hide graph on load
@app.callback(
    Output('output_graph', 'style'),
    [Input('react', 'selectedName')]
)
def show_graph(name):
    if name != '':
        return {
            'display': 'block'
        }
    return {
        'display': 'none'
    }

# show graph and trend of name
@app.callback(
    Output('output_graph', 'figure'),
    [Input('react', 'selectedName')]
)
def selected_name_graph(name):
    # go through an array of names
    # for each name that match, append to a new list
    # for that list, create a new scatter trace to be added to data

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
# end callbacks

# server
if __name__ == '__main__':
    app.run_server()
