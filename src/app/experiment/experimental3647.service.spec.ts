import { TestBed } from '@angular/core/testing';

import { Experimental3647Service } from './experimental3647.service';

describe('Experimental3647Service', () => {
  let service: Experimental3647Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3647Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
