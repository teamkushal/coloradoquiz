import { TestBed } from '@angular/core/testing';

import { Experimental651Service } from './experimental651.service';

describe('Experimental651Service', () => {
  let service: Experimental651Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental651Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
