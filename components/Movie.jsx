import React from 'react';

class Movie extends React.Component {
    render() {
        var object = {
            adult: false,
            backdrop_path: "/bIlYH4l2AyYvEysmS2AOfjO7Dn8.jpg",
            genre_ids: [],
            id: 87101,
            original_language: "en",
            original_title: "Terminator Genisys",
            overview: "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
            popularity: 14.757907,
            poster_path: "/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg",
            release_date: "2015-06-23",
            title: "Terminator Genisys",
            video: false,
            vote_average: 6.06,
            vote_count: 1841
        };

        return <div>
            <p>{this.props.original_title}</p>
            <p>{this.props.overview}</p>
            <p>Date: {this.props.release_date}</p>
            <p>Vote: {this.props.vote_average}</p>
            <p>Nº votes: {this.props.vote_count}</p>
        </div>
    }
}