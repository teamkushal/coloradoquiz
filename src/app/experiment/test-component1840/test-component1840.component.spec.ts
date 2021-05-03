import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1840Component } from './test-component1840.component';

describe('TestComponent1840Component', () => {
  let component: TestComponent1840Component;
  let fixture: ComponentFixture<TestComponent1840Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1840Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
