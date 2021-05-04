import { TestBed } from '@angular/core/testing';

import { Experimental1834Service } from './experimental1834.service';

describe('Experimental1834Service', () => {
  let service: Experimental1834Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1834Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
