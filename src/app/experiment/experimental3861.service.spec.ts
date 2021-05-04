import { TestBed } from '@angular/core/testing';

import { Experimental3861Service } from './experimental3861.service';

describe('Experimental3861Service', () => {
  let service: Experimental3861Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3861Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
