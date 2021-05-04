import { TestBed } from '@angular/core/testing';

import { Experimental18Service } from './experimental18.service';

describe('Experimental18Service', () => {
  let service: Experimental18Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental18Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
