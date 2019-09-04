# AUTO GENERATED FILE - DO NOT EDIT

style <- function(selectState=NULL, handleButtonClick=NULL, genderEthnicity=NULL, cssArray=NULL, last=NULL, ethnicity=NULL) {
    
    props <- list(selectState=selectState, handleButtonClick=handleButtonClick, genderEthnicity=genderEthnicity, cssArray=cssArray, last=last, ethnicity=ethnicity)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'style',
        namespace = 'famename',
        propNames = c('selectState', 'handleButtonClick', 'genderEthnicity', 'cssArray', 'last', 'ethnicity'),
        package = 'famename'
        )

    structure(component, class = c('dash_component', 'list'))
}
