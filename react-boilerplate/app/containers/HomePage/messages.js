/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Hi',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage: 'Maybe this will udpate?',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'No U',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
