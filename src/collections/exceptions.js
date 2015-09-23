

/**
 * @global
 */
class UnimplementedError extends Error {
	constructor(method) {
		super(`This is a bug in gip please file a bug report (including the stack trace) to (URL): ${method} is not implemented`);
	}
}

/**
 * @global
 */
class EmptyCollectionError extends Error {
	constructor(msg) {
		super(msg);
	}
}

export default {
	UnimplementedError: UnimplementedError,
	EmptyCollectionError: EmptyCollectionError
};
