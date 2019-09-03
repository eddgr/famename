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

# APP
external_stylesheets = [
    {
        'href': 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
        'rel': 'stylesheet',
        'integrity': 'sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO',
        'crossorigin': 'anonymous'
    },
    {
        'href': 'https://fonts.googleapis.com/css?family=Fredoka+One|Raleway:400,700&display=swap',
        'rel': 'stylesheet'
    },
    {
        'href': 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css',
        'rel': 'stylesheet'
    }
]

meta_tags = [{
    'name': 'viewport',
    'content': 'width=device-width, initial-scale=1.0'
}]

app = dash.Dash(__name__, external_stylesheets=external_stylesheets, meta_tags=meta_tags)
app.title = 'Fame Name'

# LAYOUT
# dropdown name rendering
options = []
first_name = df['Child\'s First Name']
for name in first_name:
    options.append({'label': name.capitalize(), 'value': name.upper()})

app.layout = html.Div([
    html.H2(id='page_title', children='Fame Name', className='text-center mt-4'),
    famename.Famename(
        id='react',
        genderSelect='',
        nameOutput=[],
        # selectedName=[],
        currentPage='',
        gender='ALL',
        ethnicity='ALL'
    ),
    dcc.Dropdown(id='compare_dropdown', options=options, placeholder='Select names to compare...', multi=True, style={'display': 'none'}, className="container"),
    html.Div([
        dcc.Graph(id='output_graph', style={'display': 'flex'}, className="justify-content-center align-items-center"),
    ], className='container'),
    html.Div(
        id='rank_table_container',
        children=[
            dash_table.DataTable(
                id='rank_table',
                columns=[
                    {"name": 'Name', "id": 'Name'},
                    {"name": 'Count', "id": 'Count'},
                    # {"name": i, "id": i} for i in sorted(dff.columns)
                ],
                page_current=0,
                page_size=5,
                page_action='custom',
                sort_action='custom',
                sort_mode='single',
                sort_by=[],
                style_cell={'textAlign': 'center'},
                style_data_conditional=[
                    {
                        'if': {'row_index': 'odd'},
                        'backgroundColor': 'rgb(248, 248, 248)'
                    }
                ],
                style_header={
                    'backgroundColor': '#17a2b8',
                    'color': '#fff',
                    'fontWeight': 'bold'
                }
            )
        ],
        style={'display': 'none'},
        className="container mt-4"
    )

])

# CALLBACKS
# setting page title header
@app.callback(
    Output('page_title', 'children'),
    [Input('react', 'currentPage')]
)
def set_title(title):
    if title == 'GenderSelectContainer':
        return 'Select a Gender'
    elif title == 'Rank':
        return 'Popular Names'
    return title

# datatable
@app.callback(
    Output('rank_table', 'data'),
    [
        Input('rank_table', "page_current"),
        Input('rank_table', "page_size"),
        Input('rank_table', "sort_by"),
        Input('react', "gender"),
        Input('react', "ethnicity"),
    ]
)
def update_table(page_current, page_size, sort_by, gender, ethnicity):
    # dataframe for datatable
    df['Child\'s First Name'] = df['Child\'s First Name'].str.capitalize()
    df['index'] = range(1, len(df) + 1)

    df_gender = df[df['Gender'] == gender]
    df_ethnicity = df[df['Ethnicity'] == ethnicity]

    if gender != 'ALL' and ethnicity != 'ALL':
        # if both gender and ethnicity are toggled
        rank5_names = df_gender[df_gender['Ethnicity'] == ethnicity].groupby('Child\'s First Name')['Count'].sum()
    elif gender != 'ALL':
        # only gender toggled
        rank5_names = df_gender.groupby('Child\'s First Name')['Count'].sum()
    elif ethnicity != 'ALL':
        # only ethnicity toggled
        rank5_names = df_ethnicity.groupby('Child\'s First Name')['Count'].sum()
    else:
        # default all on gender and ethnicity
        rank5_names = df.groupby('Child\'s First Name')['Count'].sum()

    sorted_rank5 = rank5_names.sort_values(ascending=False)
    dff = pd.DataFrame({'Name': sorted_rank5.keys().to_list(), 'Count': sorted_rank5.to_list()})

    if len(sort_by):
        dfff = dff.sort_values(
            sort_by[0]['column_id'],
            ascending=sort_by[0]['direction'] == 'asc',
            inplace=False
        )
    else:
        # No sort is applied
        dfff = dff

    return dfff.iloc[
        page_current*page_size:(page_current+ 1)*page_size
    ].to_dict('records')

# resets graph on current page
@app.callback(
    Output('compare_dropdown', 'value'),
    [Input('react', 'currentPage')]
)
def set_page(page_name):
    return []

# hide compare_dropdown
@app.callback(
    Output('compare_dropdown', 'style'),
    [Input('react', 'currentPage')]
)
def hide_dropdown(page_name):
    if page_name == 'GenderSelectContainer' or page_name == 'Rank':
        return {'display': 'none'}
    return {'display': 'block'}

# hide rank_table_container
@app.callback(
    Output('rank_table_container', 'style'),
    [Input('react', 'currentPage')]
)
def hide_dropdown(page_name):
    if page_name == 'GenderSelectContainer' or page_name == 'Compare':
        return {'display': 'none'}
    return {'display': 'block'}

# select gender
@app.callback(
    Output('react', 'nameOutput'),
    [Input('react', 'genderSelect')]
)
def select_gender(gender):
    first_name = df[df['Gender'] == gender]['Child\'s First Name']

    if gender == 'ALL':
        first_name = df['Child\'s First Name']

    names = []
    for name in first_name:
        names.append(name.upper())

    sorted_names = sorted(set(names))

    # if gender has not been selected, return empty list to pass to react
    if gender == '':
        return []
    return random.sample(sorted_names, k=1)

# hide graph on load
@app.callback(
    Output('output_graph', 'style'),
    [
        Input('react', 'currentPage')
        # Input('react', 'selectedName'),
        # Input('compare_dropdown', 'value')
    ]
)
def show_graph(page):
    if page == 'Rank':
        return {'display': 'none'}
# def show_graph(name, multi_name):
    # checks to see if mult_name exists
    # names_list = []
    # if name:
    #     names_list = name
    # else:
    #     names_list = multi_name
    #
    # if len(names_list) > 0:
    #     return {'display': 'flex'}
    # return {'display': 'flex'}

# show graph and trend of name
@app.callback(
    Output('output_graph', 'figure'),
    [
        Input('react', 'nameOutput'),
        # Input('react', 'selectedName'),
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
        'layout': go.Layout(title=' vs '.join(n.capitalize() for n in joined_names), legend_orientation="h", margin=dict(l=30, r=0))
    }

    return figure
# end CALLBACKS

# server
if __name__ == '__main__':
    app.run_server(debug=False, dev_tools_hot_reload=True)
