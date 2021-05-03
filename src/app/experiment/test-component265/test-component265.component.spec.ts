import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent265Component } from './test-component265.component';

describe('TestComponent265Component', () => {
  let component: TestComponent265Component;
  let fixture: ComponentFixture<TestComponent265Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent265Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
