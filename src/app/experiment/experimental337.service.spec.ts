import { TestBed } from '@angular/core/testing';

import { Experimental337Service } from './experimental337.service';

describe('Experimental337Service', () => {
  let service: Experimental337Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental337Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
