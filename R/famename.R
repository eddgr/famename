# AUTO GENERATED FILE - DO NOT EDIT

famename <- function(id=NULL, genderSelect=NULL, selectedName=NULL, nameOutput=NULL) {
    
    props <- list(id=id, genderSelect=genderSelect, selectedName=selectedName, nameOutput=nameOutput)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Famename',
        namespace = 'famename',
        propNames = c('id', 'genderSelect', 'selectedName', 'nameOutput'),
        package = 'famename'
        )

    structure(component, class = c('dash_component', 'list'))
}
