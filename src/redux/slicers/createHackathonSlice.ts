import getCurrentDate from '@/utils/getCurrentDate';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Schedule = {
	registerStart: string;
	registerEnd: string;
	submissionStart: string;
	submissionEnd: string;
	resultAnnouncement: string;
	isSubmitted: boolean;
};

export type Judge = {
	name: string;
	role: string;
	email: string;
	wallet: string;
	avatarImage: string;
	isSubmitted: boolean;
};

export type Prize = {
	firstPrize: {
		bounty: number;
		amount: number;
	};
	secondPrize: {
		bounty: number;
		amount: number;
	};
	thirdPrize: {
		bounty: number;
		amount: number;
	};
};

export type Track = {
	name: string;
	description: string;
	prize: Prize;
	isSubmitted: boolean;
};

export type Sponsor = {
	name: string;
	prizePool: number;
	walletAddress: string;
	logoImage: File | null;
	track: Track[];
	isSubmitted: boolean;
};

interface createHackathonState {
	sponsor: Sponsor[];
	judge: Judge[];
	schedule: Schedule;
	overview: string;
}

const initialState: createHackathonState = {
	sponsor: [
		{
			name: '',
			prizePool: 0,
			walletAddress: '',
			logoImage: null,
			track: [],
			isSubmitted: false,
		},
	],
	judge: [],
	schedule: {
		registerStart: getCurrentDate(),
		registerEnd: getCurrentDate(),
		submissionStart: getCurrentDate(),
		submissionEnd: getCurrentDate(),
		resultAnnouncement: getCurrentDate(),
		isSubmitted: false,
	},
	overview: '',
};

export const createHackathonSlice = createSlice({
	name: 'createHackathon',
	initialState,
	reducers: {
		// Sponsor
		submitSponsor: (
			state,
			action: PayloadAction<{ index: number; sponsor: Sponsor }>,
		) => {
			state.sponsor[action.payload.index] = action.payload.sponsor;
		},
		addNewSponsor: (state) => {
			state.sponsor = [
				...state.sponsor,
				{
					name: '',
					prizePool: 0,
					walletAddress: '',
					logoImage: null,
					track: [],
					isSubmitted: false,
				},
			];
		},

		// Track
		submitTrack: (
			state,
			action: PayloadAction<{
				sponsorIndex: number;
				track: Track;
			}>,
		) => {
			state.sponsor[action.payload.sponsorIndex].track = [
				...state.sponsor[action.payload.sponsorIndex].track,
				action.payload.track,
			];
		},

		addNewTrack: (state, action: PayloadAction<number>) => {
			state.sponsor[action.payload].track = [
				...state.sponsor[action.payload].track,
				{
					name: '',
					description: '',
					prize: {
						firstPrize: { bounty: 0, amount: 0 },
						secondPrize: { bounty: 0, amount: 0 },
						thirdPrize: { bounty: 0, amount: 0 },
					},
					isSubmitted: false,
				},
			];
		},

		// Judge

		submitJudge: (
			state,
			action: PayloadAction<{ index: number; judge: Judge }>,
		) => {
			state.judge[action.payload.index] = action.payload.judge;
		},

		addNewJudge: (state) => {
			state.judge = [
				...state.judge,
				{
					name: '',
					role: '',
					email: '',
					wallet: '',
					avatarImage: '',
					isSubmitted: false,
				},
			];
		},

		// Schedule
		addSchedule: (state, action: PayloadAction<Schedule>) => {
			state.schedule = action.payload;
		},

		// Overview
		addOverview: (state, action: PayloadAction<string>) => {
			state.overview = action.payload;
		},
	},
});

export const {
	submitSponsor,
	addNewTrack,
	addNewJudge,
	addSchedule,
	addOverview,
	addNewSponsor,
	submitTrack,
	submitJudge,
} = createHackathonSlice.actions;

export default createHackathonSlice.reducer;
