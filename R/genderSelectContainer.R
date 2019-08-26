# AUTO GENERATED FILE - DO NOT EDIT

genderSelectContainer <- function(nameOutput=NULL) {
    
    props <- list(nameOutput=nameOutput)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GenderSelectContainer',
        namespace = 'famename',
        propNames = c('nameOutput'),
        package = 'famename'
        )

    structure(component, class = c('dash_component', 'list'))
}
