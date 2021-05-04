import { TestBed } from '@angular/core/testing';

import { Experimental1697Service } from './experimental1697.service';

describe('Experimental1697Service', () => {
  let service: Experimental1697Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1697Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
