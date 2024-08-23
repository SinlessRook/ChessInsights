
let Profile_Username = "";
let Profile_Followers = 0;
let Profile_Country = "";
let Profile_League = "";
let Profile_URL = "";
let opening_white = {};
let opening_black = {};
let result_white = {};
let result_black = {};
let time = 0;
let matches_white = 0;
let matches_black = 0;
let won_white = 0;
let lost_white = 0;
let draw_white = 0;
let won_black = 0;
let lost_black = 0;
let draw_black = 0;
let StatsRapid = [];
let StatsBullet = [];
let StatsBlitz = [];
let StatsPuzzle = [];
let OpeningMostUsedWhite={};
let OpeningMostUsedBlack={};

const fetchDetails = async (Username) => {
    try {
        await fetchprofile(Username);
    } catch (error) {
        alert(error);
        return true;
    }
    setAllZero();
    await fetchStats(Username);
    const lst = (await fetchinfo(Username))['archives']
    for (let index = 0; index < lst.length; index++) {
        const element = lst[index];
        await fetchMatches(element, Username);

    }

    let openingTempWhite = findMostUsedOpening(opening_white);
    let openingTempBlack = findMostUsedOpening(opening_black);
    OpeningMostUsedWhite[openingTempWhite] = opening_white[openingTempWhite];
    OpeningMostUsedBlack[openingTempBlack] = opening_black[openingTempBlack];
    delete opening_white[openingTempWhite];
    delete opening_black[openingTempBlack];
    for (let index = 0; index < 9; index++) {
        openingTempWhite = findMostUsedOpening(opening_white);
        openingTempBlack = findMostUsedOpening(opening_black);
        OpeningMostUsedWhite[openingTempWhite] = opening_white[openingTempWhite];
        OpeningMostUsedBlack[openingTempBlack] = opening_black[openingTempBlack];
        delete opening_white[openingTempWhite]
        delete opening_black[openingTempBlack];
    }
    // console.log(OpeningMostUsedWhite);
    // console.log(OpeningMostUsedBlack);

    // const result_time = convertSeconds(time);
    // console.log(`Username: ${Profile_Username}`);
    // console.log(`Followers: ${Profile_Followers}`);
    // console.log(`Country: ${Profile_Country}`);
    // console.log(`League: ${Profile_League}`);
    // console.log(`URL: ${Profile_URL}`);
    // console.log(`Total Matches: ${matches_white + matches_black}`);
    // console.log(`Matches won: ${won_white + won_black}`);
    // console.log(`Matches drawn: ${draw_white + draw_black}`);
    // console.log(`Matches lost: ${lost_white + lost_black}`);
    // console.log(`Matches with White: ${matches_white}`);
    // console.log(`Matches with Black: ${matches_black}`);
    // console.log(`Matches won by White: ${won_white}`);
    // console.log(`Matches won by Black: ${won_black}`);
    // console.log(`Matches drawn by White: ${draw_white}`);
    // console.log(`Matches drawn by Black: ${draw_black}`);
    // console.log(`Matches lost by White: ${lost_white}`);
    // console.log(`Matches lost by Black: ${lost_black}`);
    // console.log(`Total Time:${result_time.days} days ${result_time.hours} hours ${result_time.minutes} minutes ${result_time.seconds} seconds`);
    // console.log(`Termination of white:${(JSON.stringify(result_white))}`);
    // console.log(`Termination of black:${(JSON.stringify(result_black))}`);
    // console.log(`opening_white: ${(JSON.stringify(opening_white))}`);
    // console.log(`opening_black: ${(JSON.stringify(opening_black))}`);
    // console.log('Rapid:', StatsRapid);
    // console.log('Bullet:', StatsBullet);
    // console.log('Blitz:', StatsBlitz);
    // console.log('Puzzle:', StatsPuzzle);

    return true;

}
const setAllZero = () => {
    time = 0;
    opening_white = {};
    opening_black = {};
    result_white = {};
    result_black = {};
    time = 0;
    matches_white = 0;
    matches_black = 0;
    won_white = 0;
    lost_white = 0;
    draw_white = 0;
    won_black = 0;
    lost_black = 0;
    draw_black = 0;
    StatsRapid = [];
    StatsBullet = [];
    StatsBlitz = [];
    StatsPuzzle = [];
    OpeningMostUsedBlack={}
    OpeningMostUsedWhite={}
}
const fetchprofile = async (Username) => {
    const info = await fetch("https://api.chess.com/pub/player/" + Username).then(res => res.json())
    if (info['code'] === 0) {
        throw new Error("Invalid Username");
    } else {
        Profile_Username = info['username'];
        Profile_Followers = info['followers'];
        Profile_League = info['league'];
        Profile_URL = info['url'];
        const country = await fetch(info['country']).then(res => res.json())
        Profile_Country = country['name'];
    }
}

