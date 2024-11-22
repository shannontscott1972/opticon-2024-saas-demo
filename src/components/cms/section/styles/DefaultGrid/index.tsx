import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultGridProps } from "../displayTemplates";

export const DefaultGrid : CmsLayoutComponent<DefaultGridProps> = ({ contentLink, layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:undefined vb:undefined:DefaultGrid">{ children }</div>);
}

export default DefaultGrid;