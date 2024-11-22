import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { NavigationMenuBlockDataFragmentDoc, type NavigationMenuBlockDataFragment } from "@/gql/graphql";

/**
 * Navigation Menu
 * 
 */
export const NavigationMenuBlockComponent : CmsComponent<NavigationMenuBlockDataFragment> = ({ data, children }) => {
    const componentName = 'Navigation Menu'
    const componentInfo = ''
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
NavigationMenuBlockComponent.displayName = "Navigation Menu (Component/NavigationMenuBlock)"
NavigationMenuBlockComponent.getDataFragment = () => ['NavigationMenuBlockData', NavigationMenuBlockDataFragmentDoc]

export default NavigationMenuBlockComponent