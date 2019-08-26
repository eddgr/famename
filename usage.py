# import
import famename
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import plotly.graph_objs as go
import pandas as pd
import pdb
import random

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
    )
])

# callbacks
@app.callback(
    Output('react', 'nameOutput'),
    [Input('react', 'genderSelect')]
)
def selectGender(gender):
    rank = df[df['Rank'] < 6]

    first_name = rank[rank['Gender'] == gender]['Child\'s First Name']

    if gender == 'BOTH':
        first_name = rank['Child\'s First Name']

    names = []

    for name in first_name:
        names.append(name.lower())

    sorted_names = sorted(set(names))

    return random.sample(sorted_names, k=5)

# server
if __name__ == '__main__':
    app.run_server()
