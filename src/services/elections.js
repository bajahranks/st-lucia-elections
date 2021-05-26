import React from "react";

class Elections {
  votesPerc(votes, votesCast) {
    return Math.round((votes/votesCast) * 100)
  }

  votes(results, districtCode, pollingStationCode, candidateNumber) {
    let votes = 0;
    let votesCast = 0;

    results && results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode) {

        switch (candidateNumber) {
          case 1:
            votes += result.candidate1Votes;
            break;
          case 2:
            votes += result.candidate2Votes;
            break;
          case 3:
            votes += result.candidate3Votes;
            break;
          case 4:
            votes += result.candidate4Votes;
            break;
          case 5:
            votes += result.candidate5Votes;
            break;
          case 6:
            votes += result.candidate6Votes;
            break;
          default:
        }
        votesCast += result.votesCast;
      }
    })
    return (
      <>
        <th>{votes} {' '} ({this.votesPerc(votes, votesCast)}%)</th>
      </>
    )
  }

  votesBySection(results, districtCode, pollingStationCode, sectionCode, candidateNumber) {
    let votes = 0;

    results && results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode &&
        result.section.name === sectionCode) {

        switch (candidateNumber) {
          case 1:
            votes += result.candidate1Votes;
            break;
          case 2:
            votes += result.candidate2Votes;
            break;
          case 3:
            votes += result.candidate3Votes;
            break;
          case 4:
            votes += result.candidate4Votes;
            break;
          case 5:
            votes += result.candidate5Votes;
            break;
          case 6:
            votes += result.candidate6Votes;
            break;
          default:
        }
      }
    })
    return (
      <>
        <td>{votes}</td>
      </>
    )
  }

  rejectedVotes(results, districtCode, pollingStationCode) {
    let votes = 0;
    let votesCast = 0;

    results && results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode) {

        votes += result.rejectedVotes;
        votesCast += result.votesCast;
      }
    })
    return (
      <>
        <th>{votes} {' '} ({this.votesPerc(votes, votesCast)}%)</th>
      </>
    )
  }

  rejectedVotesBySection(results, districtCode, pollingStationCode, sectionCode) {
    let votes = 0;

    results && results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode &&
        result.section.name === sectionCode) {

        votes = result.rejectedVotes;
      }
    })
    return (
      <>
        <td>{votes}</td>
      </>
    )
  }

  votesCast(results, districtCode, pollingStationCode) {
    let votes = 0;
    let registeredVoters = 0;

    results && results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode) {

        votes += result.votesCast;
        registeredVoters += result.registeredVoters;
      }
    })
    return (
      <>
        <th>{votes} {' '} ({this.votesPerc(votes, registeredVoters)}%)</th>
      </>
    )
  }

  votesCastBySection(results, districtCode, pollingStationCode, sectionCode) {
    let votes = 0;

    results && results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode &&
        result.section.name === sectionCode) {

        votes = result.votesCast;
      }
    })
    return (
      <>
        <td>{votes}</td>
      </>
    )
  }

  registeredVoters(results, districtCode, pollingStationCode) {
    let votes = 0;

    results && results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode) {

        votes += result.registeredVoters;
      }
    })
    return (
      <>
        <th>{votes}</th>
      </>
    )
  }

  registeredVotersBySection(results, districtCode, pollingStationCode, sectionCode) {
    let votes = 0;

    results && results.forEach(result => {
      if (result.district.code === districtCode &&
        result.pollingStation.code === pollingStationCode &&
        result.section.name === sectionCode) {

        votes = result.registeredVoters;
      }
    })
    return (
      <>
        <td>{votes}</td>
      </>
    )
  }
}

export default new Elections();