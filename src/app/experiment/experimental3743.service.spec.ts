import { TestBed } from '@angular/core/testing';

import { Experimental3743Service } from './experimental3743.service';

describe('Experimental3743Service', () => {
  let service: Experimental3743Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3743Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
