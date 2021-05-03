import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2265Component } from './test-component2265.component';

describe('TestComponent2265Component', () => {
  let component: TestComponent2265Component;
  let fixture: ComponentFixture<TestComponent2265Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2265Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
