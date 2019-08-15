import * as React from 'react';
import { ControlsAreaPage, IControlsPageProps } from '../ControlsAreaPage';
import { FocusZonePageProps } from './FocusZonePage.doc';

export const FocusZonePage: React.StatelessComponent<IControlsPageProps> = props => {
  return <ControlsAreaPage {...props} {...FocusZonePageProps[props.platform]} />;
};
