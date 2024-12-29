import { ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'


type AdditionalClassGroupIDs = 'class-a' | 'class-b'
type AdditionalThemeGroupIDs = 'theme-c' | 'theme-d'

const twMerge = extendTailwindMerge<AdditionalClassGroupIDs, AdditionalThemeGroupIDs>({
    extend: {
        theme: {},
        classGroups: {
            'font-size': [
                'text-11-light', 'text-11-regular', 'text-11-medium', 'text-11-semibold', 'text-11-bold',
                'text-12-light', 'text-12-regular', 'text-12-medium', 'text-12-semibold', 'text-12-bold',
                'text-13-regular', 'text-13-medium', 'text-13-semibold', 'text-13-bold',
                'text-14-light', 'text-14-regular', 'text-14-medium', 'text-14-semibold', 'text-14-bold',
                'text-15-regular', 'text-15-medium', 'text-15-semibold', 'text-15-bold',
                'text-16-light', 'text-16-regular', 'text-16-medium', 'text-16-semibold', 'text-16-bold',
                'text-18-light', 'text-18-regular', 'text-18-medium', 'text-18-semibold', 'text-18-bold',
                'text-20-light', 'text-20-regular', 'text-20-medium', 'text-20-semibold', 'text-20-bold',
                'text-24-light', 'text-24-regular', 'text-24-medium', 'text-24-semibold', 'text-24-bold',
                'text-30-light', 'text-30-regular', 'text-30-medium', 'text-30-semibold', 'text-30-bold',
                'text-36-light', 'text-36-regular', 'text-36-medium', 'text-36-semibold', 'text-36-bold',
                'text-48-light', 'text-48-regular', 'text-48-medium', 'text-48-semibold', 'text-48-bold'
            ]
        },
        conflictingClassGroups: {},
        conflictingClassGroupModifiers: {}
    }
})

export function classesOf(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}