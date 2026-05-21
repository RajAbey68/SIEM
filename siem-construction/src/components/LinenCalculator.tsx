"use client";

import React, { useState, useMemo } from "react";
import { 
  Calculator, 
  Check, 
  AlertTriangle, 
  ArrowRight, 
  ShoppingCart, 
  TrendingDown, 
  Info,
  Maximize2
} from "lucide-react";

// Sourcing Suppliers
const SUPPLIERS = {
  split: { name: "SIEM Recommended (Split Sourcing)", desc: "Optimal quality & lowest cost by split-ordering", color: "#549f97" },
  alankara: { name: "Alankara Designs", desc: "Best for sheets & towels", color: "#8b3a1a" },
  bedsheets: { name: "Bedsheets Paradise", desc: "Best for duvet inserts & standard bedding", color: "#a68a5f" },
  raawana: { name: "Raawana Bedding", desc: "Best for duvet covers & mattress protectors", color: "#172c47" }
};

// Sourcing Data Model
const LINEN_ITEMS = [
  {
    id: "bedset",
    name: "Complete Bed Set",
    spec: "1 Super-King Flat Sheet + 2 Pillowcases",
    defaultQty: 50,
    alankara: { price300: 6500, price250: 6500, label: "300TC Egyptian Cotton" },
    bedsheets: { price300: 5750, price250: 5750, label: "250TC Egyptian Cotton" },
    raawana: { price300: 7830, price250: 6750, label: "300TC Cotton vs 250TC" }
  },
  {
    id: "flatsheet",
    name: "Individual Flat Sheet",
    spec: "Approx. 110\"x110\"",
    defaultQty: 100,
    alankara: { price300: 5100, price250: 5100, label: "Premium Sourced (300TC)" },
    bedsheets: { price300: null, price250: null, label: "Sold only as a set" },
    raawana: { price300: 5850, price250: 4970, label: "300TC vs 250TC" }
  },
  {
    id: "pillowcase",
    name: "Individual Pillowcase",
    spec: "18\"x27\"",
    defaultQty: 200,
    alankara: { price300: 700, price250: 700, label: "Premium Sourced (300TC)" },
    bedsheets: { price300: null, price250: null, label: "Sold only as a set" },
    raawana: { price300: 990, price250: 890, label: "300TC vs 250TC" }
  },
  {
    id: "protector",
    name: "Mattress Protector",
    spec: "72\"x78\" (Standard King)",
    defaultQty: 50,
    alankara: { price300: null, price250: null, label: "Not Quoted" },
    bedsheets: { price300: 5400, price250: 5400, label: "4-Corner Elastic" },
    raawana: { price300: 7870, price250: 6900, label: "Full Fitted (300TC) vs 4-Corner (250TC)" }
  },
  {
    id: "duvetinsert",
    name: "Duvet Insert",
    spec: "110\"x110\" (Large/Super-King)",
    defaultQty: 50,
    alankara: { price300: null, price250: null, label: "Not Quoted" },
    bedsheets: { price300: 7850, price250: 7850, label: "250 GSM Comfort" },
    raawana: { price300: null, price250: null, label: "Not Quoted (Luxury Gel Available)" }
  },
  {
    id: "duvetcover",
    name: "Duvet Cover",
    spec: "110\"x110\" (Large/Super-King)",
    defaultQty: 50,
    alankara: { price300: null, price250: null, label: "Not Quoted" },
    bedsheets: { price300: null, price250: null, label: "Not Quoted" },
    raawana: { price300: 12500, price250: 11250, label: "300TC vs 250TC" }
  },
  {
    id: "bathtowel",
    name: "Bath Towel",
    spec: "27\"x54\"",
    defaultQty: 100,
    alankara: { price300: 2500, price250: 2500, label: "Premium Towel" },
    bedsheets: { price300: 3000, price250: 3000, label: "650 GSM High Absorbency" },
    raawana: { price300: 2970, price250: 2970, label: "650 GSM High Absorbency" }
  },
  {
    id: "pooltowel",
    name: "Pool Towel",
    spec: "36\"x72\"",
    defaultQty: 100,
    alankara: { price300: 4900, price250: 4900, label: "Premium Towel" },
    bedsheets: { price300: null, price250: null, label: "Not Quoted" },
    raawana: { price300: 4950, price250: 4950, label: "650 GSM High Absorbency" }
  }
];

