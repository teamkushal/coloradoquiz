import { TestBed } from '@angular/core/testing';

import { Experimental420Service } from './experimental420.service';

describe('Experimental420Service', () => {
  let service: Experimental420Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental420Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
