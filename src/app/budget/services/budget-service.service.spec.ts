import { TestBed } from '@angular/core/testing';

import { BudgetServiceService } from './budget-service.service';

describe('BudgetServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BudgetServiceService = TestBed.get(BudgetServiceService);
    expect(service).toBeTruthy();
  });
});
