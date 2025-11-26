export function PricingTable() {
  return (
    <section id="acc" className="py-16 sm:py-20 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4" style={{ fontWeight: 600 }}>
            ACC-Covered Acupuncture Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Affordable acupuncture treatment options with ACC coverage for injury-related pain relief
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-md overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left text-foreground" style={{ fontWeight: 600 }}>
                    Category
                  </th>
                  <th className="px-6 py-4 text-center text-foreground" style={{ fontWeight: 600 }}>
                    Initial
                  </th>
                  <th className="px-6 py-4 text-center text-foreground" style={{ fontWeight: 600 }}>
                    Follow-up
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-5 text-foreground" style={{ fontWeight: 500 }}>
                    ACC Acupuncture
                  </td>
                  <td className="px-6 py-5 text-center text-primary text-xl" style={{ fontWeight: 600 }}>
                    $45
                  </td>
                  <td className="px-6 py-5 text-center text-primary text-xl" style={{ fontWeight: 600 }}>
                    $20
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-5 text-foreground" style={{ fontWeight: 500 }}>
                    Gold Card / Student
                  </td>
                  <td className="px-6 py-5 text-center text-primary text-xl" style={{ fontWeight: 600 }}>
                    $25
                  </td>
                  <td className="px-6 py-5 text-center text-primary text-xl" style={{ fontWeight: 600 }}>
                    $10
                  </td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-5 text-foreground" style={{ fontWeight: 500 }}>
                    Private Acupuncture
                  </td>
                  <td className="px-6 py-5 text-center text-muted-foreground text-xl" style={{ fontWeight: 600 }}>
                    $120
                  </td>
                  <td className="px-6 py-5 text-center text-muted-foreground text-xl" style={{ fontWeight: 600 }}>
                    $90
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-border">
            <div className="p-6 bg-muted/50">
              <h3 className="text-lg text-foreground mb-4" style={{ fontWeight: 600 }}>
                ACC Acupuncture
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Initial</span>
                <span className="text-2xl text-primary" style={{ fontWeight: 600 }}>$45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Follow-up</span>
                <span className="text-2xl text-primary" style={{ fontWeight: 600 }}>$20</span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg text-foreground mb-4" style={{ fontWeight: 600 }}>
                Gold Card / Student
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Initial</span>
                <span className="text-2xl text-primary" style={{ fontWeight: 600 }}>$25</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Follow-up</span>
                <span className="text-2xl text-primary" style={{ fontWeight: 600 }}>$10</span>
              </div>
            </div>

            <div className="p-6 bg-muted/50">
              <h3 className="text-lg text-foreground mb-4" style={{ fontWeight: 600 }}>
                Private Acupuncture
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Initial</span>
                <span className="text-2xl text-muted-foreground" style={{ fontWeight: 600 }}>$120</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Follow-up</span>
                <span className="text-2xl text-muted-foreground" style={{ fontWeight: 600 }}>$90</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
          * ACC claims require a valid ACC45 form. Student and Gold Card holders must present valid ID at appointment.
        </p>
      </div>
    </section>
  );
}