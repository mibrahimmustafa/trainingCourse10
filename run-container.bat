@echo off
echo ========================================================
echo   Starting Hamat Course Demo in Docker Container
echo ========================================================

REM Check if Docker is running
docker info >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [!] Docker engine is not running.
    echo [*] Attempting to start Docker Desktop...
    if exist "C:\Program Files\Docker\Docker\Docker Desktop.exe" (
        start "" "C:\Program Files\Docker\Docker\Docker Desktop.exe"
        echo [*] Waiting for Docker daemon to become ready...
        :WAIT_DOCKER
        timeout /t 3 /nobreak >nul
        docker info >nul 2>&1
        if %ERRORLEVEL% NEQ 0 (
            echo     Waiting for Docker engine...
            goto WAIT_DOCKER
        )
        echo [OK] Docker engine is ready!
    ) else (
        echo [!] Could not locate Docker Desktop automatically.
        echo [*] Please launch Docker Desktop manually from your Start Menu, then re-run this script.
        pause
        exit /b 1
    )
)

echo [*] Building and launching container...
docker compose up -d --build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   Application successfully started in Docker Container!
    echo   URL: http://localhost:8080
    echo ========================================================
    echo.
    start http://localhost:8080
) else (
    echo [!] Failed to start container. Check Docker logs above.
)

pause