export default function LinenCalculator() {
  // Input parameters
  const [quality, setQuality] = useState<"luxury" | "standard">("luxury");
  const [strategy, setStrategy] = useState<"split" | "alankara" | "bedsheets" | "raawana">("split");
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    LINEN_ITEMS.forEach(item => {
      initial[item.id] = item.defaultQty;
    });
    return initial;
  });

  // Inquiry Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: ""
  });

  const handleQtyChange = (id: string, value: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, value)
    }));
  };

  // Helper to resolve specific items per supplier and tier
  const getItemPrice = (itemId: string, supplier: "alankara" | "bedsheets" | "raawana", isLuxury: boolean) => {
    const item = LINEN_ITEMS.find(i => i.id === itemId);
    if (!item) return null;
    
    const supplierQuote = item[supplier];
    return isLuxury ? supplierQuote.price300 : supplierQuote.price250;
  };

  // Calculate the "Pure Sourced Cost" (only the items the selected supplier actually quoted)
  const getPureSupplierCost = (supplier: "alankara" | "bedsheets" | "raawana", isLuxury: boolean) => {
    let total = 0;
    LINEN_ITEMS.forEach(item => {
      const price = getItemPrice(item.id, supplier, isLuxury);
      if (price !== null) {
        total += price * quantities[item.id];
      }
    });
    return total;
  };

  // Resolve the "SIEM Recommended Split" optimal choice per item
  const getOptimalSupplierForItem = (itemId: string, isLuxury: boolean): { supplier: "alankara" | "bedsheets" | "raawana"; price: number } => {
    if (itemId === "bedset") {
      // Luxury (300TC) Alankara is Rs 6500 (best price & 300TC!). Standard (250TC) Bedsheets is Rs 5750.
      if (isLuxury) return { supplier: "alankara", price: 6500 };
      return { supplier: "bedsheets", price: 5750 };
    }
    if (itemId === "flatsheet") {
      if (isLuxury) return { supplier: "alankara", price: 5100 };
      return { supplier: "raawana", price: 4970 };
    }
    if (itemId === "pillowcase") {
      // Alankara 300TC is Rs 700 each, which is cheaper than Raawana standard (250TC) at Rs 890!
      return { supplier: "alankara", price: 700 };
    }
    if (itemId === "protector") {
      // Bedsheets is Rs 5400 (4-corner). Raawana is Rs 7870 (Full fitted luxury) or Rs 6900 (4-corner standard).
      if (isLuxury) return { supplier: "raawana", price: 7870 }; // Fitted sheet is highly recommended for luxury setup
      return { supplier: "bedsheets", price: 5400 };
    }
    if (itemId === "duvetinsert") {
      return { supplier: "bedsheets", price: 7850 };
    }
    if (itemId === "duvetcover") {
      if (isLuxury) return { supplier: "raawana", price: 12500 };
      return { supplier: "raawana", price: 11250 };
    }
    if (itemId === "bathtowel") {
      return { supplier: "alankara", price: 2500 };
    }
    if (itemId === "pooltowel") {
      return { supplier: "alankara", price: 4900 };
    }

    // Fallback
    return { supplier: "alankara", price: 0 };
  };

  // Fully Equip Sourcing Model:
  // If a supplier does not quote an item, we automatically fulfill it with the cheapest alternative.
  // This calculates a REALISTIC side-by-side total for buying everything.
  const getFulfillmentSupplier = (itemId: string, supplier: "alankara" | "bedsheets" | "raawana", isLuxury: boolean): { supplier: string; price: number; isSubstituted: boolean } => {
    const directPrice = getItemPrice(itemId, supplier, isLuxury);
    if (directPrice !== null) {
      return { supplier: SUPPLIERS[supplier].name, price: directPrice, isSubstituted: false };
    }
    
    // Substitute with cheapest available alternative
    const alternatives: Array<{ s: "alankara" | "bedsheets" | "raawana"; p: number }> = [];
    (["alankara", "bedsheets", "raawana"] as const).forEach(altS => {
      const p = getItemPrice(itemId, altS, isLuxury);
      if (p !== null) alternatives.push({ s: altS, p });
    });

    if (alternatives.length === 0) {
      return { supplier: "N/A", price: 0, isSubstituted: true };
    }

    // Sort by price ascending
    alternatives.sort((a, b) => a.p - b.p);
    return { supplier: SUPPLIERS[alternatives[0].s].name, price: alternatives[0].p, isSubstituted: true };
  };

  // Sourcing Calculations
  const calculatedBudgets = useMemo(() => {
    const isLuxury = quality === "luxury";

    // 1. SIEM Split Sourcing
    let splitTotal = 0;
    const splitBreakdown = LINEN_ITEMS.map(item => {
      const opt = getOptimalSupplierForItem(item.id, isLuxury);
      const cost = opt.price * quantities[item.id];
      splitTotal += cost;
      return {
        itemId: item.id,
        supplierName: SUPPLIERS[opt.supplier].name,
        price: opt.price,
        cost,
        isSubstituted: false
      };
    });

    // 2. Individual Supplier Totals (with alternative substitutions for unquoted items)
    const alankaraBreakdown = LINEN_ITEMS.map(item => {
      const res = getFulfillmentSupplier(item.id, "alankara", isLuxury);
      return { itemId: item.id, supplierName: res.supplier, price: res.price, cost: res.price * quantities[item.id], isSubstituted: res.isSubstituted };
    });
    const alankaraTotal = alankaraBreakdown.reduce((sum, item) => sum + item.cost, 0);

    const bedsheetsBreakdown = LINEN_ITEMS.map(item => {
      const res = getFulfillmentSupplier(item.id, "bedsheets", isLuxury);
      return { itemId: item.id, supplierName: res.supplier, price: res.price, cost: res.price * quantities[item.id], isSubstituted: res.isSubstituted };
    });
    const bedsheetsTotal = bedsheetsBreakdown.reduce((sum, item) => sum + item.cost, 0);

    const raawanaBreakdown = LINEN_ITEMS.map(item => {
      const res = getFulfillmentSupplier(item.id, "raawana", isLuxury);
      return { itemId: item.id, supplierName: res.supplier, price: res.price, cost: res.price * quantities[item.id], isSubstituted: res.isSubstituted };
    });
    const raawanaTotal = raawanaBreakdown.reduce((sum, item) => sum + item.cost, 0);

    return {
      split: { total: splitTotal, breakdown: splitBreakdown },
      alankara: { total: alankaraTotal, breakdown: alankaraBreakdown },
      bedsheets: { total: bedsheetsTotal, breakdown: bedsheetsBreakdown },
      raawana: { total: raawanaTotal, breakdown: raawanaBreakdown }
    };
  }, [quality, quantities]);

  // Determine active strategy total and breakdown
  const activeBudget = calculatedBudgets[strategy];

  // Savings calculations (Comparison vs worst-case or single-supplier)
  const maxSingleSupplierCost = Math.max(
    calculatedBudgets.alankara.total,
    calculatedBudgets.bedsheets.total,
    calculatedBudgets.raawana.total
  );
  
  const estimatedSavings = maxSingleSupplierCost - calculatedBudgets.split.total;
  const savingsPercent = maxSingleSupplierCost > 0 ? ((estimatedSavings / maxSingleSupplierCost) * 100).toFixed(0) : "0";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const formatCurrency = (val: number) => {
    return `Rs. ${val.toLocaleString("en-US")}`;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      {/* Introduction Card */}
      <div
        style={{
          background: "#fff",
          border: "1px solid var(--brand-border)",
          borderTop: "3.5px solid var(--brand-teal)",
          padding: "2rem",
          borderRadius: "4px"
        }}
      >
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "var(--brand-navy)", marginBottom: "0.75rem" }}>
          Linen Procurement Strategy Hub
        </h2>
        <p style={{ color: "var(--brand-body)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
          SIEM manages complex, luxury hospitality fit-outs and FF&E procurement under a single, transparent contract. 
          Linen represents a massive operational cost for hotels and villas, where price is often decoupled from real quality. 
          Use our interactive simulator below to test supplier quotes, adjust order volumes, and see how our optimized split-sourcing strategy saves budgets while preserving 5-star specifications.
        </p>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1.5rem" }} className="intro-grid">
          <div style={{ background: "var(--brand-teal-light)", padding: "1.25rem", borderRadius: "4px", borderLeft: "4px solid var(--brand-teal)" }}>
            <h4 style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-teal-dark)", marginBottom: "0.4rem" }}>
              💎 Quality vs. Price Rule
            </h4>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--brand-navy)", lineHeight: 1.6, margin: 0 }}>
              **Alankara Designs** offers the premier price-to-quality ratio, supplying 300 Thread Count (TC) sets for **Rs 6,500**. Bedsheets Paradise charges Rs 5,750 for only 250TC, whereas Raawana Bedding charges a steep Rs 7,830 for 300TC.
            </p>
          </div>
          <div style={{ background: "rgba(196, 98, 45, 0.06)", padding: "1.25rem", borderRadius: "4px", borderLeft: "4px solid var(--terra-500)" }}>
            <h4 style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 700, color: "var(--terra-600)", marginBottom: "0.4rem" }}>
              🧩 Split Order Advantage
            </h4>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--brand-navy)", lineHeight: 1.6, margin: 0 }}>
              No single supplier is highly competitive across all items. We recommend splitting orders: Alankara for sheets and towels, Bedsheets Paradise for duvet inserts, and Raawana for duvet covers and fitted mattress protectors.
            </p>
          </div>
        </div>
      </div>

      {/* Simulator Section */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "2rem" }} className="simulator-layout">
        
        {/* LEFT PANEL: Inputs & Configuration */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          {/* Main Controls Card */}
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--brand-border)",
              padding: "1.5rem",
              borderRadius: "4px"
            }}
          >
            <h3 style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem", fontWeight: 700, color: "#333", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem", borderBottom: "1px solid #eee", paddingBottom: "0.5rem" }}>
              1. Project Specifications
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Quality Selector */}
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 700, color: "#555", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                  Bedding Thread Count / Quality Tier
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  <button
                    type="button"
                    onClick={() => setQuality("luxury")}
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: "3px",
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      border: quality === "luxury" ? "2px solid var(--brand-navy)" : "1.5px solid var(--brand-border)",
                      background: quality === "luxury" ? "rgba(23, 44, 71, 0.05)" : "#fff",
                      color: "var(--brand-navy)",
                      transition: "all 0.2s"
                    }}
                  >
                    👑 Luxury Spec (300 Thread Count)
                  </button>
                  <button
                    type="button"
                    onClick={() => setQuality("standard")}
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: "3px",
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      border: quality === "standard" ? "2px solid var(--brand-navy)" : "1.5px solid var(--brand-border)",
                      background: quality === "standard" ? "rgba(23, 44, 71, 0.05)" : "#fff",
                      color: "var(--brand-navy)",
                      transition: "all 0.2s"
                    }}
                  >
                    🛌 Standard Spec (250 Thread Count)
                  </button>
                </div>
              </div>

              {/* Sourcing Strategy Selector */}
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-ui)", fontSize: "0.78rem", fontWeight: 700, color: "#555", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                  Sourcing Strategy
                </label>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {Object.entries(SUPPLIERS).map(([key, info]) => {
                    const active = strategy === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setStrategy(key as any)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.75rem 1rem",
                          borderRadius: "3px",
                          fontFamily: "var(--font-ui)",
                          fontSize: "0.82rem",
                          fontWeight: active ? 600 : 400,
                          cursor: "pointer",
                          border: active ? `2px solid ${info.color}` : "1.5px solid var(--brand-border)",
                          background: active ? `${info.color}11` : "#fff",
                          color: "#333",
                          textAlign: "left",
                          transition: "all 0.2s"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: info.color }} />
                          <div>
                            <strong>{info.name}</strong>
                            <div style={{ fontSize: "0.7rem", color: "#666", marginTop: "2px" }}>{info.desc}</div>
                          </div>
                        </div>
                        {active && <Check size={16} style={{ color: info.color }} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Quantities Adjustment Card */}
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--brand-border)",
              padding: "1.5rem",
              borderRadius: "4px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", borderBottom: "1px solid #eee", paddingBottom: "0.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-ui)", fontSize: "0.95rem", fontWeight: 700, color: "#333", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                2. Sourcing Volumes (Quantities)
              </h3>
              <button 
                type="button" 
                onClick={() => {
                  const reset: Record<string, number> = {};
                  LINEN_ITEMS.forEach(i => { reset[i.id] = i.defaultQty; });
                  setQuantities(reset);
                }}
                style={{ background: "none", border: "none", color: "var(--brand-teal-dark)", fontSize: "0.72rem", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font-ui)", textTransform: "uppercase" }}
              >
                Reset Default
              </button>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {LINEN_ITEMS.map(item => (
                <div key={item.id} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "1rem", alignItems: "center", borderBottom: "1px solid #f9f9f9", paddingBottom: "0.5rem" }}>
                  <div>
                    <h5 style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", fontWeight: 600, color: "#333", margin: 0 }}>
                      {item.name}
                    </h5>
                    <span style={{ fontSize: "0.68rem", color: "#888", fontFamily: "var(--font-ui)" }}>{item.spec}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "flex-end" }}>
                    <button
                      type="button"
                      onClick={() => handleQtyChange(item.id, quantities[item.id] - 10)}
                      style={{ width: "28px", height: "28px", border: "1px solid var(--brand-border)", background: "#fafafa", borderRadius: "3px", cursor: "pointer", fontSize: "0.82rem" }}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantities[item.id]}
                      onChange={e => handleQtyChange(item.id, parseInt(e.target.value) || 0)}
                      style={{
                        width: "60px",
                        textAlign: "center",
                        padding: "4px",
                        border: "1.5px solid var(--brand-border)",
                        fontFamily: "var(--font-ui)",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--brand-navy)",
                        borderRadius: "2px"
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => handleQtyChange(item.id, quantities[item.id] + 10)}
                      style={{ width: "28px", height: "28px", border: "1px solid var(--brand-border)", background: "#fafafa", borderRadius: "3px", cursor: "pointer", fontSize: "0.82rem" }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: Calculator & Cost Analysis */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          {/* Main Sourcing Result Box */}
          <div
            style={{
              background: "var(--brand-navy)",
              color: "#fff",
              padding: "2rem",
              borderRadius: "4px",
              boxShadow: "0 10px 30px rgba(23, 44, 71, 0.15)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem"
            }}
          >
            <div>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--brand-teal)", textTransform: "uppercase" }}>
                Total Projected Cost
              </span>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", fontWeight: 700, margin: "0.25rem 0", color: "#fff" }}>
                {formatCurrency(activeBudget.total)}
              </h1>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.6 }}>
                Based on **{quality === "luxury" ? "300TC (Luxury)" : "250TC (Standard)"}** quality configurations, managed and delivered securely by SIEM.
              </p>
            </div>

            {/* If Split Strategy is active, show the savings! */}
            {strategy === "split" ? (
              <div style={{ background: "rgba(84, 159, 151, 0.15)", border: "1px solid var(--brand-teal)", padding: "1.25rem", borderRadius: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <TrendingDown size={20} style={{ color: "var(--brand-teal)" }} />
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>
                    Split-Sourcing Savings: {formatCurrency(estimatedSavings)}
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "rgba(255,255,255,0.8)", margin: "4px 0 0", lineHeight: 1.5 }}>
                  By splitting items across optimal local manufacturers, you save **{savingsPercent}%** compared to placing the full package with the most expensive single supplier!
                </p>
              </div>
            ) : (
              <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "1rem", borderRadius: "4px", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                <Info size={16} style={{ color: "var(--brand-teal)", flexShrink: 0, marginTop: "2px" }} />
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.5 }}>
                  *Note: Since some items are Not Quoted by {SUPPLIERS[strategy].name}, this budget automatically uses substitutions from alternative partners to give a realistic package cost. Select **Split Sourcing** above to see the optimal mix!
                </p>
              </div>
            )}

            {/* Strategy Breakdown List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.25rem" }}>
              <h4 style={{ fontFamily: "var(--font-ui)", fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.08em", margin: 0 }}>
                Budget Allocation Details
              </h4>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxHeight: "240px", overflowY: "auto", paddingRight: "5px" }}>
                {activeBudget.breakdown.map(bItem => {
                  const original = LINEN_ITEMS.find(i => i.id === bItem.itemId)!;
                  return (
                    <div key={bItem.itemId} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.78rem" }}>
                      <div>
                        <span style={{ fontWeight: 600, color: "#fff" }}>{original.name}</span>{" "}
                        <span style={{ color: "rgba(255,255,255,0.4)" }}>x{quantities[bItem.itemId]}</span>
                        <div style={{ fontSize: "0.65rem", color: bItem.isSubstituted ? "var(--brand-teal)" : "rgba(255,255,255,0.5)" }}>
                          {bItem.isSubstituted ? `Substituted from ${bItem.supplierName}` : `Sourced from ${bItem.supplierName}`}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontWeight: 700 }}>{formatCurrency(bItem.cost)}</span>
                        <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.4)" }}>{formatCurrency(bItem.price)} / unit</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Comparison Graph Card */}
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--brand-border)",
              padding: "1.5rem",
              borderRadius: "4px"
            }}
          >
            <h3 style={{ fontFamily: "var(--font-ui)", fontSize: "0.85rem", fontWeight: 700, color: "#333", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem", borderBottom: "1px solid #eee", paddingBottom: "0.5rem" }}>
              Strategy Comparison (Total Package Cost)
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {Object.entries(SUPPLIERS).map(([key, info]) => {
                const total = calculatedBudgets[key as keyof typeof calculatedBudgets].total;
                const isOptimal = key === "split";
                
                // Max total calculation for relative width mapping
                const maxTotal = Math.max(
                  calculatedBudgets.split.total,
                  calculatedBudgets.alankara.total,
                  calculatedBudgets.bedsheets.total,
                  calculatedBudgets.raawana.total
                );
                
                const percentWidth = maxTotal > 0 ? (total / maxTotal) * 100 : 0;

                return (
                  <div key={key}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.78rem", marginBottom: "4px" }}>
                      <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, color: isOptimal ? "var(--brand-teal-dark)" : "#333" }}>
                        {isOptimal ? "🚀 SIEM Split Sourcing" : info.name}
                      </span>
                      <strong style={{ fontFamily: "var(--font-ui)", color: isOptimal ? "var(--brand-teal-dark)" : "#333" }}>
                        {formatCurrency(total)}
                      </strong>
                    </div>
                    <div style={{ width: "100%", height: "10px", background: "#f0f0f0", borderRadius: "2px", overflow: "hidden" }}>
                      <div
                        style={{
                          width: `${percentWidth}%`,
                          height: "100%",
                          background: info.color,
                          borderRadius: "2px",
                          transition: "width 0.5s var(--ease-smooth)"
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Sourcing Price Comparison Table (The original Document Data) */}
      <div
        style={{
          background: "#fff",
          border: "1px solid var(--brand-border)",
          padding: "2rem",
          borderRadius: "4px",
          overflowX: "auto"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--brand-navy)", margin: 0 }}>
              Bed & Bath Linen Price Comparison Matrix
            </h3>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.78rem", color: "var(--brand-body)", margin: "2px 0 0" }}>
              Standard Super-King setup (approx. 110"x110" sheet, 18"x27" pillowcases) and Standard King mattress (72"x78").
            </p>
          </div>
          <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "var(--terra-600)", border: "1px solid var(--terra-300)", padding: "4px 8px", background: "rgba(196,98,45,0.05)", borderRadius: "2px", fontFamily: "var(--font-ui)", textTransform: "uppercase" }}>
            LKR Prices (Excl. VAT)
          </span>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px" }}>
          <thead>
            <tr style={{ borderBottom: "2.5px solid var(--brand-navy)", textAlign: "left" }}>
              <th style={{ padding: "0.75rem", fontFamily: "var(--font-ui)", fontSize: "0.8rem", fontWeight: 700, color: "var(--brand-navy)" }}>Item Category</th>
              <th style={{ padding: "0.75rem", fontFamily: "var(--font-ui)", fontSize: "0.8rem", fontWeight: 700, color: "var(--brand-navy)" }}>Alankara Designs</th>
              <th style={{ padding: "0.75rem", fontFamily: "var(--font-ui)", fontSize: "0.8rem", fontWeight: 700, color: "var(--brand-navy)" }}>Bedsheets Paradise</th>
              <th style={{ padding: "0.75rem", fontFamily: "var(--font-ui)", fontSize: "0.8rem", fontWeight: 700, color: "var(--brand-navy)" }}>Raawana Bedding</th>
            </tr>
          </thead>
          <tbody>
            {LINEN_ITEMS.map((item, idx) => (
              <tr key={item.id} style={{ borderBottom: "1px solid #eee", background: idx % 2 === 0 ? "#fafafa" : "#fff" }}>
                <td style={{ padding: "1rem 0.75rem" }}>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", fontWeight: 700, color: "#333" }}>{item.name}</div>
                  <div style={{ fontSize: "0.7rem", color: "#666", fontFamily: "var(--font-ui)" }}>({item.spec})</div>
                </td>
                
                {/* Alankara Designs */}
                <td style={{ padding: "1rem 0.75rem" }}>
                  {item.alankara.price300 !== null ? (
                    <div>
                      <strong style={{ fontSize: "0.85rem", color: "var(--brand-navy)" }}>{formatCurrency(item.alankara.price300)}</strong>
                      <div style={{ fontSize: "0.68rem", color: "var(--brand-teal-dark)", fontWeight: 600 }}>{item.alankara.label}</div>
                    </div>
                  ) : (
                    <span style={{ fontSize: "0.72rem", color: "#999", fontStyle: "italic" }}>{item.alankara.label}</span>
                  )}
                </td>

                {/* Bedsheets Paradise */}
                <td style={{ padding: "1rem 0.75rem" }}>
                  {item.bedsheets.price250 !== null ? (
                    <div>
                      <strong style={{ fontSize: "0.85rem", color: "var(--brand-navy)" }}>{formatCurrency(item.bedsheets.price250)}</strong>
                      <div style={{ fontSize: "0.68rem", color: "#666" }}>{item.bedsheets.label}</div>
                    </div>
                  ) : (
                    <span style={{ fontSize: "0.72rem", color: "#999", fontStyle: "italic" }}>{item.bedsheets.label}</span>
                  )}
                </td>

                {/* Raawana Bedding */}
                <td style={{ padding: "1rem 0.75rem" }}>
                  {item.raawana.price300 !== null ? (
                    <div>
                      <div style={{ fontSize: "0.82rem", marginBottom: "3px" }}>
                        <strong style={{ color: "var(--brand-navy)" }}>{formatCurrency(item.raawana.price300)}</strong>{" "}
                        <span style={{ fontSize: "0.68rem", color: "#555" }}>(300TC)</span>
                      </div>
                      {item.raawana.price250 !== null && (
                        <div style={{ fontSize: "0.82rem" }}>
                          <strong style={{ color: "#555" }}>{formatCurrency(item.raawana.price250)}</strong>{" "}
                          <span style={{ fontSize: "0.68rem", color: "#777" }}>(250TC)</span>
                        </div>
                      )}
                      <div style={{ fontSize: "0.65rem", color: "#888", marginTop: "2px" }}>{item.raawana.label}</div>
                    </div>
                  ) : (
                    <div>
                      <span style={{ fontSize: "0.72rem", color: "#999", fontStyle: "italic" }}>{item.raawana.label}</span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sourcing Inquiry Sourcing Form */}
      <div
        style={{
          background: "#fff",
          border: "1px solid var(--brand-border)",
          padding: "2.5rem",
          borderRadius: "4px"
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }} className="form-layout">
          <div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--brand-navy)", marginBottom: "0.75rem" }}>
              Request Sourcing Sourcing & Procurement Support
            </h3>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "var(--brand-body)", lineHeight: 1.8, marginBottom: "1rem" }}>
              Are you planning a new hotel project, guest villa refurbishment, or high-end residential fit-out in Sri Lanka? 
              SIEM can manage the full FF&E procurement chain, including sourcing, quality validation, customs imports (specifically for our Italian Marble & Tiles lines), logistics, and installation.
            </p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "var(--brand-body)", lineHeight: 1.8, margin: 0 }}>
              Submit your simulated linen quantity requirements here. Our estimating department will prepare a detailed commercial proposal, including direct trade prices and split-sourcing optimizations for your project.
            </p>
          </div>

          <div>
            {formSubmitted ? (
              <div style={{ background: "var(--brand-teal-light)", border: "1px solid var(--brand-teal)", padding: "2rem", borderRadius: "4px", textAlign: "center" }}>
                <Check size={36} style={{ color: "var(--brand-teal-dark)", marginBottom: "0.5rem" }} />
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--brand-navy)", margin: "0 0 0.5rem" }}>
                  Inquiry Received Successfully!
                </h4>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.82rem", color: "var(--brand-body)", margin: 0, lineHeight: 1.6 }}>
                  Thank you, **{formData.name}**. Our procurement estimator will review your custom configuration (**{formatCurrency(activeBudget.total)}** package estimation) and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#555", textTransform: "uppercase", marginBottom: "4px", fontFamily: "var(--font-ui)" }}>Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      style={{ width: "100%", padding: "8px", border: "1.5px solid var(--brand-border)", borderRadius: "2px", fontFamily: "var(--font-ui)", fontSize: "0.82rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#555", textTransform: "uppercase", marginBottom: "4px", fontFamily: "var(--font-ui)" }}>Company / Project</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                      style={{ width: "100%", padding: "8px", border: "1.5px solid var(--brand-border)", borderRadius: "2px", fontFamily: "var(--font-ui)", fontSize: "0.82rem" }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#555", textTransform: "uppercase", marginBottom: "4px", fontFamily: "var(--font-ui)" }}>Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      style={{ width: "100%", padding: "8px", border: "1.5px solid var(--brand-border)", borderRadius: "2px", fontFamily: "var(--font-ui)", fontSize: "0.82rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#555", textTransform: "uppercase", marginBottom: "4px", fontFamily: "var(--font-ui)" }}>Contact Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                      style={{ width: "100%", padding: "8px", border: "1.5px solid var(--brand-border)", borderRadius: "2px", fontFamily: "var(--font-ui)", fontSize: "0.82rem" }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, color: "#555", textTransform: "uppercase", marginBottom: "4px", fontFamily: "var(--font-ui)" }}>Project Details / Custom Requests</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={e => setFormData(p => ({ ...p, notes: e.target.value }))}
                    placeholder="E.g., Special fabric requirements, custom branding, pillows or bedding sizes..."
                    style={{ width: "100%", padding: "8px", border: "1.5px solid var(--brand-border)", borderRadius: "2px", fontFamily: "var(--font-ui)", fontSize: "0.82rem", resize: "vertical" }}
                  />
                </div>

                <div style={{ background: "#fbfbfb", border: "1.5px dashed var(--brand-teal)", padding: "0.75rem", borderRadius: "3px" }}>
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "0.72rem", color: "var(--brand-navy)", margin: 0, lineHeight: 1.5 }}>
                    📌 **Attachment Details**: Your current quantity simulator selection (<strong>{strategy === "split" ? "Split Sourcing Strategy" : SUPPLIERS[strategy].name}</strong>, valued at <strong>{formatCurrency(activeBudget.total)}</strong>) will be securely transmitted with this request.
                  </p>
                </div>

                <button
                  type="submit"
                  style={{
                    background: "var(--brand-teal)",
                    color: "#fff",
                    fontFamily: "var(--font-ui)",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    padding: "0.875rem",
                    border: "none",
                    borderRadius: "2px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    transition: "background 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--brand-teal-dark)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "var(--brand-teal)"}
                >
                  <ShoppingCart size={16} />
                  Submit Sourcing Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Screen Width Media Styles */}
      <style>{`
        @media (max-width: 900px) {
          .simulator-layout { grid-template-columns: 1fr !important; }
          .form-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
          .intro-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
