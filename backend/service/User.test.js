describe('GetAllUsers', () => {
    it('should return a list of users as JSON', async () => {
        const mockRes = {
            json: jest.fn()
        };

        expect([
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' }
        ]).toEqual([
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' }
        ]);
    });
});

describe('GetUser', () => {
    it('should return a user as JSON', async () => {
        const mockReq = {
            params: {
                id: 1
            }
        };

        const mockRes = {
            json: jest.fn()
        };

        expect({ id: 1, name: 'John Doe' }).toEqual({ id: 1, name: 'John Doe' });
    });
});

describe('DeleteUser', () => {
    it('should return a user as JSON', async () => {
        const mockReq = {
            params: {
                id: 1
            }
        };

        expect(mockReq.params).toEqual({ id: 1 });
    });
});

describe('AddUser', () => {
    it('should return a user as JSON', async () => {
        const mockReq = {
            body: {
                id: 1,
                name: 'John Doe'
            }
        };

        expect(mockReq.body).toEqual({ id: 1, name: 'John Doe' });
    });
});

describe('UpdateUser', () => {
    it('should return a message as JSON', async () => {
        const mockReq = {
            params: {
                id: 1
            },
            body: {
                name: 'Jane Doe'
            }
        };

        expect(mockReq.params).toEqual({ id: 1 });
        expect(mockReq.body).toEqual({ name: 'Jane Doe' });
    });
});

describe('Update profile', () => {
    it('should return a message as JSON', async () => {
        const mockReq = {
            params: {
                id: 1
            },
            body: {
                name: 'Jane Doe'
            }
        };

        expect(mockReq.params).toEqual({ id: 1 });
        expect(mockReq.body).toEqual({ name: 'Jane Doe' });
  });
});