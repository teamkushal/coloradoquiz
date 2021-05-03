import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1482Component } from './test-component1482.component';

describe('TestComponent1482Component', () => {
  let component: TestComponent1482Component;
  let fixture: ComponentFixture<TestComponent1482Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1482Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
