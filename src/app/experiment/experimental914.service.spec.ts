import { TestBed } from '@angular/core/testing';

import { Experimental914Service } from './experimental914.service';

describe('Experimental914Service', () => {
  let service: Experimental914Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental914Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
