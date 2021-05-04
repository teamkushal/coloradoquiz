import { TestBed } from '@angular/core/testing';

import { Experimental3428Service } from './experimental3428.service';

describe('Experimental3428Service', () => {
  let service: Experimental3428Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3428Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
