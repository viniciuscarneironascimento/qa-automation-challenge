describe('Web test features Spotify', ()=>{

    const spotify = {
        token: 'BQB9w8ogjUpasfIqwwZVU7RdL9jbC_iUg0y6KKyuuk3ebT0kI4POxnw0RP63E_9ZiMnJTBsUARlhrJNTzjN__W5b1tKVvzf1MTI5eOBkivZCW-jUHxmYDKMeNS0YxR4V4cLKSMuMsTQm0hpAVX2jGc3dIKhbTary1xF7k0l_BrTjrE7JWY5TltcSY_a7QpoNasiOiifwvWa1LQIFsL2puvNOgMTMEf0pS6AIs5dziB-5RiX1jcc6',
        idTrack: '11dFghVXANMlKmJXsNCbNl',
        idSpotify: '6rqhFgbbKwnb9MLmUQDhG6',
        idAlbum:'4aawyAB9vmqN3uQ7FjRGTy',
        idPlaylist: '3cEYpjA9oz9GiPac4AsH4n'
    }

    it('Playlist get all status', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.spotify.com/v1/users/vinicius/playlists',
                auth: {
                'bearer': spotify.token
                }
        }).then(res => {
        expect(res.status).to.be.equal(200)
        })
    })

    it('Get track', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.spotify.com/v1/tracks/' + spotify.idTrack,
                auth: {
                'bearer': spotify.token
                }
        }).then(res => {
        expect(res.status).to.be.equal(200)
        })
    })

    it('Get Several Tracks', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.spotify.com/v1/tracks/' + spotify.idSpotify,
                auth: {
                'bearer': spotify.token
                }
        }).then(res => {
        expect(res.status).to.be.equal(200)
        })
    })

    it('Get an Album', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.spotify.com/v1/albums/' + spotify.idAlbum,
                auth: {
                'bearer': spotify.token
                }
        }).then(res => {
        expect(res.status).to.be.equal(200)
        })
    })

    it('Get Several Albums', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.spotify.com/v1/tracks/' + spotify.idSpotify,
                auth: {
                'bearer': spotify.token
                }
        }).then(res => {
        expect(res.status).to.be.equal(200)
        })
    })

    it('Get an Albums Tracks', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.spotify.com/v1/albums/' + spotify.idAlbum + '/tracks',
                auth: {
                'bearer': spotify.token
                }
        }).then(res => {
        expect(res.status).to.be.equal(200)
        })
    })

    it('Get a Playlists Tracks', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.spotify.com/v1/playlists/' + spotify.idPlaylist + '/tracks',
                auth: {
                'bearer': spotify.token
                }
        }).then(res => {
        expect(res.status).to.be.equal(200)
        })
    })

    it('Get a Users Saved Tracks', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.spotify.com/v1/me/tracks',
                auth: {
                'bearer': spotify.token
                }
        }).then(res => {
        expect(res.status).to.be.equal(200)
        })
    })
})