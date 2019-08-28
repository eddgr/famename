# AUTO GENERATED FILE - DO NOT EDIT

famename <- function(id=NULL, genderSelect=NULL, selectedName=NULL, nameOutput=NULL, currentPage=NULL, rank5_names=NULL, rank5_count=NULL) {
    
    props <- list(id=id, genderSelect=genderSelect, selectedName=selectedName, nameOutput=nameOutput, currentPage=currentPage, rank5_names=rank5_names, rank5_count=rank5_count)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Famename',
        namespace = 'famename',
        propNames = c('id', 'genderSelect', 'selectedName', 'nameOutput', 'currentPage', 'rank5_names', 'rank5_count'),
        package = 'famename'
        )

    structure(component, class = c('dash_component', 'list'))
}
