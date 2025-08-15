# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy .csproj
COPY SettlyApi/SettlyApi.csproj ./SettlyApi/
COPY AnotherLib/AnotherLib.csproj ./AnotherLib/

# Restore
RUN dotnet restore SettlyApi/SettlyApi.csproj

# 复制所有源码
COPY . .

# Publish
RUN dotnet publish SettlyApi/SettlyApi.csproj -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "SettlyApi.dll"]
