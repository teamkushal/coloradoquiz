import { TestBed } from '@angular/core/testing';

import { Experimental3664Service } from './experimental3664.service';

describe('Experimental3664Service', () => {
  let service: Experimental3664Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3664Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
