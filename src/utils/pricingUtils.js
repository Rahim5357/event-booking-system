export function findTicketPrice(name, tickets) {
  const ticket = tickets.find(ticket => ticket.name === name);
  return ticket ? ticket.price : 0;
}