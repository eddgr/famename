# IMPORT
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

# DATA
df = pd.read_csv('./data/Popular_Baby_Names.csv')
# pdb.set_trace()

# APP
app = dash.Dash(__name__)
app.title = 'Fame Name'

# LAYOUT
options = []
first_name = df['Child\'s First Name']
for name in first_name:
    options.append({'label': name.capitalize(), 'value': name.upper()})

app.layout = html.Div([
    famename.Famename(
        id='react',
        genderSelect='',
        nameOutput=[],
        selectedName=[],
        currentPage=''
    ),
    dcc.Dropdown(id='compare_dropdown', options=options, placeholder='Select names to compare...', multi=True, style={'display': 'none'}),
    dcc.Graph(id='output_graph', style={'display': 'none'})
])

# CALLBACKS
# resets graph on current page
@app.callback(
    Output('compare_dropdown', 'value'),
    [Input('react', 'currentPage')]
)
def set_page(page_name):
    return []

# hide dropdown
@app.callback(
    Output('compare_dropdown', 'style'),
    [Input('react', 'currentPage')]
)
def hide_dropdown(page_name):
    if page_name == 'GenderSelectContainer' or page_name == 'Rank':
        return {'display': 'none'}
    return {'display': 'block'}

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
    [
        Input('react', 'selectedName'),
        Input('compare_dropdown', 'value')
    ]
)
def show_graph(name, multi_name):
    # checks to see if mult_name exists
    names_list = []
    if name:
        names_list = name
    else:
        names_list = multi_name

    if len(names_list) > 0:
        return {'display': 'block'}
    return {'display': 'none'}

# show graph and trend of name
@app.callback(
    Output('output_graph', 'figure'),
    [
        Input('react', 'selectedName'),
        Input('compare_dropdown', 'value')
    ]
)
def selected_name_graph(name, multi_name):
    # checks to see if mult_name exists
    joined_names = []
    if name:
        joined_names = name
    else:
        joined_names = multi_name

    traces = []
    for n in joined_names:
        selected_name = df[df['Child\'s First Name'].str.upper() == n]

        # groups name counts by year
        group_by_year = selected_name.groupby('Year of Birth')['Count'].sum()

        # convert string into datetime
        new_year = []
        for year in group_by_year.keys():
            new_year.append(datetime.datetime(year=year, month=1, day=1))

        traces.append(
            go.Scatter(dict(
                x = new_year,
                y = group_by_year,
                name = n.capitalize(),
                mode = 'lines+markers'
            ))
        )

    figure = {
        'data': traces,
        'layout': go.Layout(title=' vs '.join(joined_names))
    }
    return figure
# end CALLBACKS

# server
if __name__ == '__main__':
    app.run_server()