const fetchStats = async (Username) => {
    const info = await fetch("https://api.chess.com/pub/player/" + Username + "/stats").then(res => res.json())
    try {
        StatsRapid[0] = info['chess_rapid']['record']['win'];
    } catch (error) {
        StatsRapid[0] = 0;
    }
    try {
        StatsRapid[1] = info['chess_rapid']['record']['loss'];
    } catch (error) {
        StatsRapid[1] = 0;
    }
    try {
        StatsRapid[2] = info['chess_rapid']['record']['draw'];
    } catch (error) {
        StatsRapid[2] = 0;
    }
    try {
        StatsRapid[3] = info['chess_rapid']['last']['rating'];
    } catch (error) {
        StatsRapid[3] = 0;
    }
    try {
        StatsRapid[4] = info['chess_rapid']['best']['rating'];
    } catch (error) {
        StatsRapid[4] = 0;
    }
    try {
        StatsBlitz[0] = info['chess_blitz']['record']['win'];
    } catch (error) {
        StatsBlitz[0] = 0;
    }
    try {
        StatsBlitz[1] = info['chess_blitz']['record']['loss'];
    } catch (error) {
        StatsBlitz[1] = 0;
    }
    try {
        StatsBlitz[2] = info['chess_blitz']['record']['draw'];
    } catch (error) {
        StatsBlitz[2] = 0;
    }
    try {
        StatsBlitz[3] = info['chess_blitz']['last']['rating'];
    } catch (error) {
        StatsBlitz[3] = 0;
    }
    try {
        StatsBlitz[4] = info['chess_blitz']['best']['rating'];
    } catch (error) {
        StatsBlitz[4] = 0;
    }
    try {
        StatsBullet[0] = info['chess_bullet']['record']['win'];
    } catch (error) {
        StatsBullet[0] = 0;
    }
    try {
        StatsBullet[1] = info['chess_bullet']['record']['loss'];
    } catch (error) {
        StatsBullet[1] = 0;
    }
    try {
        StatsBullet[2] = info['chess_bullet']['record']['draw'];
    } catch (error) {
        StatsBullet[2] = 0;
    }
    try {
        StatsBullet[3] = info['chess_bullet']['last']['rating'];
    } catch (error) {
        StatsBullet[3] = 0;
    }
    try {
        StatsBullet[4] = info['chess_bullet']['best']['rating'];
    } catch (error) {
        StatsBullet[4] = 0;
    }
    try {
        StatsPuzzle[0] = info['puzzle_rush']['best']['total_attempts'];
    } catch (error) {
        StatsPuzzle[0] = 0;
    }
    try {
        StatsPuzzle[1] = info['puzzle_rush']['best']['score'];
    } catch (error) {
        StatsPuzzle[1] = 0;
    }
}

const fetchinfo = async (Username) => {
    if (Username === "") return
    return await fetch("https://api.chess.com/pub/player/" + Username + "/games/archives").then(res => res.json())
}

