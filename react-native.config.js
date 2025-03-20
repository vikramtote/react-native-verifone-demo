module.exports = {
	dependency: {
		platforms: {
			windows: {
				sourceDir: './platforms/windows',
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
