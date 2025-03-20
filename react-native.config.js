module.exports = {
	dependency: {
		platforms: {
			windows: {
				sourceDir: './windows',
				solutionFile: 'VerifoneNativeModule.sln',
				projects: [
				  {
					projectFile: 'VerifoneNativeModule/VerifoneNativeModule.vcxproj',
					directDependency: true,
				  }
				],
			}
		}
	}
}
