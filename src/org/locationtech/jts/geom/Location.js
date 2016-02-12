import IllegalArgumentException from '../../../../java/lang/IllegalArgumentException';
export default class Location {
	get interfaces_() {
		return [];
	}
	static toLocationSymbol(locationValue) {
		switch (locationValue) {
			case Location.EXTERIOR:
				return 'e';
			case Location.BOUNDARY:
				return 'b';
			case Location.INTERIOR:
				return 'i';
			case Location.NONE:
				return '-';
		}
		throw new IllegalArgumentException("Unknown location value: " + locationValue);
	}
	getClass() {
		return Location;
	}
}
Location.INTERIOR = 0;
Location.BOUNDARY = 1;
Location.EXTERIOR = 2;
Location.NONE = -1;
