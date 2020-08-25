import { schedules } from "src/models/schedules.entity";
/*
repeat(20, {
	"id": index(1),
  	"idActivityParent": random(1,10),
  	"idActivityChild": random(11,27)
})
*/
export const SCHEDULES:schedules[] = JSON.parse(`[
	{
		"id": 1,
		"idActivityParent": 5,
		"idActivityChild": 11
	},
	{
		"id": 2,
		"idActivityParent": 6,
		"idActivityChild": 12
	},
	{
		"id": 3,
		"idActivityParent": 8,
		"idActivityChild": 13
	},
	{
		"id": 4,
		"idActivityParent": 10,
		"idActivityChild": 14
	},
	{
		"id": 5,
		"idActivityParent": 4,
		"idActivityChild": 15
	},
	{
		"id": 6,
		"idActivityParent": 3,
		"idActivityChild": 16
	},
	{
		"id": 7,
		"idActivityParent": 8,
		"idActivityChild": 17
	},
	{
		"id": 8,
		"idActivityParent": 10,
		"idActivityChild": 18
	},
	{
		"id": 9,
		"idActivityParent": 2,
		"idActivityChild": 19
	},
	{
		"id": 10,
		"idActivityParent": 5,
		"idActivityChild": 20
	},
	{
		"id": 11,
		"idActivityParent": 8,
		"idActivityChild": 21
	},
	{
		"id": 12,
		"idActivityParent": 8,
		"idActivityChild": 22
	},
	{
		"id": 13,
		"idActivityParent": 7,
		"idActivityChild": 23
	},
	{
		"id": 14,
		"idActivityParent": 1,
		"idActivityChild": 24
	},
	{
		"id": 15,
		"idActivityParent": 10,
		"idActivityChild": 25
	},
	{
		"id": 16,
		"idActivityParent": 7,
		"idActivityChild": 26
	},
	{
		"id": 17,
		"idActivityParent": 5,
		"idActivityChild": 27
	}
]`);