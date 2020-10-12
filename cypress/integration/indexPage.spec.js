describe("Index page", () => {
  it("Should show limit albums if limit exists in url", function () {
    const limit = 5
    cy.visit(`/?limit=${limit}`)

    cy.get("div[data-name=list-item]").should("have.length", limit)
  })

  it("Should search albums", function () {
    const query = "over"
    cy.visit(`/`)

    cy.get("input").type(query).type("{enter}")

    cy.wait(2000)

    cy.get("div[data-name=list-item]").contains(query)
  })
})
