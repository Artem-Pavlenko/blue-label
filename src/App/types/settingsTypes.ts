export type NavBarType = 'My Profile' | 'Manage Account Types' | 'Manage Affiliates' | 'Templates Editor'

export type SettingRootType = {
    countries: Array<{value: string}>
    fetching: boolean
}
