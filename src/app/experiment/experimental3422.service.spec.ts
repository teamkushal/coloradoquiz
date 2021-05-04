import { TestBed } from '@angular/core/testing';

import { Experimental3422Service } from './experimental3422.service';

describe('Experimental3422Service', () => {
  let service: Experimental3422Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3422Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
