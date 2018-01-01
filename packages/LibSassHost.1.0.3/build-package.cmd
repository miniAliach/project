set project_name=LibSassHost
set net4_project_source_dir=..\..\src\%project_name%.Net4
set net4_project_bin_dir=%net4_project_source_dir%\bin\Release
set dotnet_project_source_dir=..\..\src\%project_name%
set dotnet_project_bin_dir=%dotnet_project_source_dir%\bin\Release
set nuget_package_manager=..\..\.nuget\nuget.exe

call "..\setup.cmd"

rmdir lib /Q/S
del libsass-license.txt /Q/S

%net40_msbuild% "%net4_project_source_dir%\%project_name%.Net40.csproj" /p:Configuration=Release
xcopy "%net4_project_bin_dir%\%project_name%.dll" lib\net40-client\

%dotnet_cli% restore "%dotnet_project_source_dir%"

%dotnet_cli% build "%dotnet_project_source_dir%" --framework net45 --configuration Release --no-dependencies --no-incremental
xcopy "%dotnet_project_bin_dir%\net45\%project_name%.dll" lib\net45\
xcopy "%dotnet_project_bin_dir%\net45\%project_name%.xml" lib\net45\

%dotnet_cli% build "%dotnet_project_source_dir%" --framework netstandard1.3 --configuration Release --no-dependencies --no-incremental
xcopy "%dotnet_project_bin_dir%\netstandard1.3\%project_name%.dll" lib\netstandard1.3\
xcopy "%dotnet_project_bin_dir%\netstandard1.3\%project_name%.xml" lib\netstandard1.3\

copy "..\..\src\libsass\LICENSE" libsass-license.txt /Y

%nuget_package_manager% pack "..\%project_name%\%project_name%.nuspec"