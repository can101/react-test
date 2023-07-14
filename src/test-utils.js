import { render } from "@testing-library/react"

const TehemeProvider = ({ children }) => {
    return <div className="theme-provider">{children}</div>
}
const I18nProvider = ({ children }) => {
    return <div className="i18n-provider">{children}</div>
}

export const AllProviders = ({ children }) => {
    return (
        <TehemeProvider>
            <I18nProvider>
                {children}
            </I18nProvider>
        </TehemeProvider>
    )
}

export const customRender = (ui, options) => {
    render(ui, {
        wrapper: AllProviders,
        ...options
    })
}