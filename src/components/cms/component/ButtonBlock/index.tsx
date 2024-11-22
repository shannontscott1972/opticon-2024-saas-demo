import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { ButtonBlockDataFragmentDoc, type ButtonBlockDataFragment } from "@/gql/graphql";

/**
 * Button
 * Button element for inclusion in other blocks/pages
 */
export const ButtonBlockComponent : CmsComponent<ButtonBlockDataFragment> = ({ data, children }) => {
    const componentName = 'Button'
    const componentInfo = 'Button element for inclusion in other blocks/pages'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
ButtonBlockComponent.displayName = "Button (Component/ButtonBlock)"
ButtonBlockComponent.getDataFragment = () => ['ButtonBlockData', ButtonBlockDataFragmentDoc]

export default ButtonBlockComponent