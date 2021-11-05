import {
	INodeProperties,
} from 'n8n-workflow';

export const dashboardOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'dashboard',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a dashboard',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a dashboard',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a dashboard',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all dashboards',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a dashboard',
			},
		],
		default: 'create',
	},
];

export const dashboardFields: INodeProperties[] = [
	{
		displayName: 'Title',
		name: 'title',
		description: 'Title of the dashboard to create',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'dashboard',
				],
				operation: [
					'create',
				],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'dashboard',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Folder Name/ID',
				name: 'folderId',
				type: 'options',
				default: '',
				description: 'Folder to create the dashboard in - if the folder is unspecified, the dashboard will be saved to the General folder. Choose from the list or specify an ID. You can also specify the ID using an <a href="https://docs.n8n.io/nodes/expressions.html#expressions">expression</a>.',
				typeOptions: {
					loadOptionsMethod: 'getFolders',
				},
			},
		],
	},
	// ----------------------------------------
	//            dashboard: delete
	// ----------------------------------------
	{
		displayName: 'Dashboard UID',
		name: 'dashboardUid',
		description: 'Aalphabetic identifier of the dashboard to delete',
		placeholder: 'cIBgcSjkk',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'dashboard',
				],
				operation: [
					'delete',
				],
			},
		},
	},

	// ----------------------------------------
	//              dashboard: get
	// ----------------------------------------
	{
		displayName: 'Dashboard UID',
		name: 'dashboardUid',
		description: 'Alphabetic identifier of the dashboard to retrieve',
		placeholder: 'cIBgcSjkk',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'dashboard',
				],
				operation: [
					'get',
				],
			},
		},
	},

	// ----------------------------------
	//         dashboard: getAll
	// ----------------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: [
					'dashboard',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		displayOptions: {
			show: {
				resource: [
					'dashboard',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'dashboard',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Search Query',
				name: 'query',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Starred',
				name: 'starred',
				type: 'boolean',
				default: false,
				description: 'Whether to return only starred dashboards',
			},
		],
	},


	// ----------------------------------------
	//            dashboard: update
	// ----------------------------------------
	{
		displayName: 'Dashboard UID',
		name: 'dashboardUid',
		description: 'Unique (alphabetic) identifier of the dashboard to update',
		placeholder: 'cIBgcSjkk',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'dashboard',
				],
				operation: [
					'update',
				],
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'dashboard',
				],
				operation: [
					'update',
				],
			},
		},
		options: [
			{
				displayName: 'Folder Name/ID',
				name: 'folderId',
				type: 'options',
				default: '',
				description: 'Folder to create the dashboard in - if the folder is unspecified, the dashboard will be saved to the <code>General</code> folder. Choose from the list or specify an ID. You can also specify the ID using an <a href="https://docs.n8n.io/nodes/expressions.html#expressions">expression</a>.',
				typeOptions: {
					loadOptionsMethod: 'getFolders',
				},
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Title of the dashboard to create',
			},
		],
	},
];