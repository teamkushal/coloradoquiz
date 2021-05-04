import { TestBed } from '@angular/core/testing';

import { Experimental3529Service } from './experimental3529.service';

describe('Experimental3529Service', () => {
  let service: Experimental3529Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3529Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
