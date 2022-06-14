import { TestBed, inject } from '@angular/core/testing';

import { ChequeService } from './cheque.service';

describe('ChequeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChequeService]
    });
  });

  it('should be created', inject([ChequeService], (service: ChequeService) => {
    expect(service).toBeTruthy();
  }));
});
