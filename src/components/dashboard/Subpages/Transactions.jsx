import React, { useState } from 'react';
import { 
  CreditCard, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Filter,
  Download,
  Search,
  Calendar,
  Eye,
  ArrowUpRight,
  ArrowDownLeft,
  MoreHorizontal
} from 'lucide-react';

const Transactions = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('30days');

  // Données mockées pour les transactions
  const transactions = [
    {
      id: 'TXN-001',
      type: 'sale',
      eventName: 'Summer Music Festival 2024',
      ticketType: 'VIP Pass',
      amount: 12500,
      quantity: 5,
      buyerName: 'John Smith',
      buyerEmail: 'john.smith@email.com',
      date: '2024-03-15T14:30:00',
      status: 'completed',
      fees: 750,
      netAmount: 11750
    },
    {
      id: 'TXN-002',
      type: 'refund',
      eventName: 'Jazz Night at Kigali Serena',
      ticketType: 'Standard',
      amount: -4500,
      quantity: 3,
      buyerName: 'Michael Johnson',
      buyerEmail: 'm.johnson@email.com',
      date: '2024-03-14T09:15:00',
      status: 'processed',
      fees: -270,
      netAmount: -4230
    },
    {
      id: 'TXN-003',
      type: 'sale',
      eventName: 'Tech Conference at Kigali Convention Centre',
      ticketType: 'Premium',
      amount: 8000,
      quantity: 2,
      buyerName: 'Sarah Williams',
      buyerEmail: 'sarah.williams@email.com',
      date: '2024-03-14T16:45:00',
      status: 'completed',
      fees: 480,
      netAmount: 7520
    },
    {
      id: 'TXN-004',
      type: 'sale',
      eventName: 'Digital Marketing Workshop at Impact Hub',
      ticketType: 'Early Bird',
      amount: 3000,
      quantity: 1,
      buyerName: 'Robert Davis',
      buyerEmail: 'robert.davis@email.com',
      date: '2024-03-13T11:20:00',
      status: 'pending',
      fees: 180,
      netAmount: 2820
    },
    {
      id: 'TXN-005',
      type: 'sale',
      eventName: 'Festival at Amahoro Stadium',
      ticketType: 'Standard',
      amount: 15000,
      quantity: 10,
      buyerName: 'Emily Chen',
      buyerEmail: 'emily.chen@email.com',
      date: '2024-03-12T13:10:00',
      status: 'completed',
      fees: 900,
      netAmount: 14100
    },
    {
      id: 'TXN-006',
      type: 'refund',
      eventName: 'Business Networking at Marriott Kigali',
      ticketType: 'VIP',
      amount: -7500,
      quantity: 1,
      buyerName: 'David Wilson',
      buyerEmail: 'd.wilson@email.com',
      date: '2024-03-11T08:30:00',
      status: 'completed',
      fees: -450,
      netAmount: -7050
    }
  ];

  // Calcul des statistiques
  const totalRevenue = transactions
    .filter(t => t.type === 'sale' && t.status === 'completed')
    .reduce((sum, t) => sum + t.netAmount, 0);

  const totalRefunds = Math.abs(transactions
    .filter(t => t.type === 'refund')
    .reduce((sum, t) => sum + t.netAmount, 0));

  const pendingAmount = transactions
    .filter(t => t.status === 'pending')
    .reduce((sum, t) => sum + t.netAmount, 0);

  const totalTicketsSold = transactions
    .filter(t => t.type === 'sale')
    .reduce((sum, t) => sum + t.quantity, 0);

  // Filtrage des transactions
  const filteredTransactions = transactions.filter(transaction => {
    const matchesFilter = selectedFilter === 'all' || transaction.type === selectedFilter;
    const matchesSearch = transaction.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.buyerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(dateString));
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      completed: 'bg-green-100 text-green-800 border-green-200',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      processed: 'bg-blue-100 text-blue-800 border-blue-200',
      failed: 'bg-red-100 text-red-800 border-red-200'
    };

    const statusLabels = {
      completed: 'Terminée',
      pending: 'En attente',
      processed: 'Traitée',
      failed: 'Échouée'
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}>
        {statusLabels[status]}
      </span>
    );
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Transactions</h1>
          <p className="text-slate-600 mt-1">Manage sales and refunds</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Download size={16} />
          Exporter
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm">Total revenues</p>
              <p className="text-2xl font-bold text-slate-800">{formatCurrency(totalRevenue)}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-green-600" size={24} />
            </div>
          </div>
          <p className="text-green-600 text-sm mt-2">+12.5% this month</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm">Refunds</p>
              <p className="text-2xl font-bold text-slate-800">{formatCurrency(totalRefunds)}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <TrendingDown className="text-red-600" size={24} />
            </div>
          </div>
          <p className="text-red-600 text-sm mt-2">-3.2% this month</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm">En attente</p>
              <p className="text-2xl font-bold text-slate-800">{formatCurrency(pendingAmount)}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <DollarSign className="text-yellow-600" size={24} />
            </div>
          </div>
          <p className="text-yellow-600 text-sm mt-2">2 transactions</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm">Tickets vendus</p>
              <p className="text-2xl font-bold text-slate-800">{totalTicketsSold}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CreditCard className="text-blue-600" size={24} />
            </div>
          </div>
          <p className="text-blue-600 text-sm mt-2">+8 aujourd'hui</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Rechercher par événement ou acheteur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Type Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === 'all' 
                  ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Toutes
            </button>
            <button
              onClick={() => setSelectedFilter('sale')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === 'sale' 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Ventes
            </button>
            <button
              onClick={() => setSelectedFilter('refund')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === 'refund' 
                  ? 'bg-red-100 text-red-700 border border-red-200' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Remboursements
            </button>
          </div>

          {/* Date Filter */}
          <select 
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="7days">7 derniers jours</option>
            <option value="30days">30 derniers jours</option>
            <option value="3months">3 derniers mois</option>
            <option value="year">Cette année</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Transaction
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Événement
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Acheteur
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Montant
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Statut
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        transaction.type === 'sale' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {transaction.type === 'sale' ? 
                          <ArrowUpRight className={`${transaction.type === 'sale' ? 'text-green-600' : 'text-red-600'}`} size={16} /> :
                          <ArrowDownLeft className="text-red-600" size={16} />
                        }
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-slate-900">{transaction.id}</p>
                        <p className="text-xs text-slate-500">{transaction.quantity} ticket{transaction.quantity > 1 ? 's' : ''}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{transaction.eventName}</p>
                      <p className="text-xs text-slate-500">{transaction.ticketType}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{transaction.buyerName}</p>
                      <p className="text-xs text-slate-500">{transaction.buyerEmail}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className={`text-sm font-bold ${
                        transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {formatCurrency(transaction.netAmount)}
                      </p>
                      <p className="text-xs text-slate-500">
                        Frais: {formatCurrency(Math.abs(transaction.fees))}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(transaction.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                    {formatDate(transaction.date)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-slate-400 hover:text-blue-600 transition-colors">
                        <Eye size={16} />
                      </button>
                      <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <CreditCard className="mx-auto h-12 w-12 text-slate-400" />
            <h3 className="mt-2 text-sm font-medium text-slate-900">Aucune transaction</h3>
            <p className="mt-1 text-sm text-slate-500">
              {searchTerm ? 'Aucune transaction ne correspond à votre recherche.' : 'Les transactions apparaîtront ici.'}
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredTransactions.length > 0 && (
        <div className="bg-white px-6 py-4 border border-slate-200 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredTransactions.length}</span> of{' '}
              <span className="font-medium">{filteredTransactions.length}</span> transactions
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm border border-slate-200 rounded-md hover:bg-slate-50 disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                1
              </button>
              <button className="px-3 py-1 text-sm border border-slate-200 rounded-md hover:bg-slate-50 disabled:opacity-50">
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;