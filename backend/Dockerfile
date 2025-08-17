# 1️⃣ Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy all .csproj files recursively
COPY SettlyApi/SettlyApi.csproj ./SettlyApi/
COPY *.csproj .

# Restore dependencies for the main project explicitly
WORKDIR /src/SettlyApi
RUN dotnet restore SettlyApi.csproj

# Copy all source code
COPY SettlyApi/. ./SettlyApi/
COPY . .

# Publish main project explicitly
RUN dotnet publish SettlyApi.csproj -c Release -o /app/publish

# Runtime stage (smaller image)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "SettlyApi.dll"]
