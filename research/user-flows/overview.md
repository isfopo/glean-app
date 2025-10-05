### ✅ **1. Onboarding Flow: Setting Up Your Discovery Journey**
*Goal: Help users connect their identity to intentional discovery — not account creation.*

| Step | Action | Why It Aligns with Mission | User Input Required |
|------|--------|----------------------------|---------------------|
| 1 | **Welcome screen** | *No "time to sign up" pressure* → frames onboarding as "finding what matters" | N/A |
| 2 | **"Tell us what you seek" prompt** | *Avoids generic "your name" → targets discovery intent* | Text input: *e.g., "vintage scarves for my sister," "1990s teaching notebooks"* |
| 3 | **Account setup** | *Name/email/password are for identity — not for "security" or "data mining"* | • Name (text) <br>• Email (text) <br>• Password (text) <br>• *Optional*: Avatar (choose from 10 earthy patterns) |
| 4 | **Location permission** | *GPS is for discovery, not tracking* → explicitly states "to find shops near you" | Tap to grant location access |
| 5 | **Final confirmation** | *No "complete profile" pressure* → ends with discovery readiness | "I’m ready to find what matters to me" (checkbox) |

**Key nuance**:
- **No password reset links** → if users forget passwords, they’re guided to "reconnect via your last discovery" (e.g., "We’ll show you shops where you found items last week").
- **Avatar is optional** → defaults to a subtle leaf pattern (boho aesthetic) to symbolize "gleaning from nature."
- *Zero mention of "time" or "efficiency"* → e.g., "Your discovery journey starts now" (not "You’ll save time").

> 💡 **Why this works for personas**:
> - *Maya* sees "vintage scarves for my sister" → immediately relevant.
> - *Eleanor* sees "1990s teaching notebooks" → ties to her life story.
> - *Alex* sees "vintage quilts for shelters" → targets community needs.

---

### ✅ **2. Discovery Flow: Finding Specific Items Before Visiting**
*Goal: Let users search for *exact items* via natural language → see real-time inventory at nearby shops.*

| Step | Action | Why It Aligns with Mission |
|------|--------|----------------------------|
| 1 | User types natural language search (e.g., *"1990s teaching notebooks, Portland"*) | *No "nearby shops" list* → shows *specific items* they seek |
| 2 | App processes search **on-device** with TensorFlow.js | *No server latency* → users see results instantly (avoids "waiting for search") |
| 3 | Map view shows: [Shop Name] • [AI-tagged item] • [Price] • [Distance] | *No "shops with items" → shows *what they found* pre-visit* |
| 4 | User taps an item → sees: <br> - *Verified* photo from real shop <br> - AI metadata (e.g., *"vintage blue denim jacket, $10, Maple Street Thrift"*) <br> - "Visit now" button | *No "item availability" confusion* → users know *exactly* what they’re looking for |
| 5 | User sees "Discovery efficiency" metric *only in context*: <br> *"You’d visit 1 shop to find this item"* (not "you saved time") | *Measures intent, not speed* → reinforces discovery value |

**Critical implementation**:
- If AI mislabels (e.g., "red" → "blue"), user edits *in-app* with one tap → **no server calls**.
- *Never shows "shops with similar items"* → only **verified items users requested**.

---

### ✅ **3. Sharing Flow: Connecting Finders & Shoppers**
*Goal: Create discovery loops where sharing *enhances* intent — not transactions.*

| Step | Action | Why It Aligns with Mission |
|------|--------|----------------------------|
| 1 | User visits shop → takes photo of item | *No "share for discounts"* → pure discovery capture |
| 2 | App runs **TensorFlow.js on-device** to tag item (e.g., *"vintage scarves, 1990s-2000s"*) | *No data sent to servers* → protects privacy |
| 3 | User sees AI tags → edits if needed (e.g., *"vintage scarves"* → *"handmade scarves"*) | *User controls metadata* → aligns with intentional discovery |
| 4 | User shares with "finder" (if item was previously tagged): <br> - *Explicit permission prompt*: "Do you want to notify the person who found this?" (yes/no) | *No spam* → only if both users consent |
| 5 | If shared: <br> - Finder gets *real-time notification*: "Your [vintage scarf] was found by Maya!" <br> - Both get badges: <br>   • Finder: "Item Shared" <br>   • Shopper: "First Find" | *No transactions* → just discovery connection |

**Key nuance**:
- **No "I saw this" notifications** → only *verified* shares with mutual consent.
- Badges are **discovery rewards** (not purchase incentives). Example: *Eleanor gets "First Find" when Maya shares her notebook*.

---

### ✅ **4. Purchase Flow: Offline Acknowledgment Only**
*Goal: Close the discovery loop without platform involvement.*

| Step | Action | Why It Aligns with Mission |
|------|--------|----------------------------|
| 1 | After visiting shop → user taps "I bought it" | *No prices, no inventory changes* → purely offline confirmation |
| 2 | User can send *optional* thank-you note to finder via in-app message | *Builds community* → not transactional |
| 3 | Finder gets *only* notification: "Eleanor found your [1990s notebook]! 🌼" | *No sales language* → focuses on shared discovery |
| 4 | Finder receives "Item Shared" badge (if permission granted) | *Badges = discovery value*, not purchases |

**Critical rule**:
- **Zero platform involvement** → shops never see purchase data. The app *only* confirms the user’s action.
- *Never* shows "purchased" on shop listings → shops remain purely inventory sources.

---

### ✅ **5. Why Every Detail Avoids Common Pitfalls**
| Your Proposal’s Non-Negotiable | How This Flow Enforces It |
|-------------------------------|---------------------------|
| **No time savings language** | All flows describe *finding specific items* → e.g., "1990s notebooks" not "shops faster" |
| **AI on-device** | TensorFlow.js runs in user’s browser → no server data leaks |
| **Zero transactions on platform** | "I bought it" = offline acknowledgment → *never* affects shop inventory |
| **Gamification for discovery** | Badges trigger *sharing* (e.g., "First Find" → shareable moment) |
| **Boho UX for Gen-Z** | Language like "meaningful items," "shareable moments" → no tech jargon |

> 🔥 **Real-world example for all flows**:
> *Eleanor (67) searches for "1990s teaching notebooks" → finds one at Shop X → shares it with Maya (21) → Maya later buys it → both get badges. Glean never tracks sales or time saved.*

---

> *"Glean isn’t a tool for shopping — it’s a tool for discovering your community."*
