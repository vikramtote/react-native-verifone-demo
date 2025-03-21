module.exports = {
	dependency: {
		platforms: {
			windows: {
				sourceDir: './windows',
				solutionFile: 'react-native-verifone-demo.sln',
				projects: [
				  {
					projectFile: 'react-native-verifone-demo/react-native-verifone-demo.vcxproj',
					directDependency: true,
				  }
				],
			}
		}
	}
}
