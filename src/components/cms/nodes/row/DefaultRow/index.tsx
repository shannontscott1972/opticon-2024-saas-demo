import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultRowProps } from "../displayTemplates";

export const DefaultRow : CmsLayoutComponent<DefaultRowProps> = ({ contentLink, layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:row vb:row:DefaultRow">{ children }</div>);
}

export default DefaultRow;