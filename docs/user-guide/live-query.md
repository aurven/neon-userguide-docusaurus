---
id: live-query
title: Live Query
sidebar_position: 9
---

# Live Query

## What is live query?

A live query automatically pulls and updates content on a webpage based on predefined rules such as section, publication date, or importance. Instead of manually selecting articles, editors set the criteria, and the system displays matching results in real time. This helps keep content fresh and relevant with minimal manual effort.

## How do I create a live query zone on a webpage?

Inside a webpage, go to the zone where you want to insert a live query. Click the three-dot button and select **Create New Live Query.**

![Create Live Query](/img/userguide-screenshots/image%2091.png)

A new live query modal will appear, allowing you to define filters to display content based on your criteria. You can apply basic filters such as **time frame** and **type**, and add additional filters like **author**, **importance range**, **edition**, and **section**.

Once you've finished creating the live query, you can choose to apply it as either a **dynamic** or **static** query. The query will be saved, so you can reuse it in different zones.

![Live Query Modal](/img/userguide-screenshots/image%2092.png)

## How do I control the order of stories in a live query zone?

When creating a live query, you can sort the results based on criteria such as **rank**, **first publication date**, or **last update**.

![Live Query Sorting](/img/userguide-screenshots/image%2093.png)

If you want more control over the order, for example, to keep certain items fixed in place, you can **convert the dynamic query into a static one** allowing you to rearrange and pin certain stories in a specific order, which will remain unchanged until you decide to refresh it.

## What's the difference between static and dynamic query, and when should I use each?

### Dynamic Query
Use a **dynamic query** when you want content to stay fresh and automatically reflect new stories that match your filters. This is ideal for zones like "Latest News", where it's important to always show the most recent or relevant content. A dynamic query continuously retrieves and updates content based on the filters you set, such as section, author, or publication date. It automatically refreshes the results, so the zone it's assigned to will always show the most up-to-date matching stories.

### Static Query
Use a **static query** when you want more control over what appears and in what order. It captures the results at the time of creation and doesn't update automatically until you decide to refresh it. When you manually refresh, new content matching the filters will be pulled in. You can also pin certain items in place to keep them fixed, making static queries ideal for zones like curated highlights, where some stability matters.

## Can I combine static and dynamic live query zones on the same webpage?

Yes, definitely. You can use both static and dynamic live queries in different zones on the same webpage. This allows you to balance automation and editorial control, for example, showing the latest updates in one area with a dynamic query, while maintaining fixed, curated content in another zone using a static query.

## Can I apply the same live query in different zones or webpages?

Yes, you can reuse a live query across different zones or webpages. There are three simple ways to do this:

### 1. Copy and Paste

Use this option to reuse a query across different zones, even across different webpages.

**To Copy:**
- Open the live query modal where filters have already been applied, then click **Copy**.
    
    ![Copy Live Query](/img/userguide-screenshots/image%2094.png)
    
- Alternatively, click the **three-dot menu** on the zone and select **Copy**.
    
    ![Copy from Zone Menu](/img/userguide-screenshots/image%2095.png)

**To Paste:**
- Navigate to the target zone, click the **three-dot menu**, and select **Paste** to apply the copied query.
    
    ![Paste Live Query](/img/userguide-screenshots/image%2096.png)

### 2. Duplicate (within the same webpage)

Use this to quickly copy a live query to another zone **on the same webpage**.

- Click the **three-dot menu** on the zone with the query you want to duplicate.
- Select **Duplicate**.
- A modal will appear allowing you to select the destination zone within the same page.

This is the fastest way to reuse a query when working within a single page.

![Duplicate Live Query](/img/userguide-screenshots/image%2097.png)

### 3. Add Existing Query

Use this if you've saved a query and want to apply it to other zones or pages.

- Click the **three-dot menu** on the target zone.
- Select **Add Existing Query**.
- In the modal, choose from your list of saved queries.

![Add Existing Query](/img/userguide-screenshots/image%2098.png)

## How can I apply a static query to have more control over which stories appear and stay in place?

To have more control and ensure that important or high-performing stories remain visible while other content changes, you can use a **static query** and **pin** specific stories to keep them in place. This allows you to keep those pinned stories fixed at the top of the zone, while the other items below can still be refreshed manually when needed.

### How to Apply a Static Query and Pin Stories

#### 1. Convert an existing dynamic query to static
- In a zone with a dynamic query, click the **three-dot menu** and select **Freeze Query Result**.
- This will convert the current results into a static query.

![Freeze Query Result](/img/userguide-screenshots/image%2099.png)

#### 2. Create and apply a new static query from the modal
- When configuring a new live query in the modal, apply your filters.
- Then click **Apply as Static Query** to save and apply it.

![Apply Static Query](/img/userguide-screenshots/image%20100.png)

Once a static query is applied:

#### 3. Pin key stories
- In the list of results, find the story you want to keep visible.
- Click the **pin icon** next to it.
- Pinned stories will stay in place, while the rest of the content in the zone can be updated manually.

![Pin Stories](/img/userguide-screenshots/image%20101.png)

## How can I make my live query results more relevant

To ensure your live query delivers relevant and meaningful content you can:

### Use Semantic Search

Depending on your organization, you may have access to Semantic Search. Semantic Search enhances the way your live query finds and retrieves content by understanding the meaning and context behind the words in your filters, rather than relying solely on exact keyword matches. This allows it to identify related concepts, synonyms, and topics closely connected to your search intent. For example, if you search for articles about "climate change," Semantic Search can also bring in stories about global warming or environmental policies even if those exact phrases aren't in the text.

This results in richer, more accurate query results that better match what you're actually looking for. Semantic Search helps reduce missed relevant content and improves the overall freshness and quality of your webpage.

If your organization hasn't activated this feature yet and you're interested in exploring it, please contact the Neon team.

### Maximize Your Filters

You can apply basic filters such as time frame and type, and add more specific ones like author, importance range, edition, and section. Additionally, inheritance for section and edition filters is supported, meaning if these filters are set at the webpage or zone level, they automatically apply to your live query. This ensures consistent and streamlined results without extra setup.

By using these filtering options, you can precisely tailor the content displayed, making your live query results more accurate, relevant, and aligned exactly with what you want to showcase.

## Why aren't the stories in my live query zone updating?

### Check if you're using a dynamic or static query
If your zone uses a static query, it will not update automatically. It captures a snapshot of the results at the time it was created. To update the content, you need to manually refresh it or convert it back to a dynamic query.
Dynamic queries, on the other hand, refresh automatically based on the filters you've set and always show the most up-to-date content.

### Your filters are too narrow
If your live query uses very specific filters, such as a tight publication date range, a single author, or uncommon tags, it's possible that no new stories match those criteria. Broadening your filters can help ensure that more content is included.

### There may be a technical or sync issue
If your filters look fine and the query type is correct but the content still doesn't appear, it might be due to a publishing delay or a sync issue. Make sure the expected stories are published and meet the filter criteria. If the issue persists, contact your technical team for support.

## Why can't I move a live query to another zone?

![Live Query Move Error](/img/userguide-screenshots/image%20102.png)

Live queries are bound to specific zones and cannot be moved directly. However, you can copy the query and apply it to another zone using the methods described in the "Can I apply the same live query in different zones or webpages?" section above.