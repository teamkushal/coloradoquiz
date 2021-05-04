import { TestBed } from '@angular/core/testing';

import { Experimental3771Service } from './experimental3771.service';

describe('Experimental3771Service', () => {
  let service: Experimental3771Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3771Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