const fetchMatches = async (url, Username) => {

    const lst = (await fetch(url).then(res => res.json()))['games']

    for (let index = 0; index < lst.length; index++) {
        const element = lst[index];
        let array = (element['pgn']);
        if (typeof (array) === 'string') {
            array = array.split('\n');
            await extract_data_from_each(array, Username);
        }
    }
}
const extract_data_from_each = async (array, Username) => {
    const index_array = [4, 6, 10, 14, 15, 16, 17, 19];
    //4 is the user with white pieces
    //6 is the user with black pieces
    //10 is the opening
    //14 is the Black elo
    //15 is the Time control
    //16 is the Termination
    //17 is the Start time
    //19 is the End time

    // Extract the string from array[4]
    const element = array[4].split(' ');

    // Extract and clean the username
    let username_in_data = element[1].split(']').join('').trim().toLowerCase();
    username_in_data = username_in_data.split("\"").join('').trim();
    const result = array[6].split(' ')[1].split(']').join('').trim();

    // Extract and clean the opening
    let opening = array[10].split(' ')[1].split(']').join('').trim();
    opening = opening.split("https://www.chess.com/openings/").join('');
    opening = opening.split("\"").join('');

    // Extract and clean the time
    if (array[17].includes("Start") && array[19].includes("End")) {
        let start_time = array[17].split(' ')[1].split(']').join('').trim();
        let end_time = array[19].split(' ')[1].split(']').join('').trim();
        start_time = start_time.split("\"").join('');
        end_time = end_time.split("\"").join('');
        // Extract the time difference
        isNaN(calculateTimeDifference(start_time, end_time)) ? time = time : time += calculateTimeDifference(start_time, end_time);
    }

    // Extract and clean the termination
    let termination;
    if (array[16].includes("Termination")) {
        termination = array[16].split(' ')[4].split(']').join('').trim();
        termination = termination.split("\"").join('');
    }
    else {
        termination = 'unknown';
    }





    // Compare the usernames
    if (username_in_data === Username.toLowerCase()) {
        // Check for white
        matches_white++;

        //Result

        if (equals(result, "1-0")) {
            won_white++;
            //Opening_Checking
            if (opening_white[opening]) {
                opening_white[opening][0]++;
            }
            else {
                opening_white[opening] = [1, 0, 0];
            }

            //Termination_checking
            if (result_white[termination]) {
                result_white[termination][0]++;
            }
            else {
                result_white[termination] = [1, 0, 0];
            }
        }
        else if ((equals(result, "1/2-1/2"))) {
            draw_white++;
            //Opening_Checking
            if (opening_white[opening]) {
                opening_white[opening][1]++;
            }
            else {
                opening_white[opening] = [0, 1, 0];
            }

            //Termination_checking
            if (result_white[termination]) {
                result_white[termination][1]++;
            }
            else {
                result_white[termination] = [0, 1, 0];
            }
        }
        else {
            lost_white++;
            //Opening_Checking
            if (opening_white[opening]) {
                opening_white[opening][2]++;
            }
            else {
                opening_white[opening] = [0, 0, 1];
            }

            //Termination_checking
            if (result_white[termination]) {
                result_white[termination][2]++;
            }
            else {
                result_white[termination] = [0, 0, 1];
            }
        }
    } else {
        // Check for black
        //Result
        matches_black++;
        if (equals(result, "0-1")) {
            won_black++;
            //Opening_Checking
            if (opening_black[opening]) {
                opening_black[opening][0]++;
            }
            else {
                opening_black[opening] = [1, 0, 0];
            }

            //Termination_checking
            if (result_black[termination]) {
                result_black[termination][0]++;
            }
            else {
                result_black[termination] = [1, 0, 0];
            }
        }

        else if ((equals(result, "1/2-1/2"))) {
            draw_black++;
            if (opening_black[opening]) {
                opening_black[opening][1]++;
            }
            else {
                opening_black[opening] = [0, 1, 0];
            }

            //Termination_checking
            if (result_black[termination]) {
                result_black[termination][1]++;
            }
            else {
                result_black[termination] = [0, 1, 0];
            }
        }
        else {
            lost_black++;
            //Opening_Checking
            if (opening_black[opening]) {
                opening_black[opening][2]++;
            }
            else {
                opening_black[opening] = [0, 0, 1];
            }
            //Termination_checking
            if (result_black[termination]) {
                result_black[termination][2]++;
            }
            else {
                result_black[termination] = [0, 0, 1];
            }
        }
    }
};
function equals(a, b) {
    let result;
    result = a.split("\"").join('').trim().toLowerCase();
    return result == b;
}

function calculateTimeDifference(startTime, endTime) {

    const Start = startTime.split(':');
    const End = endTime.split(':');
    const StartResult = parseInt(Start[0]) * 3600 + parseInt(Start[1]) * 60 + parseInt(Start[2]);
    const EndResult = parseInt(End[0]) * 3600 + parseInt(End[1]) * 60 + parseInt(End[2]);
    return (EndResult - StartResult);
}

function convertSeconds(seconds) {
    const days = Math.floor(seconds / (24 * 3600));
    seconds %= (24 * 3600);

    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    const minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

const findMostUsedOpening = (obj) => {
    let opening = "";
    let max = 0;
    for (const key in obj) {
        if (obj[key][0] > max) {
            max = obj[key][0] + obj[key][1] + obj[key][2];
            opening = key;
        }
    }
    return opening;
}

export { fetchDetails, convertSeconds }
export {
    Profile_Username, Profile_Followers, Profile_Country, Profile_League, Profile_URL, StatsRapid, StatsBullet, StatsBlitz, StatsPuzzle,
    won_white, lost_white, draw_white, won_black, lost_black, draw_black, time,OpeningMostUsedWhite,OpeningMostUsedBlack
}
