import { useGtm } from '@gtm-support/vue-gtm';

export function PushDataLayer(course: any, eventName: string) {
	const gtm = useGtm();

	if (gtm != undefined) {
		gtm.trackEvent({
			event: eventName,
			ecommerce: {
				items: [course]
			}
		});
	}
}
