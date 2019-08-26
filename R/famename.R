# AUTO GENERATED FILE - DO NOT EDIT

famename <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Famename',
        namespace = 'famename',
        propNames = c('id', 'label', 'value'),
        package = 'famename'
        )

    structure(component, class = c('dash_component', 'list'))
}
