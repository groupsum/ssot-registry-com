<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap - SSOT Registry</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #18181b;
            margin: 0;
            padding: 0;
            background-color: #fafafa;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          .header {
            margin-bottom: 30px;
            border-bottom: 1px solid #e4e4e7;
            padding-bottom: 20px;
          }
          .header h1 {
            font-size: 24px;
            font-weight: 800;
            margin: 0 0 8px 0;
            color: #09090b;
          }
          .header p {
            margin: 0;
            color: #71717a;
            font-size: 14px;
          }
          .table-container {
            background: #ffffff;
            border: 1px solid #e4e4e7;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 13px;
          }
          thead {
            background-color: #f4f4f5;
            border-bottom: 1px solid #e4e4e7;
          }
          th {
            padding: 12px 16px;
            font-weight: 600;
            color: #52525b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-size: 11px;
          }
          td {
            padding: 12px 16px;
            border-bottom: 1px solid #f4f4f5;
            color: #3f3f46;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover {
            background-color: #fafafa;
          }
          a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
          }
          .tag {
            display: inline-block;
            padding: 2px 8px;
            background-color: #f4f4f5;
            border-radius: 9999px;
            font-size: 11px;
            font-weight: 500;
            color: #52525b;
          }
          .tag-priority {
            background-color: #dbeafe;
            color: #1e40af;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>XML Sitemap</h1>
            <p>
              This is an XML Sitemap generated for search engines. It can also be viewed by humans as a styled table.
              <xsl:if test="sitemap:sitemapindex">
                This index contains <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
              </xsl:if>
              <xsl:if test="sitemap:urlset">
                This sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
              </xsl:if>
            </p>
          </div>
          
          <div class="table-container">
            <xsl:if test="sitemap:sitemapindex">
              <table>
                <thead>
                  <tr>
                    <th>Sitemap URL</th>
                    <th>Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <tr>
                      <td>
                        <xsl:variable name="sitemapURL">
                          <xsl:value-of select="sitemap:loc"/>
                        </xsl:variable>
                        <a href="{$sitemapURL}"><xsl:value-of select="sitemap:loc"/></a>
                      </td>
                      <td>
                        <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:if>
            
            <xsl:if test="sitemap:urlset">
              <table>
                <thead>
                  <tr>
                    <th>URL Loc</th>
                    <th>Last Modified</th>
                    <th>Change Frequency</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td>
                        <xsl:variable name="itemURL">
                          <xsl:value-of select="sitemap:loc"/>
                        </xsl:variable>
                        <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
                      </td>
                      <td>
                        <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                      </td>
                      <td>
                        <span class="tag"><xsl:value-of select="sitemap:changefreq"/></span>
                      </td>
                      <td>
                        <span class="tag tag-priority"><xsl:value-of select="sitemap:priority"/></span>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:if>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
