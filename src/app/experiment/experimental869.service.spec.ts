import { TestBed } from '@angular/core/testing';

import { Experimental869Service } from './experimental869.service';

describe('Experimental869Service', () => {
  let service: Experimental869Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental869Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
