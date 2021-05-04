import { TestBed } from '@angular/core/testing';

import { Experimental3697Service } from './experimental3697.service';

describe('Experimental3697Service', () => {
  let service: Experimental3697Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3697Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
