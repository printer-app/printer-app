interface Gear {
	type: GearType,
	instances: GearInstance[]
}

interface GearType {
	id: string,
	name: string
}

interface GearInstance {
	name: string,
	usage: number
}

export async function getGear() {
	return [
		{
			"type": {
				"id": "prusai3mk3s+",
				"name": "Prusa"
			},
			"instances": [
				{
					"name": "Test 1",
					"usage": 50
				},
				{
					"name": "Test 2",
					"usage": 10
				}
			],
		}
	];
}

export async function ge
