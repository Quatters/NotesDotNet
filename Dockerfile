# build .NET app:
FROM mcr.microsoft.com/dotnet/core/sdk:5.0 as buildnet

WORKDIR /src

COPY src/NotesDotNet.WebApi/NotesDotNet.WebApi.csproj .
RUN dotnet restore

COPY src/NotesDotNet.WebApi .
RUN dotnet build -c Release

# RUN dotnet test ...
RUN dotnet publish -c Release -o /dist


# build Vue app:
FROM node:alpine as buildvue

WORKDIR /src

COPY src/notes-dotnet-vue/package.json .
RUN npm install

# webpack build
COPY src/notes-dotnet-vue .
RUN npm run build


# Copy results from both places into production container:
FROM mcr.microsoft.com/dotnet/core/aspnet:5.0

WORKDIR /app

ENV ASPNETCORE_ENVIRONMENT Production
ENV ASPNETCORE_URLS http://+:5000
EXPOSE 5000

# copy .net content
COPY --from=buildnet /dist .
# copy vue content into .net's static files folder:
COPY --from=buildvue /src/dist /app/wwwroot

CMD ["dotnet", "NetApi.dll"]