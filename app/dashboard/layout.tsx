export default function Dashboard(
    {
        children,
        notifications,
        analytics,
        logs,
    }:
    {
        children:React.ReactNode,
        notifications:React.ReactNode,
        analytics:React.ReactNode,
        logs:React.ReactNode

    }) {
  return (
  <>
    <div>
        <div>{children}</div>
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: 'row' }}>
                <div>{notifications}</div>
                <div>{analytics}</div>
            </div>
            <div style={{ display: "flex", flexDirection: 'row' }}>
                <div>{logs}</div>
            </div>
        </div>
    </div>
  </>
  );
}
