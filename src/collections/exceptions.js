

/**
 * @global
 * @since 0.1.0
 */
class UnimplementedError extends Error {
	constructor(method) {
		super(`This is a bug in gipp please file a bug report (including the stack trace) to (URL): ${method} is not implemented`);
	}
}

/**
 * @global
 * @since 0.1.0
 */
class EmptyCollectionError extends Error {
	constructor(msg) {
		super(msg);
	}
}

/**
 * @global
 * @since 0.1.0
 */
class IllegalArgumentError extends Error {
	constructor(msg) {
		super(msg);
	}
}

export default {
	UnimplementedError: UnimplementedError,
	EmptyCollectionError: EmptyCollectionError,
	IllegalArgumentError: IllegalArgumentError
};
