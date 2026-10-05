function SearchStudent({ search, setSearch }) {

    return (
        <input
            type="text"
            placeholder="Search by ID or Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}

export default SearchStudent;