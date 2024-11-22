import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { HeaderBlockDataFragmentDoc, type HeaderBlockDataFragment } from "@/gql/graphql";

/**
 * Website header configuration
 * Configure the header of the website
 */
export const HeaderBlockComponent : CmsComponent<HeaderBlockDataFragment> = ({ data, children }) => {
    const componentName = 'Website header configuration'
    const componentInfo = 'Configure the header of the website'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
HeaderBlockComponent.displayName = "Website header configuration (Component/HeaderBlock)"
HeaderBlockComponent.getDataFragment = () => ['HeaderBlockData', HeaderBlockDataFragmentDoc]

export default HeaderBlockComponent