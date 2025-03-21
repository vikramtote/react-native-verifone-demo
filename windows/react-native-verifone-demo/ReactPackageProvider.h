#pragma once

#include "winrt/Microsoft.ReactNative.h"

namespace winrt::react-native-verifone-demo::implementation
{
    struct ReactPackageProvider : winrt::implements<ReactPackageProvider, winrt::Microsoft::ReactNative::IReactPackageProvider>
    {
    public: // IReactPackageProvider
        void CreatePackage(winrt::Microsoft::ReactNative::IReactPackageBuilder const &packageBuilder) noexcept;
    };
} // namespace winrt::react-native-verifone-demo::implementation

