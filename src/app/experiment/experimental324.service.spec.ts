import { TestBed } from '@angular/core/testing';

import { Experimental324Service } from './experimental324.service';

describe('Experimental324Service', () => {
  let service: Experimental324Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental324Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
