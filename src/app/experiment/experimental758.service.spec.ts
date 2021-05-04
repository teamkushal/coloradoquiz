import { TestBed } from '@angular/core/testing';

import { Experimental758Service } from './experimental758.service';

describe('Experimental758Service', () => {
  let service: Experimental758Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental758Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
