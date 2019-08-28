# NOTES
# dff = df[df['Rank'] < 6]
# dff['Child\'s First Name'] = dff['Child\'s First Name'].str.upper()
# incorporate gender or ethnicity filters (?)
# rank5_names = dff.groupby('Child\'s First Name')['Count'].sum()
# rank5_names.sort_values(ascending=False)
# dff[dff['Gender'] == gender] + .groupby
# dff[dff['Ethnicity'] == ethnicity] + .groupby

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
import dash_table

# DATA
df = pd.read_csv('http://data.cityofnewyork.us/api/views/25th-nujf/rows.csv')
# df = pd.read_csv('./data/Popular_Baby_Names.csv')

dff = df[df['Rank'] < 6]
dff['Child\'s First Name'] = dff['Child\'s First Name'].str.upper()
dff['index'] = range(1, len(dff) + 1)
# incorporate gender or ethnicity filters (?)
rank5_names = dff.groupby('Child\'s First Name')['Count'].sum()
sorted_rank5 = rank5_names.sort_values(ascending=False)

# dff[dff['Gender'] == gender] + .groupby
# dff[dff['Ethnicity'] == ethnicity] + .groupby
# pdb.set_trace()

# APP
app = dash.Dash(__name__)
app.title = 'Fame Name'

# LAYOUT
options = []
first_name = df['Child\'s First Name']
for name in first_name:
    options.append({'label': name.capitalize(), 'value': name.upper()})

# PAGE_SIZE = 5

app.layout = html.Div([
    famename.Famename(
        id='react',
        genderSelect='',
        nameOutput=[],
        selectedName=[],
        currentPage='',
        # rank5_names=sorted_rank5.keys()[0:5],
        # rank5_count=sorted_rank5[0:5]
    ),
    dcc.Dropdown(id='compare_dropdown', options=options, placeholder='Select names to compare...', multi=True, style={'display': 'none'}),
    dcc.Graph(id='output_graph', style={'display': 'none'}),
    dash_table.DataTable(
        id='rank_table',
        columns=[
            {'name': 'Name', 'id': 'Name'},
            {'name': 'Count', 'id': 'Count'}
        ],
        data=pd.DataFrame({'Name': sorted_rank5.keys().to_list(), 'Count': sorted_rank5.to_list()}).to_dict('records')
    )

# pd.DataFrame({'name': sorted_rank5.keys().to_list(), 'count': sorted_rank5.to_list()})
#      pd.DataFrame(data=sorted_rank5.keys().to_list(), columns=['Name']) + pd.DataFrame(data=sorted_rank5.to_list(), columns=['Count'])
     # pd.DataFrame(data=[sorted_rank5.keys().to_list(), data=sorted_rank5.to_list()], columns=['Name', 'Count'])
     # pd.concat([pd.DataFrame(data=sorted_rank5.keys().to_list(), columns=['Name']), pd.DataFrame(data=sorted_rank5.to_list(), columns=['Count'])])

# pd.concat([pd.DataFrame(data=sorted_rank5.keys().to_list(), columns=['Name']), pd.DataFrame(data=sorted_rank
# 5.to_list(), columns=['Count'])]).to_dict('records')

    # dash_table.DataTable(id='rank_table',columns=[
    #     {"name": i, "id": i} for i in sorted(df.columns)
    # ],
    # page_current=0,
    # page_size=PAGE_SIZE,
    # page_action='custom')
])

# CALLBACKS
# @app.callback(
#     Output('rank_table', 'data'),
#     [Input('rank_table', "page_current"),
#      Input('rank_table', "page_size")])
# def update_table(page_current,page_size):
#     return df.iloc[
#         page_current*page_size:(page_current+ 1)*page_size
#     ].to_dict('records')
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
